import {useState} from 'react'

function MyForm(){
    const [inputs,setInputs]=useState({
        firstname:'Magnifique',
        tomato:true
    });

    const handleChange=(e)=>{
        const target=e.target;
        const value=target.type==='checkbox'?  target.checked:target.value;
        const name=target.name;
        setInputs(values=>({...values,[name]:value}))
    }
    const handleSubmit = (event) => {
    let fillings = '';
    if (inputs.tomato) fillings += 'tomato';
    if (inputs.onion) {
      if (inputs.tomato) fillings += ' and ';
      fillings += 'onion';
    }
    if (fillings == '') fillings = 'no fillings';
    alert(`${inputs.firstname} wants a burger with ${fillings}`);
    event.preventDefault();
  };
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>First name:
            <input 
            type='text'
            name='firstname'
            value={inputs.firstname}
            onChange={handleChange}
            />
            </label>
            <label>Last name:
            <input 
            type='text'
            name='lastname'
            value={inputs.lastname}
            onChange={handleChange}
            />
            </label>
            <input 
            type='checkbox'
            name='tomato'
            checked={inputs.tomato}
            onChange={handleChange}
            />
            <p>Current value:{inputs.firstname} {inputs.lastname}</p>
          </form>
        </div>
    )
}
export default MyForm;