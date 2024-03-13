import React, { useState, useEffect, useRef } from "react";
import { Divider } from 'antd';
import {
    MoreOutlined
  } from '@ant-design/icons';
function Menu(props) {
    useEffect(()=>{
debugger
    },[props]);
    return (
        <>
{/* <h4>People also ask <MoreOutlined /></h4> */}
<Divider/>

<p>{props.data}</p>
{/* <p> {props.Amount} .{props.question} {props.answer}. {props.detail} </p> */}

{/* <Divider/>
<p>How create a website?</p>
<Divider/>
<p>What are the 3 types of web?</p>
<Divider/>
<p>What are the 2 types of websites?</p>
<Divider/>
<p>What is the full form of websites?</p> */}

</>
    )
   
}
export default Menu;