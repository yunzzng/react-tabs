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
export const carouselItemListCls = getBaseCls("carousel-item-list");
export const carouselItemCls = getBaseCls("carousel-item");
export const carouselNavigatorCls = getBaseCls("carousel-navigator");
export const carouselIndicatorCls = getBaseCls("carousel-indicator");