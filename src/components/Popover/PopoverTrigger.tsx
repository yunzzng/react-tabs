import { FC, ReactNode, Ref, useContext, useMemo } from "react";
import { PopoverContext } from ".";
import { popoverTriggertBaseCls } from "../../consts/className";

interface PopoverTriggerProps {
    children: ReactNode; 
    className?: string; 
}

const PopoverTrigger: FC<PopoverTriggerProps> = ({ children, className }) => {
    const { toggle, triggerRef, triggerElem } = useContext(PopoverContext); 

    const popoverTriggerCls = useMemo(() => {
        return className ? `${className} ${popoverTriggertBaseCls}` : popoverTriggertBaseCls;
    }, [className]);

    if (triggerElem) {
        // 작성 중
    }

    return (
        <button ref={triggerRef as Ref<HTMLButtonElement>} onClick={toggle} className={popoverTriggerCls} >
            {children} 
        </button>
    );
};

export default PopoverTrigger; 