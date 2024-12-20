import { useMemo } from "react";

interface UsePaginationProps {
    totalPages: number;
    groupSize: number;
    currentPage: number; 
}

const usePagination = ({ totalPages, groupSize, currentPage }: UsePaginationProps) => {
    const currentGroup = useMemo(() => Math.ceil(currentPage / groupSize), [currentPage, groupSize]);

    const firstNum = useMemo(() => (currentGroup - 1) * groupSize + 1, [currentGroup, groupSize]);
    const lastNum = useMemo(() => Math.min(currentGroup * groupSize, totalPages), [currentGroup, groupSize, totalPages]);

    const pagesInCurrentGroup = useMemo(() => {
        return Array.from({ length: lastNum - firstNum + 1 }, (_, i) => firstNum + i);
    }, [firstNum, lastNum]);

    return {
        pagesInCurrentGroup,
    };
};

export default usePagination;

