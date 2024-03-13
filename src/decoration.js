import React, { useState, useEffect, useRef } from "react";
import "./decoration.css";
import logo_d from "./image 2.png";
import saleimage from "./image 3.png";
import candle from "./candle image.png";
import standholder from "./stand holder.png";
import candleset from "./candle set.png";
import { Image, Button, Dropdown, Flex, Divider } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  UserOutlined,
  ShoppingOutlined,
  DownOutlined,
} from "@ant-design/icons";
function Decoration() {
  const [product, setproduct] = useState([
    {
      image: `${saleimage}`,
      dealbutton: "SALE",
    },
    {
      image: `${candle}`,
      dealbutton: "Candle image",
    },
    {
      image: `${standholder}`,
      dealbutton: "STANDS & HOLDERS",
    },
    {
      image: `${candleset}`,
      dealbutton: "CANDLES SET",
    },
  ]);
  const [subproduct, setsubproduct] = useState([
    {
      sub_image: `${saleimage}`,
      name:"candle stand",
      price:"$1200",
    },
    {
        sub_image: `${candle}`,
      name:"candle stand",
      price:"$1200",
    },
    {
        sub_image: `${standholder}`,
      name:"candle stand",
      price:"$1200",
    },
    {
        sub_image: `${candleset}`,
      name:"candle stand",
      price:"$1200",
    },
  ]);
  return (
    <>
      <div className="decoration_fullcontainer">
        <div className="headerbox_container">
          <div className="dec_logo_container">
            <Image src={logo_d} />
          </div>

          <div className="nav_details">
            <Flex gap="large">
              <p className="paragraph">Dinning</p>
              <p className="paragraph">Decor</p>
              <p className="paragraph">Kitchen</p>
              <p className="paragraph">Sale </p>
            </Flex>
          </div>
          <div className="icons">
            <Flex gap="large">
              <SearchOutlined />
              <HeartOutlined />
              <UserOutlined />
              <ShoppingOutlined />
            </Flex>
          </div>
        </div>
        <div className="product_container">
          {product.map((e, index) => (
            <div className="product" key={e}>
              <img src={e.image} className="product_image"></img>
              <p className="product_parah">{e.dealbutton}</p>
            </div>
           
          ))}
        </div>
        {/* <div  className="heading_offer">
        <p>288 Results found</p>

        </div> */}
        
        <div className="thired_container">
        <div className="filter_container">
            <h4 className="fliter_head">Filter</h4>
            <p className="fliter_parah">Type <DownOutlined  className="dropdown"/></p>
            <Divider/>
            <p className="fliter_parah">Color <DownOutlined  className="dropdown"/></p>
            <Divider/>
            <p className="fliter_parah">Price <DownOutlined  className="dropdown"/></p>
            <Divider/>
            <p className="fliter_parah">Materials<DownOutlined  className="dropdown"/></p>
            <Divider/>
            <p className="fliter_parah">Shape <DownOutlined  className="dropdown"/></p>
            <Divider/>
            <p className="fliter_parah">Size <DownOutlined  className="dropdown"/></p>
            <Divider/>
        </div>
        
        <div className="subimage_container">
        {subproduct.map((i, index) => (
            <div className="sub_product" key={i}>
                <div className="row_1">
              <img src={i.sub_image} className="subproduct_image"></img>
              <p className="subproduct_parah">{i.name}</p>
              <p className="subproduct_parah">{i.price}</p>
              </div>
              <div className="row_1">
              <img src={i.sub_image} className="subproduct_image"></img>
              <p className="subproduct_parah">{i.name}</p>
              <p className="subproduct_parah">{i.price}</p>
              </div>
              <div className="row_1">
              <img src={i.sub_image} className="subproduct_image"></img>
              <p className="subproduct_parah">{i.name}</p>
              <p className="subproduct_parah">{i.price}</p>
              </div>
            </div>
            ))}
        </div>
        </div>
      </div>
    
    </>
  );
}
export default Decoration;
