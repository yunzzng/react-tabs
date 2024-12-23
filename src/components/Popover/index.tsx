import { createContext, FC, ReactNode, RefObject, useMemo, useRef, useState } from "react";
import { popoverBaseCls } from "../../consts/className";
import PopoverTrigger from "./PopoverTrigger";
import PopoverContent from "./PopoverContent";

interface PopoverContextProps {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
    triggerRef: RefObject<HTMLElement>;  // React의 useRef로 생성된 객체 타입
    triggerElem?: ReactNode;
}

interface PopoverProps {
    children: ReactNode;
    className?: string;
    triggerElem?: ReactNode;    
}

interface PopoverCompoundProps {
    Content: typeof PopoverContent;
    Trigger: typeof PopoverTrigger;
}

const PopoverContext = createContext<PopoverContextProps>({
    isOpen: false,
    toggle: () => {},
    close: () => {},
    triggerRef: { current: null },  // 기본값: RefObject의 초기 상태
    triggerElem: null,
});

const Popover: FC<PopoverProps > & PopoverCompoundProps = ({ children, className, triggerElem })  => {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const toggle = () => setIsOpen((prev) => !prev);
    const close = () => setIsOpen(false);

    const contextValue = useMemo(
        () => ({
            isOpen,
            toggle,
            close,
            triggerRef,
            triggerElem,
        }),
        [isOpen]
    );

    const popoverCls = useMemo(() => {
        return className ? `${className} ${popoverBaseCls}` : popoverBaseCls;
    }, [className]);

    return (
        <PopoverContext.Provider value={contextValue}>
            <div className={popoverCls}>{children}</div>
        </PopoverContext.Provider>
    )
}

Popover.Content = PopoverContent;
Popover.Trigger = PopoverTrigger;

export default Popover;
export { PopoverContext };
