import { FC, ReactNode, useContext, useMemo } from "react";
import { TabContext } from "."; 
import { tabsMenuBaseCls } from '../../consts/className'

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
}
const TabMenu: FC<TabMenuProps> = ({ children, index }) => {
  const { tabIndex, setTabIndex } = useContext(TabContext);
  const isActive = useMemo(() => tabIndex === index, [tabIndex, index])
  
  return (
    <div className={tabsMenuBaseCls} data-active={isActive} onClick={() => setTabIndex(index ?? 0)}>
      {/* <div class="ys-tabs-mane" data-active="false">Menu1</div> */}
      {children}
    </div>
  );
};

export default TabMenu;