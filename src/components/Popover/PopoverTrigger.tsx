import { FC, ReactNode, useContext, useMemo } from "react";
import { PopoverContext } from ".";
import { popoverTriggertBaseCls } from "../../consts/className";

interface PopoverTriggerProps {
    children: ReactNode; 
    className?: string; 
}

const PopoverTrigger: FC<PopoverTriggerProps> = ({ children, className }) => {
    const { toggle, triggerRef } = useContext(PopoverContext); 

    const popoverTriggerCls = useMemo(() => {
        return className ? `${className} ${popoverTriggertBaseCls}` : popoverTriggertBaseCls;
    }, [className]);

    return (
        <button ref={triggerRef} onClick={toggle} className={popoverTriggerCls} >
            {children} 
        </button>
    );
};

export default PopoverTrigger; 