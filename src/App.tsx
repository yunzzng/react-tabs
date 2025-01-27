import {
  Tabs,
  Carousel,
  Calendar,
  Pagination,
  Breadcrumb,
  Popover,
  Modal,
  DatePicker,
  Select,
  Accordion,
} from "./components";
import { useEffect, useState } from "react";
import Progress from "./components/Progress";
import { Toaster, useToast } from "@ui/Toast";
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
  };
  useEffect(() => {
    getUserData();
  }, []);

  // Modal
  const [isOpen, setIsOpen] = useState<boolean>();

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // Datepicker
  const handleChangeDatePicker = (date: Date) => {
    console.log(date);
  };

  // Select
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChangeValue = (selectedValue: string) => {
    console.log("선택한 아이템:", selectedValue);
    setSelectedValue(selectedValue);
  };

  // Toast
  const { toast } = useToast();
  const handleClickOpenToast = () => {
    toast(
      {
        title: "타이틀",
        width: "500px",
        height: "300px",
        position: "top-center",
        description: "디스크립션",
        backgroundColor: "pink",
        color: "#ffffff",
      },
      5000
    );
  };

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
      <Carousel>
        <Carousel.ItemList>
          <Carousel.Item index={0}>1</Carousel.Item>
          <Carousel.Item index={1}>2</Carousel.Item>
          <Carousel.Item index={2}>3</Carousel.Item>
          <Carousel.Item index={3}>4</Carousel.Item>
          <Carousel.Item index={4}>5</Carousel.Item>
          <Carousel.Item index={5}>6</Carousel.Item>
          <Carousel.Item index={6}>7</Carousel.Item>
        </Carousel.ItemList>
        {/* <Carousel.Navigator /> */}
        <Carousel.Navigator>
          {(prev, next) => (
            <div>
              <div onClick={prev}>prev</div>
              <h2 onClick={next}>next</h2>
            </div>
          )}
        </Carousel.Navigator>
        {/* <Carousel.Indicator /> */}
        <Carousel.Indicator>
          {/* to가 몇번째 캐러셀 아이템인지 */}
          {(indexs, to) =>
            indexs.map((index) => (
              <span key={index} onClick={() => to(index)}>
                {index + 1}
              </span>
            ))
          }
        </Carousel.Indicator>
      </Carousel>

      <h2>Breadcrumb</h2>
      <Breadcrumb width="200px">
        <Breadcrumb.Item href="/a">A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a">A-A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a">A-A-A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a-a">A-A-A-A</Breadcrumb.Item>
      </Breadcrumb>

      <h2>Pagination</h2>
      <Pagination
        itemLength={235}
        value={page}
        itemCountPerPage={10}
        onPageChange={handlePageChange}
      >
        <Pagination.PageButtons />
        <Pagination.Navigator />
      </Pagination>

      <h2>Popover</h2>
      <Popover>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content position="bottom-center">
          Place content for the popover here.
        </Popover.Content>
      </Popover>

      <h2>Accordion</h2>
      <Accordion>
        <Accordion.Item id={0}>
          <Accordion.Header>
            <Accordion.Trigger>Header 1</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item id={1}>
          <Accordion.Header>
            <Accordion.Trigger>Header 2</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>Content 2</Accordion.Content>
        </Accordion.Item>
      </Accordion>

      <h2>Modal</h2>
      {/* <Modal
        onOpenModal={handleOpenModal}
        onCloseModal={handleCloseModal}
        open={isOpen}
      >
        <Modal.Backdrop />
        <Modal.Trigger />
        <Modal.Content>
          <div>Modal Content</div>
          <Modal.Close />
        </Modal.Content>
      </Modal> */}
      <Modal
        onOpenModal={handleOpenModal}
        onCloseModal={handleCloseModal}
        open={isOpen}
      >
        <Modal.Backdrop />
        <Modal.Trigger>
          {/** Trigger UI를 사용자 단에서 자유롭게 설정 가능하게 **/}
          <a href="#">Custom Trigger-1</a>
          <h1>Custom Trigger-2</h1>
          <div>Custom Trigger-3</div>
        </Modal.Trigger>
        <Modal.Content>
          {/** Close UI를 사용자 단에서 자유롭게 설정 가능하게 **/}
          <h2>Modal Content</h2>
          <Modal.Close>
            {/** slot형태 **/}
            <a href="#" className="closeBtn_a">
              Custom Modal Close
            </a>
            <p
              className="closeBtn_p"
              style={{ position: "absolute", top: "2px", right: "20px" }}
            >
              x
            </p>
          </Modal.Close>
        </Modal.Content>
      </Modal>

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
        <Calendar.Navigator />
        <Calendar.Body />
      </Calendar>

      <h2>DatePicker</h2>
      <DatePicker
        date={new Date("2024-7-5")}
        onChangeDate={handleChangeDatePicker}
      />

      <h2>Select</h2>
      <Select onChange={handleChangeValue} value={selectedValue}>
        <Select.Trigger />
        <Select.Content>
          <Select.Item value={"1"}>One</Select.Item>
          <Select.Item value={"2"}>Two</Select.Item>
          <Select.Item value={"3"}>Three</Select.Item>
          <Select.Item value={"4"}>😁</Select.Item>
          <Select.Item value={"5"}>🐷</Select.Item>
        </Select.Content>
      </Select>

      <h2>Toast</h2>
      <Toaster />
      <button onClick={handleClickOpenToast}>open toast</button>
    </>
  );
}

export default App;
