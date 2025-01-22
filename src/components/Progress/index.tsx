import { FC, useEffect, useMemo, useRef } from "react";
import { progressBaseCls } from "@consts/className";

interface ProgressProps {
    stop: boolean;
    className: string;
  }
  
const Progress: FC<ProgressProps> = ({ stop, className }) => {
    const progressRef = useRef<HTMLDivElement>(null);
    const animationFrameId = useRef<number>();
    const currentWidth = useRef<number>(0); 
    const progressBarMaxWidth = useRef<number>(window.innerWidth); // 브라우저 뷰포트 너비 설정

    // transition이 끝나면 (프로그레스바가 화면 너비까지 채워지면) display = "none"; 
    const handleTransitionEnd = () => {
        if (progressRef.current) {
            progressRef.current.style.display = "none"; 
        }
    };

    const updateProgress = () => {
        if (progressRef.current) {
            const progressBar = progressRef.current;

            if (!stop && currentWidth.current < progressBarMaxWidth.current) {
                currentWidth.current += 1;  // 1씩 증가
                progressBar.style.width = `${currentWidth.current}px`;
                animationFrameId.current = requestAnimationFrame(updateProgress);
            }

            if (stop) {
                // stop === true 되면 화면 너비까지 채우기
                progressBar.style.width = `${progressBarMaxWidth.current}px`;
                progressBar.style.transition = "width 0.5s ease-out";
                progressRef.current.addEventListener("transitionend", handleTransitionEnd);
            }
        }
    };


    useEffect(() => {
        if (!stop) {
            animationFrameId.current = requestAnimationFrame(updateProgress);
        } else {
            updateProgress();
        }

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }

            if (progressRef.current) {
                progressRef.current.removeEventListener("transitionend", handleTransitionEnd);
            }
        };
    }, [stop]);

    const progressCls = useMemo(() => {
        return className ? `${className} ${progressBaseCls}` : progressBaseCls;
    }, [className]);

    return (
        <div ref={progressRef} className={progressCls} style={{ height: "10px", backgroundColor: "pink", width: "0%", position: "fixed", top: "0", left: "0", zIndex: 1000 }}></div>
    )
}

export default Progress;


