// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Tabs from './components/Tabs'
// import TabMenuList from './components/Tabs/TabMenuList'
// import TabMenu from './components/Tabs/TabMenu'
import TabPannel from './components/Tabs/TabPannel'
import Carousel from './components/Carousel'
// import CarouselItemList from './components/Carousel/CarouselItemList'
// import CarouselItem from './components/Carousel/CarouselItem'
// import CarouselNavigator from './components/Carousel/CarouselNavigator'
// import CarouselIndicator from './components/Carousel/CarouselIndicator'
// import Counter from './components/Counter'


function App() {
  const onChangeTab = (tabIndex: number) => {
    console.log(`Selected Tab Index: ${tabIndex}`);
  };

  return (
    <>
      <Tabs onChangeTab={onChangeTab} defaultTabIndex={0}>
        <Tabs.MenuList>
          {/* <TabMenu index={1}>Menu1</TabMenu>
          <TabMenu index={2}>Menu2</TabMenu>
          <TabMenu index={3}>Menu3</TabMenu> */}
          <Tabs.Menu>Menu1</Tabs.Menu>
          <Tabs.Menu>Menu2</Tabs.Menu>
          <Tabs.Menu>Menu3</Tabs.Menu>
        </Tabs.MenuList>
        {/* <TabPannel index={1}>Content1</TabPannel>
        <TabPannel index={2}>Content2</TabPannel>
        <TabPannel index={3}>Content3</TabPannel> */}
        <TabPannel>Content1</TabPannel>
        <TabPannel>Content2</TabPannel>
        <TabPannel>Content3</TabPannel>
      </Tabs>

      <br/><hr/><br/>

      <Carousel>
         <Carousel.ItemList>
            <Carousel.Item index={0}>1</Carousel.Item>
            <Carousel.Item index={1}>2</Carousel.Item>
            <Carousel.Item index={2}>3</Carousel.Item>
         </Carousel.ItemList>
         <Carousel.Navigator/>
         <Carousel.Indicator/>
      </Carousel>

      <br/><hr/><br/>

      {/* <Counter/> */}
    </>
  )
}

export default App;
