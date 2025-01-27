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

// Progress
export const progressBaseCls= getBaseCls("progress");

// Modal
export const modalBaseCls= getBaseCls("modal");
export const modalBackdropBaseCls= getBaseCls("modal-backdrop");
export const modalTriggerBaseCls= getBaseCls("modal-trigger");
export const modalContentBaseCls= getBaseCls("modal-content");
export const modalButtonBaseCls = getBaseCls("modal-button");

// DatePicker
export const DatePickerBaseCls = getBaseCls("datepicker");

// Select
export const SelectBaseCls = getBaseCls("select");
export const SelectTriggerBaseCls = getBaseCls("select-trigger");
export const SelectContentBaseCls = getBaseCls("select-content");
export const SelectItemBaseCls = getBaseCls("select-item");

// Accordion Component
export const accordionBaseCls= getBaseCls("accordion");
export const accordionItemBaseCls = getBaseCls("accordion-item");
export const accordionContentBaseCls = getBaseCls("accordion-content");
export const accordionHeaderBaseCls = getBaseCls("accordion-header");
export const accordionTriggerBaseCls = getBaseCls("accordion-trigger");

// Toast
export const toastBaseCls= getBaseCls("toast");
export const toastCloseBaseCls = getBaseCls("toast-close");
export const toastDescriptionBaseCls = getBaseCls("toast-description");
export const toastTitleBaseCls = getBaseCls("toast-title");