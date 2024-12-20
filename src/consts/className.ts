const prefixCls = "ys";
export const getBaseCls = (suffix: string) => {
    return `${prefixCls}-${suffix}`;
};

// Tabs Component
export const tabsBaseCls = getBaseCls("tabs");
export const tabsMenuListBaseCls = getBaseCls("tabs-menu-list");
export const tabsMenuBaseCls = getBaseCls("tabs-manu");
export const tabsPannelBaseCls = getBaseCls("tabs-pannel");

// Carousel Component
export const carouselBaseCls= getBaseCls("carousel");
export const carouselItemListBaseCls = getBaseCls("carousel-item-list");
export const carouselItemBaseCls = getBaseCls("carousel-item");
export const carouselNavigatorBaseCls = getBaseCls("carousel-navigator");
export const carouselIndicatorBaseCls = getBaseCls("carousel-indicator");

// Calendar Component
export const calendarBaseCls= getBaseCls("calendar");
export const calendarCurrentBaseCls = getBaseCls("calendar-current");
export const calendarBodyBaseCls = getBaseCls("calendar-body");
export const calendarNavigatorBaseCls = getBaseCls("calendar-navigator");

// Breadcrumb Commponent
export const breadcrumbBaseCls= getBaseCls("breadburmb");
export const breadcrumbItemBaseCls = getBaseCls("breadburmb-item");
export const breadcrumbSeparatorBaseCls = getBaseCls("breadburmb-separator");

// Pagination Commponent
export const paginationBaseCls= getBaseCls("pagination");
export const paginationPageButtonsBaseCls = getBaseCls("pagination-page-buttons");
export const paginationNavigatorBaseCls = getBaseCls("bpagination-navigator");

// Popover Commponent
export const popoverBaseCls= getBaseCls("popover");
export const popoverContentBaseCls = getBaseCls("popover-content");
export const popoverTriggertBaseCls = getBaseCls("popover-trigger");