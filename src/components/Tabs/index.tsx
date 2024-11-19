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

// const Tabs: FC<PropsWithChildren> = ({ children }) => {
// const Tabs: FC<{ children: ReactNode }> = ({ children }) => 
const Tabs: FC<TabsProps> & TabsCompoundProps = ({ className, children, onChangeTab, defaultTabIndex = 0 }) =>{
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

    // props로 className 넘겨주면 해당 className이랑 붙여서(한칸 띄어서) 사용;
    // 안넘겨주면, 원래 기존에 있던 BaseCls 사용;
    // const tabsCls = classNameProp ? `${classNameProp} ${tabsBaseCls}` : tabsBaseCls;
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