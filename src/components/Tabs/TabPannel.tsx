import { FC, ReactNode, useContext, useMemo } from "react";
import { TabContext } from "."; 
import { tabsPannelBaseCls } from '../../consts/className'

// interface TabPanelProps extends PropsWithChildren {
//     index: number;
// }

// const TabPanel: FC<TabPanelProps> = ({ children, index }) => {
//     const { tabIndex } = useContext(TabContext);

//     return tabIndex === index ? <div>{children}</div> : null;
// };


interface TabPanelProps {
    children: ReactNode;
    index?: number; 
}
  
//   const TabPanel: FC<TabPanelProps> = ({ children, index }) => {
//     const { tabIndex } = useContext(TabContext);
  
//     return tabIndex === index ? <div>{children}</div> : null;
// };

const TabPanel: FC<TabPanelProps> = ({ children, index }) => {
    const { tabIndex } = useContext(TabContext);
  
    const tabPanelComponents = useMemo(() => (
      tabIndex === index ? <div>{children}</div> : null
    ), [children, tabIndex, index]); 
  
    return (
      <div className={tabsPannelBaseCls}>
        {tabPanelComponents}
      </div>
    )
};

export default TabPanel;
