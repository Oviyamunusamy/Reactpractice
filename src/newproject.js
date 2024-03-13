import "./newproject.js";
import "./newproject.css";
import React, { useState, useEffect, useRef } from "react";
function Newproject() {
  const [name1, setname1] = useState();
  const [name2, setname2] = useState();
  const [bothname, setbothname] = useState();
  const [heading, setheading] = useState({
    name1: "oviya",
    name2: " m",
  });
  const [forloop, setforloop] = useState();
  const [breaks, setbreaks] = useState();
  const [date2, setdate2] = useState();
  const [error, seterror] = useState();
  const [color, setcolor] = useState([
    "rose",
    "green",
    "blue",
    "yellow",
    "red",
    "orange",
  ]);
  const [name, setName] = useState([{ name: "ovi" }, { name: "ya" }]);
  const [house, sethouse] = useState([
    "house no 1",
    "house no 2",
    "house no 3",
    "house no 4",
  ]);
  const [lines, setlines] = useState([ ]);
  // state update initialitation------------------------------------------------------------------------->
  const next = () => {
    let x = "check";
    let y = 110;
    console.log(x, y, "..");
    // console.log(ok(), "90");
    const mapfunction = ["line 1", "line 2", "line 3"];
    setlines(mapfunction);
    // let names = heading.name1.concat(heading.name2);
    // console.log(names);
    // setbothname(names);
    for (let i = 0; i <= 10; i++) {
      console.log("number is " + i);
      setforloop("number is " + i);
    }
    try {
      // addalert("welcome");
    } catch (err) {
      console.log(err.message);
    }

    // ----------------------------------------------------------------------------------
    // const box = ["s box", "b box", "c box" , "d box"]
    // let items = "";
    // list:{
    //  items += box[0];
    //  items += box[1];
    //  items += box[2];
    //  break list;
    //  items += box[3];

    // }
    // console.log(items);
    // setbreaks(items);
    // --------------------------------------------------------------------------------------------
    // const fruits = ["a","b","c","d"];
    // for(const key of fruits){
    //   console.log(key);
    // }

    // let a = 4;
    // let b = 5;

    // let value = a + b;
    // let result = value;
    // if (value >= 10) {
    //   result = "if is correct";
    // } else if (value <= 5) {
    //   result = "else if is correct";
    // } else {
    //   result = "else is incorrect";
    // }

    // switch (a) {
    //   case 0:
    //     result = 1;
    //     break;
    //   case 1:
    //     result = 2;
    //     break;
    //   case 2:
    //     result = 3;
    //     break;
    //   case 3:
    //     result = 4;
    //     break;
    //   case 4:
    //     result = 54;
    //     break;
    //   default:
    //     result = "not defind";
    // }
    // const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // let date1 = new Date();

    // date1.setMonth(3);
    // console.log(names);
    // console.log(result);

    // console.log(date1);
    // setdate2(date1);
    // console.log(Math.random()*10);
  };
  return (
    <>
      <div>
        <input
          type="text"
          className="input_1"
          placeholder="enter your name"
          value={heading.name1}
          onChange={(e) => setheading({ ...heading, name1: e.target.value })}
        />
        <input
          type="text"
          className="input_2"
          placeholder="Enter your name 2"
          value={heading.name2}
          onChange={(e) => setheading({ ...heading, name2: e.target.value })}
        />
        <button onClick={next} className="button_1">
          {" "}
          next
        </button>
        {/* <p>{color[0]}</p>
        <p>{color[1]}</p>
        <p>{color[2]}</p>
        <p>{color[3]}</p> */}
        {/* --------------------------------------------------------------------------------------------map function */}
        {color.map((el, index) => {
          return (
            <>
              <p>{el}</p>
            </>
          );
        })}
        {house.map((e) => {
          return (
            <>
              <h5>{e}</h5>
            </>
          );
        })}

        {lines.map((item) => {
          return (
            <>
              <h5>{item}</h5>
              
            </>
          );
        })}
        {/* {name.map((el, index) => {
          return (
            <>
              <p>{el.name}</p>
            </>
          );
        })}  */}
        {/* <h1 className="first_head">newfile</h1> */}
        {/* <h2>{date1}</h2> */}

        <h2>{bothname}</h2>
        <h4>{forloop}</h4>
        <h4>{breaks}</h4>
        {/* <h2>{result}</h2>  */}
        {/* <h2>{date1}</h2> */}
      </div>
    </>
  );
}
export default Newproject;
