import { Children, cloneElement, FC, isValidElement, ReactElement, ReactNode, useMemo } from "react";

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

  return tabMenuComponents;
};

export default TabMenuList;