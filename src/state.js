import "./state.css";
import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
import { DatePicker,Rate,Input,Space} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip,Radio,Table ,Popconfirm} from "antd";
function State() {
  const [details, setdetails] = useState({
    firstname: "oviya",
    lastname: "M",
    place: "Dharmapuri",
    occupation: "designer",
    Education: "BE",
    phoneno: "786543",
    id: 1,
    dob: "dateofbirth",
  }); // state for input feilds
  const [tables, settables] = useState([]); // state for table map feilds
  const [updatekey, setupdatekey] = useState(); // state for key
  const [editupdate, seteditupdate] = useState(false); // "initionl"state for update or not
  const [filterdata, setfilterdata] = useState([]);
  const [selectoption, setselectoption] = useState(" ");
  const [checkvalue, setcheckvalue] = useState([]);
  const [selectradio, setselectradio] = useState([]);
  const [dropdownvalue, setdropdownvalue] = useState("light");
  const [theme, settheme] = useState([
    { value: "light", label: "light" },
    { value: "dark", label: "dark" },
    { value: "colored", label: "colored" },
  ]);
  const [position, setposition] = useState([
    { value: "select", label: "select" },
    { value: "top-left", label: "top-left" },
    { value: "top-right", label: "top-right" },
    { value: "top-center", label: "top-center" },
    { value: "bottom-left", label: "bottom-left" },
    { value: "bottom-right", label: "bottom-right" },
    { value: "bottom-center", label: "bottom-center" },
  ]);
  const [positionvalue, setpositionvalue] = useState("bottom-left");
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState();
  const [copydetails, setcopydetails] = useState(false);
  const [dob, setdob] = useState("");
  const [dob2, setdob2] = useState("");
  const [DaysDifference, setDaysDifference] = useState(null);
  const [tablesdata, settablesdata] = useState([ 
    { key: '1',  firstname: 'John Doe',lastname:'M', age: 25 ,education:'BE', address:'dharmapuri',phoneno:'872365',id:'1',action:'clear'},
    { key: '2',  firstname: 'Jane Doe',lastname:'M', age: 30 ,education:'BE', address:'dharmapuri',phoneno:'872365',id:'1',action:'clear'},
    { key: '3',  firstname: 'Jane Doe',lastname:'M', age: 30 ,education:'BE', address:'dharmapuri',phoneno:'872365',id:'1',action:'clear'},
    { key: '4',  firstname: 'Jane Doe',lastname:'M', age: 30 ,education:'BE', address:'dharmapuri',phoneno:'872365',id:'1',action:'clear'},
    { key: '5',  firstname: 'Jane Doe',lastname:'M', age: 30 ,education:'BE', address:'dharmapuri',phoneno:'872365',id:'1',action:'clear'},
    { key: '6',  firstname: 'Jane Doe',lastname:'M', age: 30 ,education:'BE', address:'dharmapuri',phoneno:'872365',id:'1',action:'clear'},
    { key: '7',  firstname: 'Jane Doe',lastname:'M', age: 30 ,education:'BE', address:'dharmapuri',phoneno:'872365',id:'1',action:'clear'},
    { key: '8',  firstname: 'Jane Doe',lastname:'M', age: 30 ,education:'BE', address:'dharmapuri',phoneno:'872365',id:'1',action:'clear'},
   ]);
  const notify = () =>
    toast.warning("success", {
      theme: "colored",
    });
  const Submit = () => {
    
    // settables([...tables, details]);
    if (editupdate) {
      toast.success(`user ID ${details.id}has been updated successfully`, {
        theme: "colored",
      });

      const editbutton = tables.map((key) =>
        key.id === updatekey
          ? {
              ...key,
              firstname: details.firstname,
              lastname: details.lastname,
              place: details.place,
              occupation: details.occupation,
              Education: details.Education,
              phoneno: details.phoneno,
              id: details.id,
              dob: details.dob,
            }
          : key
      );
      debugger;
      let newdate = new Date();
      let agediff = moment(newdate).diff(details.dob, "years");
      // console.log(agediff);
      debugger;
      if (agediff >= 18) {
        toast.success(
          `updated user age greater than 18 , age is ${details.dob} !`,
          {
            theme: "colored",
          }
        );
        settables(editbutton);
        setfilterdata(editbutton);
      } else {
        toast.error(`updated user age must be greater than  or equal to 18`);
      }
    } else {
      let newdate = new Date();
      let agediff = moment(newdate).diff(details.dob, "years");
      // console.log(agediff);
      let copydetails = {
        ...details,
        age: agediff,
      };
      console.log(copydetails);
      debugger;
      if (agediff >= 18) {
        toast.success(
          `new user age greater than 18 , age is ${details.dob} !`,
          {
            theme: "colored",
          }
        );
        settables([...tables, copydetails]);
        setfilterdata([...filterdata, copydetails]);
      } else {
        toast.error(`age must be greater than  or equal to 18`);
      }
    }
    seteditupdate(false);
  };
  // sumbit or update based on mode

  const clear = () => {
    toast.info("details are cleared", {
      theme: "colored",
    });
    let one = {
      firstname: " ",
      lastname: " ",
      place: " ",
      occupation: " ",
      Education: " ",
      phoneno: " ",
    };
    setdetails(one);
  };
  /// function for clear input feilds
  const handleDelete = (anykey) => {
    toast(anykey.firstname);
    const deletebutton = tables.filter((key) => key.id !== anykey.id);
    settables(deletebutton);
    setfilterdata(deletebutton);
  }; // row delete
  const handleEdit = (id) => {
    setdetails(id);
    seteditupdate(true);
    setupdatekey(id.id);
  };
  // function for change editmode

  //  querykey is search input key callback from event
  const handleSearch = (querykey) => {
    const getdata = tables.filter(
      (key) =>
        key.place.toLowerCase().includes(querykey.toLowerCase()) ||
        key.firstname.toLowerCase().includes(querykey.toLowerCase())
    );

    setfilterdata(getdata);
  };

  const handleDropdown = (key) => {
    setselectoption(key);
  };

  const handlecheckbox = (checkkey) => {
    setcheckvalue([...checkvalue, checkkey]);
  };
  useEffect(() => {
    console.log(checkvalue);
  });
  useEffect(() => {
    toast.success(
      `the position of toast message has been updated as ${positionvalue} successfully`,
      {
        theme: "colored",
        position: positionvalue,
      }
    );
  }, [positionvalue]);
  // -----defentance array, give many state whenever the state gets update the useeffect will trigger and what we given inside the useeffect will excute.

  const handleradiobutton = (radiokey) => {
    selectradio.push(radiokey);
    debugger;
    setselectradio(selectradio);
  };

  const handleseconddropdown = (e) => {
    setdropdownvalue(e);
  };

  const handlepositiondropdown = (k) => {
    setpositionvalue(k);
  };
  const increament = () => {
    setcount(count + 1);
  };
  // const decreament = () =>{
  //   setcount(count - 1);
  // }
  useEffect(() => {
    if (count >= 10) {
      setcount2(count + 3);
    }
  }, [count]);
  // useEffect(()=>{
  //   toast.success(`return value : ${number}`,{
  //     theme: "colored",
  //   })
  // },[number]);
  useEffect(() => {
    clear();
    // -------------------------------------------------------------settables-submit,seteditupdate-update setdetails-clear
  }, [tables]);
  const handledateofbirth = (event) => {
    setdob(event.target.value);
  };
  const handledateofbirthtwo = (event) => {
    setdob2(event.target.value);
  };
  const calculateDifference = () => {
    const startMoment = moment(dob);
    const endMoment = moment(dob2);
    const diffInDays = endMoment.diff(startMoment, "days");
    const tomorrow = moment(endMoment).add(1, "days");
    debugger;

    setDaysDifference(moment(tomorrow).add(1, "days").format("YYYY-MM-DD"));
  };
  useEffect(() => {
    toast.success(
      `the daydifference of toast message has been updated as ${DaysDifference} successfully`,
      {
        theme: "colored",
      }
    );
  }, [DaysDifference]);


  const handletable = (pagination, filters, sorter) =>{
    settablesdata(pagination, filters, sorter)
  }
  const columns = [
    { title: 'Firstname', dataIndex: 'firstname', key: 'firstname' },
    { title: 'Lastname', dataIndex: 'lastname', key: 'lastname' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Education', dataIndex: 'education', key: 'education' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Phone no', dataIndex: 'phoneno', key: 'phoneno' },
    { title: 'Id', dataIndex: 'id', key: 'id' },
    { title: 'Action', dataIndex: 'action', key: 'action',
    render: (_, anykey) => (
      <span>
        <Popconfirm
          onConfirm={() => handleDelete(anykey)}
          // okText="Yes"
          // cancelText="No"
        >
          <Button type="link" danger>
            Delete
          </Button>
        </Popconfirm>
        <Button type="link" onClick={() => handleEdit(anykey)}>
          Edit
        </Button>
      </span>
    ), },
  ];
  //  <-------------------------------------------------return start---------------------------------------------------->
  return (
    <>
    <Link to="/about">About</Link>
      <div className="ant_design">
        {" "}
        <DatePicker />
        
      <div>
        <Flex gap="middle" vertical>
         <Rate defaultValue={4}/>
        </Flex>
      </div>
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <div>
        <Button type="dashed" shape="square"  icon={<SearchOutlined />} >
          Ant button
        </Button>
      </div>
      <ToastContainer theme={dropdownvalue} position={positionvalue} />
      <div>
      <Flex vertical gap="middle">
    <Radio.Group defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    </Flex>
    <Radio.Group>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
    <Space.Compact style={{ width: '40%' }}>
      <Input defaultValue="Combine input and button" />
      <Button type="primary">Submit</Button>
    </Space.Compact>
    </div>

        <button onClick={notify}>Notify!</button>
      </div>
      <div>
        <form>
          <label>Birthday :</label>
          <input
            type="date"
            name="dob"
            value={dob}
            onChange={handledateofbirth}
          ></input>
        </form>
        <p>Select date :{dob}</p>
      </div>
      <div>
        <form>
          <label>Birthday :</label>
          <input
            type="date"
            name="dob2"
            value={dob2}
            onChange={handledateofbirthtwo}
          ></input>
        </form>
        <p>Select second date :{dob2}</p>

        <button onClick={calculateDifference}>Calculate Difference :</button>
        <p>Calculate Differencedate :{DaysDifference}</p>
      </div>
      <div className={editupdate ? "update_color" : "full_container"}>
        <div className="input_field">
          <div className="Input_1">
            <label className="f_Namelabel"> First name:</label>
            <input
              type="text"
              className="f_nameinput_1"
              placeholder="Enter your first name"
              value={details.firstname}
              onChange={(e) =>
                setdetails({ ...details, firstname: e.target.value })
              }
            />
          </div>

          <div className="Input_2">
            <label className="L_Namelabel">Last name:</label>
            <input
              type="text"
              className="L_nameinput_2"
              placeholder="Enter your last name"
              value={details.lastname}
              onChange={(e) =>
                setdetails({ ...details, lastname: e.target.value })
              }
            />
          </div>

          <div className="Input_3">
            <label className="Placelabel">Place:</label>
            <input
              type="text"
              className="placeinput"
              placeholder="Enter your Place"
              value={details.place}
              onChange={(e) =>
                setdetails({ ...details, place: e.target.value })
              }
            />
          </div>

          <div className="Input_4">
            <label className="Occupationlabel">Occupation:</label>
            <input
              type="text"
              className="Occupationinput"
              placeholder="Enter your Occupation"
              value={details.occupation}
              onChange={(e) =>
                setdetails({ ...details, occupation: e.target.value })
              }
            />
          </div>

          <div className="Input_5">
            <label className="Education_details">Education:</label>
            <input
              type="text"
              className="Educationinput"
              placeholder="Enter your Education"
              value={details.Education}
              onChange={(e) =>
                setdetails({ ...details, Education: e.target.value })
              }
            />
          </div>

          <div className="Input_6">
            <label className="Phone_label">Phone no:</label>
            <input
              type="text"
              className="phoneinput"
              placeholder="Enter your phone no"
              value={details.phoneno}
              onChange={(e) =>
                setdetails({ ...details, phoneno: e.target.value })
              }
            />
          </div>
          <div className="Input_id">
            <label className="id_label">id no:</label>
            <input
              type="text"
              className="idinput"
              placeholder="Enter your id no"
              value={details.id}
              onChange={(e) => setdetails({ ...details, id: e.target.value })}
            />
          </div>

          <div>
            <form>
              <label className="input_dob">Birthday :</label>
              <input
                className="dobfield"
                type="date"
                name="inputdob"
                value={details.dob}
                onChange={(e) =>
                  setdetails({ ...details, dob: e.target.value })
                }
              ></input>
            </form>
          </div>
        </div>
      </div>

      <div className="button_container">
        <button onClick={Submit} className="Button_submit">
          {editupdate ? "update" : "submit"}
        </button>
        <button onClick={clear} className="clear_button">
          clear
        </button>
      </div>
      <div className="search_button">
        <input
          className="searchinput"
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="drop_down">
        <select
          className="select_data"
          onChange={(e) => handleDropdown(e.target.value)}
        >
          {tables.map((key, index) => (
            <option key={index} value={key.occupation}>
              {key.occupation}
            </option>
          ))}
        </select>
        <p>Selected Option: {selectoption}</p>
      </div>
      <div>
        <select
          className="select_dropdown"
          onChange={(e) => handleseconddropdown(e.target.value)}
        >
          {theme.map((x, index) => (
            <option key={index} value={x.value}>
              {x.label}
            </option>
          ))}
        </select>

        <div>
          <select
            className="select_dropdown"
            onChange={(e) => handlepositiondropdown(e.target.value)}
          >
            {position.map((e, index) => (
              <option key={index} value={e.value}>
                {e.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* <----------------------------------------------counter-------------------------------------------------> */}
      <h1>
        counter:{count} {count2}
      </h1>
      <button onClick={increament}>Incrteament</button>
      {/* <button onClick={decreament}>decreament</button> */}
      {/* <--------------------------------------------------end counter------------------------------------------------> */}
      <div>
        {tables.map((key) => (
          <label className="input_check">
            <input
              className="check_box"
              value={key.firstname}
              type="checkbox"
              onChange={(e) => handlecheckbox(e.target.value)}
            ></input>
            {key.firstname}
          </label>
        ))}
        <p className="check_parah">
          checkoption:
          {checkvalue.map((key) => (
            <p>{key}</p>
          ))}
        </p>
      </div>
      {/* <div className="radio_container">
        {tables.map((key) => (
         <lable>
         <input
        className="check_ratio"
         type="radio"
         value= {key.firstname}
         onChange={(e) => handleradiobutton(e.target.value)}/>
          {key.firstname}
       </lable>
      ))}
       
        <p className="ratio_parah">Selected Option: {selectradio.map((key)=>{
          <p>{key}</p>
        })}</p>
      
      </div>  */}

      <div className="table_container">
        <table className="table_design">
          <thead className="table_head">
            <tr>
              <td>s.no</td>
              <td>First name</td>
              <td>Last name</td>
              <td>Place</td>
              <td>Occupation</td>
              <td>Education</td>
              <td>Phone no</td>
              <td>Id</td>
              <td>Action</td>
              <td>Dob</td>
              <td>Age</td>
            </tr>
          </thead>

          {filterdata.map((key,index) => {
            return (
              <>
                <tr className={key.id > 4 ? "table_row" : "table_normal"}>
                  <td>{index + 1}</td>
                  <td
                    className={
                      key.firstname === selectoption ? "table_data" : " "
                    }
                  >
                    {key.firstname}
                  </td>
                  <td
                    className={
                      key.lastname === selectoption ? "table_l_data" : " "
                    }
                  >
                    {key.lastname}
                  </td>
                  <td>{key.place}</td>
                  <td
                    className={
                      key.occupation === selectoption ? "table_l_data" : " "
                    }
                  >
                    {" "}
                    {key.occupation}
                  </td>
                  <td>{key.Education}</td>
                  <td>{key.phoneno}</td>
                  <td>{key.id}</td>
                  

                  <td>
                    <div>
                      <button
                        className="delete_button"
                        onClick={() => handleDelete(key, "check")}
                      >
                        Delete
                      </button>
                    </div>
                    <button
                      className="edit_button"
                      onClick={() => handleEdit(key, "yy")}
                    >
                      Edit
                    </button>
                  </td>
                  <td>{key.dob}</td>
                  <td className={key.age >= 18 ? " age_color" : " "}>
                    {key.age}
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
      <Table
      dataSource={filterdata}
      columns={columns}
      onChange={handletable}>
      </Table>
      <Link to="/home">Home</Link>
    </>
  );
}
export default State;
