import { FC, useContext, useMemo } from "react";
import { PaginationContext } from ".";
import { paginationPageButtonsBaseCls } from "@consts/className";
import usePagination from "./hooks/usePagination";

interface PaginationButtonsProps {
    className?: string; 
    groupSize?: number; 
}

const PaginationButtons: FC<PaginationButtonsProps> = ({ className, groupSize = 5 }) => {
    const { currentPage, totalPages, setCurrentPage } = useContext(PaginationContext);

    const { pagesInCurrentGroup } = usePagination({
        totalPages,
        groupSize,
        currentPage,
    });

    const paginationPageButtonCls = useMemo(() => {
        return className ? `${className} ${paginationPageButtonsBaseCls}` : paginationPageButtonsBaseCls;
    }, [className]);

    return (
        <div className={paginationPageButtonCls}>
            {pagesInCurrentGroup.map((page) => (
                <button
                    key={page}
                    disabled={page === currentPage}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default PaginationButtons;