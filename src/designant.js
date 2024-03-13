import "./designant.css";
import Menu from "./menu";
import React, { useState, useEffect, useRef } from "react";
import {
  DatePicker,
  Rate,
  Input,
  Button,
  Dropdown,
  Flex,
  Radio,
  Table,
  Watermark,
  Progress,
  Modal,
} from "antd";
import { Image, InputNumber } from "antd";
import {
  LeftOutlined,
  RubyOutlined,
  HeartOutlined,
  MoreOutlined,
  HeartFilled,
} from "@ant-design/icons";
import moment from "moment/moment";
import Item from "antd/es/list/Item";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];
function Designant() {
  const [value, setValue] = useState("horizontal");
  const [selectdob, setselectdob] = useState();
  const [printdate, setprintdate] = useState();
  const [selectInput, setselectInput] = useState();
  const [inputNumberValue, setInputNumberValue] = useState(1);
  const [InputRadioValue, setInputRadioValue] = useState(1);
  const [RateValue, setRateValue] = useState();
  const [tablesdata, settablesdata] = useState([
    {
      key: "1",
      firstname: "John Doe",
      lastname: "M",
      age: 25,
      education: "BE",
      address: "dharmapuri",
      phoneno: "872365",
      id: "1",
    },
    {
      key: "2",
      firstname: "Jane Doe",
      lastname: "M",
      age: 30,
      education: "BE",
      address: "dharmapuri",
      phoneno: "872365",
      id: "1",
    },
    {
      key: "3",
      firstname: "Jane Doe",
      lastname: "M",
      age: 30,
      education: "BE",
      address: "dharmapuri",
      phoneno: "872365",
      id: "1",
    },
    {
      key: "4",
      firstname: "Jane Doe",
      lastname: "M",
      age: 30,
      education: "BE",
      address: "dharmapuri",
      phoneno: "872365",
      id: "1",
    },
    {
      key: "5",
      firstname: "Jane Doe",
      lastname: "M",
      age: 30,
      education: "BE",
      address: "dharmapuri",
      phoneno: "872365",
      id: "1",
    },
    {
      key: "6",
      firstname: "Jane Doe",
      lastname: "M",
      age: 30,
      education: "BE",
      address: "dharmapuri",
      phoneno: "872365",
      id: "1",
    },
    {
      key: "7",
      firstname: "Jane Doe",
      lastname: "M",
      age: 30,
      education: "BE",
      address: "dharmapuri",
      phoneno: "872365",
      id: "1",
    },
  ]);
  const [question, setquestion] = useState([
    { question: " what is your name?", answer: " oviya", detail: "M" },
    { question: " what is your age?", answer: 24, detail: "19-04-1999" },
    { question: "what is your native?", answer: " dpi", detail: "Tamilnadu" },
    {
      question: " what is your experience? ",
      answer: " 2 year",
      detail: "2020 -2022",
    },
  ]);
  const [openmodal, setopenmodal] = useState(false);

  const handleDateChange = (date, dateString) => {
    setselectdob(date);
    setprintdate(dateString);
    console.log(selectdob);
  };
  const handleinputChange = (e) => {
    setselectInput(e.target.value);
  };
  const handleNumberChange = (value) => {
    setInputNumberValue(value);
  };
  const handleradio = (e) => {
    setInputRadioValue(e.target.value);
  };
  const handletable = (pagination, filters, sorter) => {
    settablesdata(pagination, filters, sorter);
  };
  const columns = [
    { title: "Firstname", dataIndex: "firstname", key: "firstname" },
    { title: "Lastname", dataIndex: "lastname", key: "lastname" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Education", dataIndex: "education", key: "education" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Phone no", dataIndex: "phoneno", key: "phoneno" },
    { title: "Id", dataIndex: "id", key: "id" },
  ];
  const handleopen = () => {
    debugger;
    setopenmodal(true);
  };
  const handleok = () => {
    setopenmodal(false);
  };
  const handlecancel = () => {
    setopenmodal(false);
  };

  return (
    <>
      <Progress percent={30} status="active" />
      <Progress percent={50} status="exception" />
      <Progress percent={100} />
      <Watermark content={"oviya"}>
        <div
          style={{
            height: 200,
          }}
        />
      </Watermark>
      <Button type="primary" onClick={handleopen}>
        Modal
      </Button>
      <Modal
        title="basic modal"
        open={openmodal}
        onOk={handleok}
        onCancel={handlecancel}
      >
        <p>FIRST MODal</p>
        <p>second modal</p>
        <p>third modal</p>
      </Modal>
      <Image
        className="image"
        width="20%"
        src="https://i.pinimg.com/564x/06/61/5b/06615b4d55f1a871ef19b0b347e0eceb.jpg"
        alt="image"
      />

      <Table
        className="flex_container"
        dataSource={tablesdata}
        columns={columns}
        onChange={handletable}
      ></Table>
      <LeftOutlined />
      <RubyOutlined />
      <InputNumber
        min={0}
        max={100}
        value={inputNumberValue}
        onChange={handleNumberChange}
      />
      <p>InputNumber : {inputNumberValue}</p>

      <label>Radio button </label>
      <Radio.Group onChange={handleradio} value={InputRadioValue}>
        <Radio value={1234}>option1</Radio>
        <Radio value={2345}>option2</Radio>
        <Radio value={3456}>option3</Radio>
        <Radio value={4567}>option4</Radio>
      </Radio.Group>
      <p>Input Radiovalue : {InputRadioValue}</p>
      <Flex gap="middle" vertical>
        <Rate
          defaultValue={4}
          character={<HeartFilled />}
          tooltips={desc}
          onChange={setRateValue}
          value={RateValue}
        />
        {RateValue ? <span>{desc[RateValue - 1]}</span> : null}
      </Flex>
      <p>Ratevalue :{RateValue}</p>

      <label>Birthday : </label>
      <DatePicker
        className="datepicker"
        onChange={handleDateChange}
      ></DatePicker>
      <p>Selected Date :{printdate}</p>

      <label>Name : </label>
      <Input
        className="First_input"
        placeholder="Enter your name"
        onChange={handleinputChange}
      ></Input>
      <p>First name :{selectInput}</p>

      {Array.from({ length: 0 }).map((_, i) => (
        <p>First name :{selectInput}</p>
      ))}
      <Flex gap="middle" vertical>
        <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
          <Radio value="horizontal">horizontal</Radio>
          <Radio value="vertical">vertical</Radio>
        </Radio.Group>
        <Flex vertical={value === "vertical"}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              style={{
                height: "50px",
                width: "100px ",
                backgroundColor: i % 2 ? "#1677ff" : "#1677ffbf",
              }}
            />
          ))}
        </Flex>
      </Flex>
      <h4>
        People also ask <MoreOutlined />
      </h4>

      {tablesdata.map((key) => {
        <Menu data={key.firstname} />;
      })}
      {question.map((key, index) => (
        <Menu
          Amount={index + 1}
          question={key.question}
          answer={key.answer}
          detail={key.detail}
        />
      ))}
    </>
  );
}
export default Designant;
