import { FC, ReactNode, useContext, useEffect, useMemo, useRef } from "react";
import { popoverContentBaseCls } from "../../consts/className";
import { PopoverContext } from ".";
import { createPortal } from "react-dom";

interface PopoverContentProps {
    children: ReactNode; 
    className?: string; 
    position?: "bottom-left" | "bottom-center" | "bottom-right"; 
}

const PopoverContent: FC<PopoverContentProps> = ({ children, className, position="bottom-left"}) => {
    const { isOpen, close,  triggerRef  } = useContext(PopoverContext);
    const contentRef = useRef<HTMLDivElement>(null);

    const calculatePosition = () => {
        if (isOpen && triggerRef.current && contentRef.current) {
            const triggerRect = triggerRef.current.getBoundingClientRect();
            console.log("좌표:", triggerRect);

            // 위치 계산
            contentRef.current.style.position = "absolute";

            if (position === "bottom-left") {
                contentRef.current.style.top = `${triggerRect.bottom + window.scrollY}px`;
                contentRef.current.style.left = `${triggerRect.left + window.scrollX}px`;
            }

            if (position === "bottom-center") {
                contentRef.current.style.top = `${triggerRect.bottom + window.scrollY}px`;
                contentRef.current.style.left = `${triggerRect.left + triggerRect.width / 2 + window.scrollX}px`;
            }

            if (position === "bottom-right") {
                contentRef.current.style.top = `${triggerRect.bottom + window.scrollY}px`;
                contentRef.current.style.left = `${triggerRect.right + window.scrollX}px`;
            }
        }
    };

     // 팝오버가 열리거나 위치가 변경될 때 위치 계산
    useEffect(() => {
        calculatePosition();
    }, [isOpen, position]);

    // 화면 리사이즈
    const handleResize = () => {
        // 리사이즈 되면 다시 위치 계산
        calculatePosition();
    };
    
    // 외부 클릭 시 팝오버 닫히기
    const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (isOpen && contentRef.current && !contentRef.current.contains(target) && triggerRef.current && !triggerRef.current.contains(target)) {
            close();
        }
    };

    useEffect(() => {
        if (isOpen) {
            // resize 이벤트가 발생할 때 handleResize 함수가 실행되도록 한다.
            window.addEventListener("resize", handleResize);
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            // 이벤트 리스너를 제거하여 이벤트 리스너가 리사이즈될 때마다 계속해서 생겨나지 않도록 처리한다. (clean up)
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const popoverContentCls = useMemo(() => {
        const baseCls = className ? `${className} ${popoverContentBaseCls}` : popoverContentBaseCls;
        return `${baseCls} ${position}`;
    }, [className, position]);

    if (!isOpen) {
        return null; 
    }
    
    return createPortal(
        <div ref={contentRef} className={popoverContentCls}>
            {children}
        </div>,
        document.body 
    );

}

export default PopoverContent;