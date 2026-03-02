import { useState } from "react";
import {message,Button,notification} from "antd";
const Counter=()=>{
    const [count,setCount]=useState(1);
    function counterPlus(){
        const hide=message.loading('Processing...',0);
        setTimeout(()=>{
        if(count===3){
            notification.success({
                message:"Reached maximum limit",
                description:"The maximum number is 10. You don't need to exceed it please"
            })
        }
        if(count===15){
            notification.error({
                message:"Beyond maximum limit",
                description:"Your going beyond the maximum number which is 10. You don't need to exceed it please"
            })
        }
        setCount(count+1);
        hide();
        message.success(`Increased! Current value: ${newValue}`);
        },1500)
    }
    function counterMinus(){
          const newValue = count - 1;

    if (newValue < 0) {
      message.error("Value cannot be negative!");
      return;
    }

    setCount(newValue);
    message.success(`Decreased! Current value: ${newValue}`);
    }
    return (
      <div>
        <h3>{count}</h3>
        <Button type="primary" onClick={counterPlus}>+</Button>
        <Button danger style={{marginLeft:10}} onClick={counterMinus}>-</Button>
      </div>
    )
}
export default Counter;