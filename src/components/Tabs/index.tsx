import { createContext, FC, useState, Dispatch, SetStateAction, ReactNode, cloneElement, Children, isValidElement, ReactElement, useEffect, useMemo } from "react";
import TabMenuList from "./TabMenuList";
import TabPanel from "./TabPannel";
import TabMenu from "./TabMenu";
import { tabsBaseCls } from '../../consts/className'

interface TabsContextProps {
    tabIndex: number;
    setTabIndex: Dispatch<SetStateAction<number>>;
}

interface TabsCompoundProps {
    MenuList: typeof TabMenuList;
    Menu: typeof TabMenu;
    Pannel: typeof TabPanel;
}

const TabContext = createContext<TabsContextProps>({
    tabIndex: 0,
    setTabIndex: () => {},
});

interface TabsProps {
    children: ReactNode;
    onChangeTab?: (tabIndex: number) => void;
    defaultTabIndex?: number;
    className?: string; 
}


const Tabs: FC<TabsProps> & TabsCompoundProps = ({ className, children, onChangeTab, defaultTabIndex = 0 }) =>{
    const [tabIndex, setTabIndex] = useState<number>(defaultTabIndex);

    const contextValue = {
        tabIndex,
        setTabIndex,
    };

    useEffect(() => {
        if (onChangeTab) {
            onChangeTab(tabIndex);
        }
    }, [tabIndex, onChangeTab]);

    const tabMenuComponents = useMemo(() => {
        return Children.toArray(children).find(child =>
            isValidElement(child) && child.type === TabMenuList
        );
    }, [children]);

    const tabPanelComponents = useMemo(() => {
        return Children.toArray(children).filter(child =>
            isValidElement(child) && child.type === TabPanel
        ) as ReactElement[];
    }, [children]);

    const tabsCls = useMemo(() => {
        return className ? `${className} ${tabsBaseCls}` : tabsBaseCls;
    }, [className]);


    return (
        <TabContext.Provider value={contextValue}>
            <div className={tabsCls}>
                {tabMenuComponents}
                {tabPanelComponents.map((tabPanel, index) =>
                    cloneElement(tabPanel, { ...tabPanel.props, index })
                )}
            </div>
        </TabContext.Provider>
    );
};

Tabs.MenuList = TabMenuList;
Tabs.Menu = TabMenu;
Tabs.Pannel = TabPanel;

export default Tabs;
export { TabContext };