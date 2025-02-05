import { FC, ReactNode, useContext, useMemo } from "react";
import { TabContext } from ".";
import { tabsPannelBaseCls } from "@consts/className";

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

interface TabPanelProps {
  children: ReactNode;
  className?: string;
}

//   const TabPanel: FC<TabPanelProps> = ({ children, index }) => {
//     const { tabIndex } = useContext(TabContext);

//     return tabIndex === index ? <div>{children}</div> : null;
// };

const TabPanel: FC<TabPanelProps> = ({ children, index, className }) => {
  const tabContext = useContext(TabContext) ?? { tabIndex: 0 };
  const { tabIndex } = tabContext;

  const tabPanelComponents = useMemo(
    () => (tabIndex === index ? <div>{children}</div> : null),
    [children, tabIndex, index]
  );

  const tabsPannelCls = useMemo(() => {
    return className ? `${className} ${tabsPannelBaseCls}` : tabsPannelBaseCls;
  }, [className]);

  return <div className={tabsPannelCls}>{tabPanelComponents}</div>;
};

export default TabPanel;
