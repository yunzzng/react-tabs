# React UI kit (yunseul-ui-elements)

## 프로젝트 소개

> React를 기반으로 한 UI 컴포넌트 라이브러리

## 사용 방법

```
npm install yunseul-ui-elements
```

## Components

### 1. Tabs

#### 여러 콘텐츠를 탭으로 분리해서 각 탭을 클릭하여 콘텐츠를 볼 수 있는 컴포넌트

- Children

  - `<Tabs>`: 탭의 상태와 동작을 관리하는 컨텍스트
  - `<Tabs.MenuList>`: 탭 메뉴의 리스트
  - `<Tabs.Menu>`:` 각각의 탭을 나타냄
  - `<Tabs.Pannel>`: 각 탭에 해당하는 콘텐츠 영역

- 사용 예시
  ```tsx
  <Tabs onChangeTab={onChangeTab} defaultTabIndex={0}>
    <Tabs.MenuList>
      <Tabs.Menu>Menu1</Tabs.Menu>
      <Tabs.Menu>Menu2</Tabs.Menu>
      <Tabs.Menu>Menu3</Tabs.Menu>
    </Tabs.MenuList>
    <Tabs.Pannel>Content1</Tabs.Pannel>
    <Tabs.Pannel>Content2</Tabs.Pannel>
    <Tabs.Pannel>Content3</Tabs.Pannel>
  </Tabs>
  ```

---

### 2. Carousel

#### 이미지 또는 콘텐츠를 슬라이드로 전환하며 표시하는 컴포넌트

- Children

  - `<Carousel>`: 슬라이드 상태와 전환 동작을 관리하는 컨텍스트
  - `<Carousel.ItemList>`: 슬라이드 아이템
  - `<Carousel.Item>`: 각각의 슬라이드 콘텐츠
  - `<Carousel.Navigator>`: 이전/다음 버튼
  - `<Carousel.Indicator>`: 현재 슬라이드 위치를 나타내는 인디케이터

- 사용 예시

  ```tsx
  <Carousel>
    <Carousel.ItemList>
      <Carousel.Item index={0}>1</Carousel.Item>
      <Carousel.Item index={1}>2</Carousel.Item>
      <Carousel.Item index={2}>3</Carousel.Item>
    </Carousel.ItemList>
    <Carousel.Navigator />
    <Carousel.Indicator />
  </Carousel>
  ```

  > 캐러셀 커스텀(내비게이터, 인디게이터)
  ```tsx
  <Carousel>
    <Carousel.ItemList>
    <Carousel.Item index={0}>1</Carousel.Item>
      <Carousel.Item index={1}>2</Carousel.Item>
      <Carousel.Item index={2}>3</Carousel.Item>
    </Carousel.ItemList>

    <Carousel.Navigator>
      {(prev, next) => (
        <div>
          <div onClick={prev}>prev</div>
          <h2 onClick={next}>next</h2>
        </div>
      )}
    </Carousel.Navigator>
    <Carousel.Indicator>
      {(indexs, to) =>
        indexs.map((index) => (
          <span onClick={() => to(index)}>{index + 1}</span>
        ))
      }
    </Carousel.Indicator>
    </Carousel>
  ```

---

### 3. Calendar

#### 날짜를 선택하거나 날짜 정보를 표시하는 컴포넌트

- Children

  - `<Calendar>`: 캘린더 상태 및 동작을 관리하는 컨텍스트
  - `<Calendar.Current>`: 현재 선택된 월/년을 표시
  - `<Calendar.Navigator>`: 이전/다음 월로 이동
  - `<Calendar.Body>`: 날짜 정보

- 사용 예시
  ```tsx
  <Calendar onChange={handleChangeDate} value={date}>
    <Calendar.Current />
    <Calendar.Navigator />
    <Calendar.Body />
  </Calendar>
  ```

---

### 4. Breadcrumb

#### 현재 위치를 나타내는 네비게이션 컴포넌트

- Children

  - `<Breadcrumb>`: 경로 상태를 관리하는 컨텍스트
  - `<Breadcrumb.Item>`: 각각의 경로

- 사용 예시
  ```tsx
  <Breadcrumb width="200px">
    <Breadcrumb.Item href="/a">A</Breadcrumb.Item>
    <Breadcrumb.Item href="/a-a">A-A</Breadcrumb.Item>
    <Breadcrumb.Item href="/a-a-a">A-A-A</Breadcrumb.Item>
    <Breadcrumb.Item href="/a-a-a-a">A-A-A-A</Breadcrumb.Item>
  </Breadcrumb>
  ```

---

### 5. Pagination

#### 데이터를 여러 페이지로 나누어서 표시하여 페이지 간 이동이 가능한 컴포넌트

- Children
  - `<Pagination>`: 페이지 상태와 동작을 관리하는 컨텍스트
  - `<Pagination.PageButtons>`: 페이지 번호 버튼
  - `<Pagination.Navigator>`: 이전/다음 페이지 버튼
- 사용 예시
  ```tsx
  <Pagination
    itemLength={235}
    value={page}
    itemCountPerPage={10}
    onPageChange={handlePageChange}
  >
    <Pagination.PageButtons />
    <Pagination.Navigator />
  </Pagination>
  ```

---

### 6. Popover

#### 클릭 시 추가 정보를 보여주는 팝업 창 컴포넌트

- Children
  - `<Popover>`: 팝업 상태와 동작을 관리하는 컨텍스트
  - `<Popover.Trigger>`: 팝업을 열기 위한 트리거
  - `<Popover.Content>`: 팝업에 표시할 콘텐츠
- 사용 예시
  ```tsx
  <Popover>
    <Popover.Trigger>Open</Popover.Trigger>
    <Popover.Content position="bottom-center">
      Place content for the popover here.
    </Popover.Content>
  </Popover>
  ```

---

### 7. Progress

#### 진행 상태를 시각적으로 나타내는 컴포넌트

- Children
  - `<Progress>`: 진행 상태 관리
- 사용 예시
  ```tsx
  <Progress stop={stop} className=""></Progress>
  ```

---

### 8. Modal

#### 팝업 형태로 컨텐츠를 표시하는 컴포넌트

- Children

  - `<Modal>`: 모달 상태와 동작을 관리하는 컨텍스트
  - `<Modal.Backdrop>`: 모달의 배경
  - `<Modal.Close>`: 모달 닫기 버튼
  - `<Modal.Content>`: 모달 내용
  - `<Modal.Trigger>`: 모달 여는 트리거

- 사용 예시
  ```tsx
  <Modal>
    <Modal.Backdrop />
    <Modal.Trigger>{/** 모달 오픈버튼 **/}</Modal.Trigger>
    <Modal.Content>
      {/** 모달 내용 **/}
      <Modal.Close>{/** 모달 클로즈버튼 **/}</Modal.Close>
    </Modal.Content>
  </Modal>
  ```

---

### 9. DatePicker

#### 날짜를 선택하여 캘린더 형태로 보여주는 컴포넌트

- Children

  - `<DatePicker>`: 날짜 선택

- 사용 예시
  ```tsx
  <DatePicker date={new Date()} onChangeDate={handleChangeDatePicker} />
  ```

---

### 10. Select

#### 옵션 리스트에서 값을 선택할 수 있는 드롭다운 컴포넌트

- Children

  - `<Select>`: 셀렉트 상태와 동작을 관리하는 컨텍스트
  - `<Select.Content>`: 드롭다운 리스트를 표시하는 컨테이너
  - `<Select.Item>`: 드롭다운의 각 아이템 옵션
  - `<Select.Trigger>`: 드롭다운 열기 버튼

- 사용 예시
  ```tsx
  <Select onChange={handleChangeValue} value={selectedValue}>
    <Select.Trigger />
    <Select.Content>
      <Select.Item value={"1"}>One</Select.Item>
      <Select.Item value={"2"}>Two</Select.Item>
      <Select.Item value={"3"}>Three</Select.Item>
    </Select.Content>
  </Select>
  ```

---

### 11. Accordion

#### 컴포넌트

- Children

  - `<Accordion>`: 아코디언 상태와 동작을 관리하는 컨텍스트
  - `<Accordion.Header>`:
  - `<Accordion.Trigger>`:
  - `<Accordion.Item>`:
  - `<Accordion.Content>`: 아코디언 내용

- 사용 예시

  ```tsx

  ```
