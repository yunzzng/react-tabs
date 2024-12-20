import { createContext, useState, FC, ReactNode, useMemo, useEffect, Dispatch, SetStateAction } from "react";
import PaginationPageButtons from "./PaginationPageButtons";
import PaginationNavigator from "./PaginationNavigator";
import { paginationBaseCls } from "../../consts/className";

interface PaginationContextProps {
    currentPage: number;
    totalPages: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
}

interface PaginationCompoundProps {
    PageButtons: typeof PaginationPageButtons;
    Navigator: typeof PaginationNavigator;
}

const PaginationContext = createContext<PaginationContextProps>({
    currentPage: 1,
    totalPages: 1,
    setCurrentPage: () => {},
});

interface PaginationProps {
    children: ReactNode;
    itemLength: number;
    value?: number; 
    itemCountPerPage: number; 
    onPageChange?: (page: number) => void; 
    className?: string;
}

const Pagination: FC<PaginationProps> & PaginationCompoundProps = ({
    children,
    itemLength,
    value = 1,
    itemCountPerPage,
    onPageChange,
    className,
}) => {
    const [currentPage, setCurrentPage] = useState<number>(value);
    const totalPages = Math.ceil(itemLength / itemCountPerPage);

    const contextValue = useMemo(
        () => ({
            currentPage,
            totalPages,
            setCurrentPage,
        }),
        [currentPage, totalPages]
    );

    useEffect(() => {
        if (onPageChange) {
            onPageChange(currentPage);
        }
    }, [currentPage, onPageChange]);

    const paginationCls = useMemo(() => {
        return className ? `${className} ${paginationBaseCls}` : paginationBaseCls;
    }, [className]);

    return (
        <PaginationContext.Provider value={contextValue}>
            <div className={paginationCls}>
                {children}
            </div>
        </PaginationContext.Provider>
    );
};

Pagination.PageButtons = PaginationPageButtons;
Pagination.Navigator = PaginationNavigator;

export default Pagination;
export { PaginationContext };