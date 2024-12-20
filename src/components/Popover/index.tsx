import { FC, ReactNode, useMemo } from "react";
import { popoverBaseCls } from "../../consts/className";
import PopoverTrigger from "./PopoverTrigger";
import PopoverContent from "./PopoverContent";


interface PopoverProps {
    children: ReactNode;
    className?: string;
}

interface PopoverCompoundProps {
    Content: typeof PopoverContent;
    Trigger: typeof PopoverTrigger;
}


const Popover: FC<PopoverProps > & PopoverCompoundProps = ({ children, className })  => {

    const popoverCls = useMemo(() => {
        return className ? `${className} ${popoverBaseCls}` : popoverBaseCls;
    }, [className]);

    return (
        // <PopoverContext.Provider value={contextValue}>
            <div className={popoverCls}>{children}</div>
        // </PopoverContext.Provider>
    )
}

Popover.Content = PopoverContent;
Popover.Trigger = PopoverTrigger;

export default Popover;
// export { PopoverContext };
