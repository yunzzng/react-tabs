import { createContext, FC, useState, Dispatch, SetStateAction, ReactNode, cloneElement, Children, isValidElement, ReactElement, useEffect, useMemo } from "react";
import TabMenuList from "./TabMenuList";
import TabPanel from "./TabPannel";
import TabMenu from "./TabMenu";

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
}

// const Tabs: FC<PropsWithChildren> = ({ children }) => {
// const Tabs: FC<{ children: ReactNode }> = ({ children }) => 
const Tabs: FC<TabsProps> & TabsCompoundProps = ({ children, onChangeTab, defaultTabIndex = 0 }) =>{
    // const [tabIndex, setTabIndex] = useState<number>(0);
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

    // const tabMenuList = Children.toArray(children).find(child =>
    //     isValidElement(child) && child.type === TabMenuList
    // );

    // const tabPanels = Children.toArray(children).filter(child =>
    //     isValidElement(child) && child.type === TabPanel
    // ) as ReactElement[];

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

    return (
        <TabContext.Provider value={contextValue}>
            {tabMenuComponents}
            {tabPanelComponents.map((tabPanel, index) =>
                cloneElement(tabPanel, { ...tabPanel.props, index })
            )}
        </TabContext.Provider>
    );
};

Tabs.MenuList = TabMenuList;
Tabs.Menu = TabMenu;
Tabs.Pannel = TabPanel;

export default Tabs;
export { TabContext };