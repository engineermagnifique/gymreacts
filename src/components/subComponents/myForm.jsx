import { useState } from "react";

function myForm(){
    const [name,setName]=useState("");
    function handleChange(e){
        setName(e.target.value);
    }
    return (
       <div>
        <form style={{background:'red'}}>
          <label>
            <input 
            type="text"
            value={name}
            onChange={handleChange}
            />
          </label>
          <p>Current value: {name}</p>
        </form>
    </div>
    )
}
export default myForm;