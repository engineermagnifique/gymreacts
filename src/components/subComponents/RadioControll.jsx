import { useState } from 'react';

function MyFormOptions() {
  const [selectedFruit,setSelectedFruit]=useState('banana');

  const handleChange=(e)=>{
    setSelectedFruit(e.target.value);
  }
  const handleSubmit=(event)=>{
    alert(`Your favorite fruit is: ${selectedFruit}`);
    event.preventDefault();
  }
  return (
    <div>
       <form onSubmit={handleSubmit}>
         <p>Select your favorite fruit: </p>
         <label>
          <input
          type='radio'
          name='fruit'
          value='apple'
          checked={selectedFruit==='apple'} 
          onChange={handleChange}
          /> Apple
         </label>
         <br/>
       </form>
    </div>
  )
}
export default MyFormOptions;
