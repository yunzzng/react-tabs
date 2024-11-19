import { FC, ReactNode, useContext } from "react";
import { TabContext } from "."; 

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
    const { setTabIndex } = useContext(TabContext);
  
    return (
        <div onClick={() => setTabIndex(index ?? 0)}>
        {children}
      </div>
    );
};

export default TabMenu;