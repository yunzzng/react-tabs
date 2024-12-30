import { Tabs, Carousel, Calendar, Pagination, Breadcrumb, Popover } from './components'
import { useEffect, useState } from 'react';
import Progress from './components/Progress';
// import './App.css'

const sleep = async (time: number): Promise<void> => 
  new Promise((resolve) => setTimeout(resolve, time));

function App() {
  // Tab
  const [, setActiveTab] = useState<number>(0); 
  const onChangeTab = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  // Claendar
  const [date, setDate] = useState<Date>(new Date());
  const handleChangeDate = (newDate: Date) => {
    setDate(newDate);
  };

  // Pagination
  const [page, setPage] = useState<number>(1);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // Progress
  const [stop, setStop] = useState<boolean>(false);
  const getUserData = async () => {
    await sleep(3000); 
    setStop(true);
  }
  useEffect(() => {
     getUserData();
  }, [])  


  return (
    <>
      <h2>Progress</h2>
      <Progress stop={stop} className=""></Progress>

      <h2>Tabs</h2>
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
        <Tabs.Pannel>Content1</Tabs.Pannel>
        <Tabs.Pannel>Content2</Tabs.Pannel>
        <Tabs.Pannel>Content3</Tabs.Pannel>
      </Tabs>

      <h2>Carousel</h2>
      <Carousel >
         <Carousel.ItemList>
            <Carousel.Item index={0}>1</Carousel.Item>
            <Carousel.Item index={1}>2</Carousel.Item>
            <Carousel.Item index={2}>3</Carousel.Item>
         </Carousel.ItemList>
         <Carousel.Navigator/>
         <Carousel.Indicator/>
      </Carousel>

      <h2>Breadcrumb</h2>
      <Breadcrumb width='200px'>
        <Breadcrumb.Item href='/a'>A</Breadcrumb.Item>
        <Breadcrumb.Item href='/a-a'>A-A</Breadcrumb.Item>
        <Breadcrumb.Item href='/a-a-a'>A-A-A</Breadcrumb.Item> 
        <Breadcrumb.Item href='/a-a-a-a'>A-A-A-A</Breadcrumb.Item> 
      </Breadcrumb>

      <h2>Pagination</h2>
      <Pagination itemLength={235} value={page} itemCountPerPage={10} onPageChange={handlePageChange}>
        <Pagination.PageButtons />
        <Pagination.Navigator />
      </Pagination>

      <h2>Popover</h2>
      <Popover>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content position="bottom-center">Place content for the popover here.</Popover.Content>
      </Popover>

      {/* Uncontrolled Calendar */}
      {/* <h2>Uncontrolled Calendar</h2>
      <Calendar defaultValue={new Date()}>
        <Calendar.Current />
        <Calendar.Navigator />
        <Calendar.Body />
      </Calendar> */}

      <h2>Controlled Calendar</h2>
      <Calendar onChange={handleChangeDate} value={date}>
        <Calendar.Current />
        <Calendar.Navigator/>
        <Calendar.Body />
      </Calendar>
    </>
  )
}

export default App;
