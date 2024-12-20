import { Children, createContext, FC, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import BreadcrumbItem from "./BreadcrumbItem";
import { breadcrumbBaseCls, breadcrumbSeparatorBaseCls } from "../../consts/className";
import BreadcrumbSeparator from "./Internal/BreadcrumbSeparator";

interface BreadcrumbContextProps {
    addItemWidth: (width: number) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextProps>({
    addItemWidth: () => {}, 
});

interface BreadcrumbProps {
    children: ReactNode;
    width?: string;
    className?: string; 
}

interface BreadcrumbCompoundProps {
    Item: typeof BreadcrumbItem;
}

const Breadcrumb: FC<BreadcrumbProps> & BreadcrumbCompoundProps = ({ children, width = "100%" , className}: BreadcrumbProps) => {
    const breadcrumbRef = useRef<HTMLDivElement>(null);
    const separatorRef = useRef<HTMLSpanElement>(null);
    const [totalItemWidth, setTotalItemWidth] = useState<number>(0);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [separatorWidth, setSeparatorWidth] = useState<number>(0);
    const [visibleItems, setVisibleItems] = useState<ReactNode[]>([]);
    const items = Children.toArray(children);

    // 아이템 너비
    const addItemWidth = (width: number) => {
        setTotalItemWidth((prev) => prev + width);
    };

    // separator 너비 구하기
    useEffect(() => {
        if (separatorRef.current) {
            const width = separatorRef.current.getBoundingClientRect().width;
            setSeparatorWidth(width);
        }
    }, [separatorRef.current]);

    useEffect(() => {
        // container 너비
        if (breadcrumbRef.current) {
            const width = breadcrumbRef.current.getBoundingClientRect().width;
            setContainerWidth(width);
        }
    }, [width]);

    // 화면에 맞게 아이템들 계산
    const calculateVisibleItems = () => {
        // 전체 너비 계산
        const totalWidth = totalItemWidth + separatorWidth * (items.length - 1);

        if (totalWidth <= containerWidth) {
            setVisibleItems(items);
        } else {
            setVisibleItems([
                items[0],
                <span key="ellipsis" className="breadcrumb-ellipsis">...</span>,
                items[items.length - 1],
            ]);
        }
    };

    useEffect(() => {
        calculateVisibleItems();
    }, [totalItemWidth, containerWidth, separatorWidth]);

    const contextValue = useMemo(() => ({ addItemWidth }), []);

    const breadcrumbCls = useMemo(() => {
        return className ? `${className} ${breadcrumbBaseCls}` : breadcrumbBaseCls;
    }, [className]);

    const breadcrumbSeparatorCls = useMemo(() => {
        return className ? `${className} ${breadcrumbSeparatorBaseCls}` : breadcrumbSeparatorBaseCls;
    }, [className]);

    return (
        <BreadcrumbContext.Provider value={contextValue}>
            <div style={{ width }} ref={breadcrumbRef} className={breadcrumbCls}>
                <div>
                    {visibleItems.map((item, index) => (
                        <span key={index} >
                            {item}
                            {index < visibleItems.length - 1 && (
                                <BreadcrumbSeparator className={breadcrumbSeparatorCls}  ref={separatorRef} />
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </BreadcrumbContext.Provider>
    );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
export { BreadcrumbContext };