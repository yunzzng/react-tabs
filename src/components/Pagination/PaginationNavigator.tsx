import { FC, useContext, useMemo } from "react";
import { PaginationContext } from ".";
import { paginationNavigatorBaseCls } from "../../consts/className";

interface PaginationNavigatorProps {
    className?: string; 
}

const PaginationNavigator: FC<PaginationNavigatorProps> = ({ className }) => {
    const { currentPage, totalPages, setCurrentPage } = useContext(PaginationContext);

    const handleNavigation = (direction: "prev" | "next") => {
        if (direction === "prev" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
            return;
        }

        if (direction === "next" && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            return;
        }
    };

    const paginationNavigatorCls = useMemo(() => {
        return className ? `${className} ${paginationNavigatorBaseCls}` : paginationNavigatorBaseCls;
    }, [className]);

    return (
        <div className={paginationNavigatorCls}> 
            <button disabled={currentPage === 1} onClick={() => handleNavigation("prev")}>
                이전
            </button>
            <button disabled={currentPage === totalPages} onClick={() => handleNavigation("next")}>
                다음
            </button>
        </div>
    );
};

export default PaginationNavigator;