import { FC, ReactNode, useContext, useMemo } from "react";
import { TabContext } from ".";
import { tabsMenuBaseCls } from "@consts/className";

// interface TabMenuProps extends PropsWithChildren {
//     index: number;
// }

// const TabMenu: FC<TabMenuProps> = ({ children, index }) => {
//     const { tabIndex, setTabIndex } = useContext(TabContext);

//     const handleClickTabMenu = () => {
//         if (tabIndex !== index) {
//             setTabIndex(index);
//         }
//     };

//     return (
//         <div onClick={handleClickTabMenu}>{children}</div>
//     );
// };

interface TabMenuProps {
  children: ReactNode;
  index?: number;
  className?: string;
}
const TabMenu: FC<TabMenuProps> = ({ children, index, className }) => {
  const tabContext = useContext(TabContext) ?? {
    tabIndex: 0,
    setTabIndex: () => {},
  };
  const { tabIndex, setTabIndex } = tabContext;
  const isActive = useMemo(() => tabIndex === index, [tabIndex, index]);

  const tabsMenuCls = useMemo(() => {
    return className ? `${className} ${tabsMenuBaseCls}` : tabsMenuBaseCls;
  }, [className]);

  return (
    <div
      className={tabsMenuCls}
      data-active={isActive}
      onClick={() => setTabIndex(index ?? 0)}
    >
      {/* <div class="ys-tabs-mane" data-active="false">Menu1</div> */}
      {children}
    </div>
  );
};

export default TabMenu;
