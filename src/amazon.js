import { Divider, Space, Search, Input, Flex } from "antd";
import "./amazon.css";
import { Image, Button, Dropdown } from "antd";
// import Layoutpractice from './layoutpractice';
import logopng from "./whitelogo.jpg";
import indiaflag from "./india flag.jpg";
import fashine from "./womensfashin.jpg";
import phone from "./iQOO-Neo-6-1.jpg";
import {
  CaretDownOutlined,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { IoLocationSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
function Amazon() {
  const [repeatCount, setrepeatCount] = [];
  const ImageRepeater = (key) => {
    setrepeatCount(key);
  };
  const [Filterdata, setfilterdata] = useState([]);
  const [printdesign, setprintdesign] = useState([]);
  const [datas, setdatas] = useState([
    {
      key: "1",
      imageUrl: `${phone}`,
      offer: "40% off",
      deals: "diwali time deal",
      rate: " $ 11,000 MRP : 20,0000 ",
      model: "iQOO Z6 Lite",
    },
    {
      key: "2",
      imageUrl: `${logopng}`,
      offer: "30% off",
      deals: "limited time deal",
      rate: " $ 31,000 MRP : 20,0000 ",
      model: "iQOO Z7s",
    },
    {
      key: "3",
      imageUrl: `${fashine}`,
      offer: "50% off",
      deals: "pongal time deal",
      rate: " $ 41,000 MRP : 20,0000 ",
      model: "iQOO Z9 pro",
    },
    {
      key: "4",
      imageUrl: `${indiaflag}`,
      offer: "60% off",
      deals: "christmas time deal",
      rate: " $ 21,000 MRP : 20,0000 ",
      model: "iQOO Z4s",
    },
    {
      key: "5",
      imageUrl: `${indiaflag}`,
      offer: "40% off",
      deals: "christmas time deal",
      rate: " $ 11,000 MRP : 20,0000 ",
      model: "iQOO Z4s",
    },
    {
      key: "6",
      imageUrl: `${indiaflag}`,
      offer: "50% off",
      deals: "weekend time deal",
      rate: " $ 23,000 MRP : 20,0000 ",
      model: "iQOO Z4s",
    },
    {
      key: "7",
      imageUrl: `${indiaflag}`,
      offer: "80% off",
      deals: "friday time deal",
      rate: " $ 16,000 MRP : 20,0000 ",
      model: "iQOO Z4s",
    },
    {
      key: "8",
      imageUrl: `${indiaflag}`,
      offer: "70% off",
      deals: "special offers",
      rate: " $ 12,000 MRP : 20,0000 ",
      model: "iQOO Z4s",
    },
    {
      key: "9",
      imageUrl: `${indiaflag}`,
      offer: "70% off",
      deals: "pongal time deal",
      rate: " $ 10,000 MRP : 20,0000 ",
      model: "iQOO Z4s",
    },
    {
      key: "10",
      imageUrl: `${indiaflag}`,
      offer: "60% off",
      deals: "christmas time deal",
      rate: " $ 22,000 MRP : 20,0000 ",
      model: "iQOO Z4s",
    },
  ]);
  debugger;
  const handlesearchinput = (anykey) => {
    const gotdata = datas.filter(
      (e) =>
        e.deals.toLowerCase().includes(anykey.toLowerCase()) ||
        e.model.toLowerCase().includes(anykey.toLowerCase())
    );
    setdatas(gotdata);
  };
  return (
    <>
     <p>Amazon web site design : </p>
      <div className="Amazon_container">
        <div className="header_container">
          <div className="amazon_logo">
            <Image src={logopng} />
          </div>
          <div className="h_parah">
            <p className="parah">Delivering to chennai </p>
            <h4 className="head">
              <IoLocationSharp />
              Update location
            </h4>
          </div>

          <div className="search">
            <button className="search_dropdown">
              <CaretDownOutlined />
            </button>
            <input
              className="search_Input"
              type="text"
              placeholder="search input...."
              onChange={ (i) =>handlesearchinput(i.target.value)}
            />
            <button className="search_Button" >
            {/* onClick={(d) =>handlesearchbutton(d.target.value)} */}
              <IoMdSearch />
            </button>
          </div>
          <div className="flag_container">
            <img src={indiaflag} className="flag" />
            <h6 className="head">
              En
              <CaretDownOutlined />
            </h6>
          </div>
          <div className="h_parah">
            <p className="parah">Hellow , sign in </p>
            <h4 className="head">
              Accound & list
              <CaretDownOutlined />
            </h4>
          </div>

          <div className="h_parah">
            <p className="parah">Returns & </p>
            <h4 className="head">Order</h4>
          </div>
          <div>
            <h4 className="cart">
              {" "}
              <FaShoppingCart /> Cart{" "}
            </h4>
          </div>
        </div>
        <div className="container_1">
          {Array.from({ length: 4 }).map((e, i) => (
            <div className="Box_1" key={e}>
              <p className="box_1_parah">
                Up to 60% offer | <br />
                styles for womens..
              </p>
              <div className="Box_1_1_column">
                <div className="Box_1_1">
                  <div className="subbox_1_1">
                    {" "}
                    <img src={fashine}></img>
                  </div>
                  <div className="subbox_1_1">
                    {" "}
                    <img src={fashine}></img>
                  </div>
                </div>
                <div className="Box_1_1">
                  <div className="subbox_1_1">
                    <img src={fashine}></img>
                  </div>
                  <div className="subbox_1_1">
                    {" "}
                    <img src={fashine}></img>
                  </div>
                </div>
                <p className="box_end_parah">End of session slae..</p>
              </div>
            </div>
          ))}
          ;
        </div>
        <div className="container_2">
          {datas.map((e, index) => (
            <div className="container_box" key={e}>
              <div className="box_container_1">
                <div className="subbox_2_1">
                  <img src={e.imageUrl}></img>
                </div>
                <div className="offer_button_container">
                <Button className="offer_button"> {e.offer}</Button>
                </div>
                <p className="offer_news">{e.deals}</p>
                <p className="offer_price">
                  {e.rate} <br />
                  {e.model}
                </p>
              </div>
            </div>
          ))}
          
        </div>
      {/* <div className="full_container">
        <header className="header_1">Header</header>
        <div className="menucontent_container">
          <div className="menu">
            <h5>Profile builder :</h5>
            <Divider />
            <p>
              Name <CaretDownOutlined />
            </p>
            <Divider />
            <p>
              Age <CaretDownOutlined />
            </p>
            <Divider />
            <p>
              Education <CaretDownOutlined />
            </p>
            <Divider />
            <p>
              Country <CaretDownOutlined />
            </p>
            <Divider />
            <p>
              Religion <CaretDownOutlined />
            </p>
            <Divider />
            <p>
              Commited in faith <CaretDownOutlined />
            </p>
            <Divider />
          </div>
          <div className="content_container">
            <div className="content_1">Content 1</div>
            <div className="row_container">
              <div className="content_2">Content 2</div>
              <div className="content_3">Content 3</div>
              <div className="content_4">Content 4</div>
            </div>
            <div className="content_5">Content 5</div>
          </div>
        </div>
        <footer className="footer">footer</footer>
      </div>
     <Divider/> 
      <div className="second_fullcontainer"> 
      <p>Second flex layout :</p>
        <header className="Header">Header</header>
        <div className="content_container">
          <div className="box_1">Content 1</div>
          <div className="second_content">
          <div className="box_2">Content 2</div>
          <div className="box_3">Content 3</div>
          <div className="box_4">Content 4</div>
          </div>
          <div className="thired_content">
          <div className="box_5">Content 5</div>
          <div className="box_6">Content 6</div>
          </div>
        </div>
      </div> */}

     

        {/* <div className="container_1" >
        
          <div className="Box_1" onChange={handlecontainerone}>
            <p className="box_1_parah">
              Up to 60% offer | <br />
              styles for womens..
            </p>
            <div className="Box_1_1_column">
              <div className="Box_1_1">
                <div className="subbox_1_1">
                  {" "}
                  <img src={fashine}></img>
                </div>
                <div className="subbox_1_1">
                  {" "}
                  <img src={fashine}></img>
                </div>
              </div>
              <div className="Box_1_1">
                <div className="subbox_1_1">
                  <img src={fashine}></img>
                </div>
                <div className="subbox_1_1">
                  {" "}
                  <img src={fashine}></img>
                </div>
              </div>
              <p className="box_end_parah">End of session slae..</p>
            </div>
           </div>
           {/* <div className="Box_2">
            <p className="box_1_parah">
              Up to 60% offer | <br />
              styles for womens..
            </p>
            <div className="Box_1_1_column">
              <div className="Box_1_1">
                <div className="subbox_1_1">
                  <img src={fashine}></img>
                </div>
                <div className="subbox_1_1">
                  <img src={fashine}></img>
                </div>
              </div>

              <div className="Box_1_1">
                <div className="subbox_1_1">
                  <img src={fashine}></img>
                </div>
                <div className="subbox_1_1">
                  <img src={fashine}></img>
                </div>
              </div>
              <p className="box_end_parah">End of session slae..</p>
            </div>
          </div>
          <div className="Box_3">
            <p className="box_1_parah">
              Up to 60% offer | <br />
              styles for womens..
            </p>
            <div className="Box_1_1_column">
              <div className="Box_1_1">
                <div className="subbox_1_1">
                  {" "}
                  <img src={fashine}></img>
                </div>
                <div className="subbox_1_1">
                  {" "}
                  <img src={fashine}></img>
                </div>
              </div>
              <div className="Box_1_1">
                <div className="subbox_1_1">
                  {" "}
                  <img src={fashine}></img>
                </div>
                <div className="subbox_1_1">
                  {" "}
                  <img src={fashine}></img>
                </div>
              </div>
            </div>
            <p className="box_end_parah">End of session slae..</p>
          </div>
          <div className="Box_4">
            <p className="box_1_parah">
              Up to 60% offer | <br />
              styles for womens..
            </p>
            <div className="Box_1_1_column">
              <div className="Box_1_1">
                <div className="subbox_1_1">
                  {" "}
                  <img src={fashine}></img>
                </div>
                <div className="subbox_1_1">
                  {" "}
                  <img src={fashine}></img>
                </div>
              </div>
              <div className="Box_1_1">
                <div className="subbox_1_1">
                  {" "}
                  <img src={fashine}></img>
                </div>
                <div className="subbox_1_1">
                  {" "}
                  <img src={fashine}></img>
                </div>
              </div>
              <p className="box_end_parah">End of session slae..</p>
            </div> 
          </div> */}
        {/* </div> */}

        {/* <div className="container_2">
          <p className="container_Heading">Today's Deals..</p>
          <div className="container_box">
            <button className="left_dropdown">
              {" "}
              <LeftOutlined />
            </button>
            <div className="box_container_1">
              <div className="subbox_2_1">
                {" "}
                <img src={phone}></img>
              </div>
              <Button className="offer_button"> 40% off</Button>
              <p className="offer_news">Limited time deal..</p>
              <p className="offer_price">
                $ 11,000 MRP : 20,0000 <br />
                iQOO Z6 Lite
              </p>
            </div>

            {/* <div className="box_container_1">
        
              <div className="subbox_2_1">
                {" "}
                <img src={phone}></img>
              </div>
              <Button className="offer_button"> 40% off</Button>
              <p className="offer_news">Limited time deal..</p>
              <p className="offer_price">
                $ 11,000 MRP : 20,0000 <br />
                iQOO Z6 Lite
              </p>
            </div>
            <div className="box_container_1">
             
              <div className="subbox_2_1">
                {" "}
                <img src={phone}></img>
              </div>
              <Button className="offer_button"> 40% off</Button>
              <p className="offer_news">Limited time deal..</p>
              <p className="offer_price">
                $ 11,000 MRP : 20,0000 <br />
                iQOO Z6 Lite
              </p>
            </div>
            <div className="box_container_1">
             
              <div className="subbox_2_1">
                <img src={phone} ></img>
              </div>
              <Button className="offer_button"> 40% off</Button>
              <p className="offer_news">Limited time deal..</p>
              <p className="offer_price">
                $ 11,000 MRP : 20,0000 <br />
                iQOO Z6 Lite
              </p>
            </div>
            <div className="box_container_1">
              
              <div className="subbox_2_1">
                {" "}
                <img src={phone}></img>
              </div>
              <Button className="offer_button"> 40% off</Button>
              <p className="offer_news">Limited time deal..</p>
              <p className="offer_price">
                $ 11,000 MRP : 20,0000 <br />
                iQOO Z6 Lite
              </p>
            </div>
            <div className="box_container_1">
              
              <div className="subbox_2_1">
                {" "}
                <img src={phone}></img>
              </div>
              <Button className="offer_button"> 40% off</Button>
              <p className="offer_news">Limited time deal..</p>
              <p className="offer_price">
                $ 11,000 MRP : 20,0000 <br />
                iQOO Z6 Lite
              </p>
            </div>
            <div className="box_container_1">
              
              <div className="subbox_2_1">
                {" "}
                <img src={phone}></img>
              </div>
              <Button className="offer_button"> 40% off</Button>
              <p className="offer_news">Limited time deal..</p>
              <p className="offer_price">
                $ 11,000 MRP : 20,0000 <br />
                iQOO Z6 Lite
              </p>
            </div>
            <div className="box_container_1">
             
              <div className="subbox_2_1">
                {" "}
                <img src={phone}></img>
              </div>
              <Button className="offer_button"> 40% off</Button>
              <p className="offer_news">Limited time deal..</p>
              <p className="offer_price">
                $ 11,000 MRP : 20,0000 <br />
                iQOO Z6 Lite
              </p>
            </div>
            <div className="box_container_1">
              
              <div className="subbox_2_1">
                {" "}
                <img src={phone}></img>
              </div>
              <Button className="offer_button"> 40% off</Button>
              <p className="offer_news">Limited time deal..</p>
              <p className="offer_price">
                $ 11,000 MRP : 20,0000 <br />
                iQOO Z6 Lite
              </p>
            </div>
            <button className="right_dropdown">
              <RightOutlined />{" "}
            </button>*/}
        {/* </div> */}
        {/* </div>*/}
      </div>
    </>
  );
}
export default Amazon;
