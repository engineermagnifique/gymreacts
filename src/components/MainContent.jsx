import React, { useState } from "react";
import { message,notification,Modal} from "antd";
import MyButton from "./subComponents/MyButton";
import Counter from "./subComponents/Counter";
import UserManager from "./subComponents/useManagement";
import ReusableButton from "./subComponents/Button";
import UserCard from "./subComponents/UserCard";
import RenderProperties from "./subComponents/Properties";
// import MyForm from "./subComponents/myForm";
// import MyForm from "./ValidateForm";
import MyForm from "./subComponents/MultipleInputs";
const MainContent=()=>{
    const abakoresha = [
  {
    profileUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    avatar: "Ifoto ya Eric",
    name: "Eric Uwimana",
    detail: "Umusesenguzi wa data"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    avatar: "Ifoto ya Diane",
    name: "Diane Mukamana",
    detail: "Inzobere mu by'itumanaho"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    avatar: "Ifoto ya Patrick",
    name: "Patrick Habimana",
    detail: "Umwubatsi wa porogaramu (Frontend Developer)"
  }
];

    const clickButton=()=>{
        message.success('Do you really want to go back! Go')
    }
    const continueButton=()=>{
        notification.error({
            title:"Incomplete data",
            description:"Please fill all necessary data before you proceed"
        })
    }
    const OpenForm=()=>{
        Modal.confirm({
            title:"Do you really want to open the form",
            content:"Opening the form will reset all your current data. Do you want to proceed?",
            okText:`Yes I want`,
            cancelText:`I don't want`,
            okType:'danger',

            onOk:()=>{
                message.success('Form opened successfully')
            },
            onCancel:()=>{
                message.info('Please fill the form')
            }
        })
    }
    return(
       <div>
         <MyForm/>
         <RenderProperties/>
       </div>
    )
}
export default MainContent;