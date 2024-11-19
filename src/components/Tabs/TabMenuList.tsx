import { Children, cloneElement, FC, isValidElement, ReactElement, ReactNode, useMemo } from "react";
import { tabsMenuListBaseCls } from '../../consts/className'

// interface TabMenuListProps extends PropsWithChildren {}

// const TabMenuList: FC<TabMenuListProps> = (props) => {
//     const { children } = props;
//     return <div>{children}</div>;
// };


// const TabMenuList: FC<{ children: ReactNode }> = ({ children }) => {
//   return (
//     <>
//       {Children.map(children, (menu, index) => isValidElement(menu) ? cloneElement(menu, { index, key: index }) : menu )}
//     </>
//   );
// };

interface TabMenuProps {
  children: ReactNode;
  index?: number;
}

const TabMenuList: FC<{ children: ReactNode }> = ({ children }) => {
  const tabMenuComponents = useMemo(() => (
    <>
  {Children.map(children, (menu, index) => 
      isValidElement(menu) ? cloneElement(menu as ReactElement<TabMenuProps>, { index, key: index }) : menu
  )}
    </>
  ), [children]); 

  return (
    <div className={tabsMenuListBaseCls}>
      {tabMenuComponents}
    </div>
    )
};

export default TabMenuList;