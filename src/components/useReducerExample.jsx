import Password from "antd/es/input/Password";
import React,{useReducer} from "react";

const initialState={
    count:0,
    username:"",
    password:"",
    loading:false,
};

function reducer(state,action){
    switch(action.type){
        case "increment":
            return {...state, count:state.count+1};
        case "decrement":
            return {...state, count:state.count-1};
            case "setUsername":
      return { ...state, username: action.value };

    case "setPassword":
      return { ...state, password: action.value };

    case "toggleLoading":
      return { ...state, loading: !state.loading };

    case "reset":
      return initialState;
    default:
        return state;
    }
}
export default function ReduceExample(){
    const [state,dispatch]=useReducer(reducer,initialState);

     const handleLogin = () => {
    dispatch({ type: "toggleLoading" });

    setTimeout(() => {
      alert(`Welcome ${state.username}`);
      dispatch({ type: "toggleLoading" });
    }, 1000);
  };
   return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>useReducer Combined Example</h1>

      {/* Counter Section */}
      <h2>Counter</h2>
      <p>Count: {state.count}</p>

      <button onClick={()=>dispatch({type:"increment"})}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>

      <hr />

      {/* Form Section */}
      <h2>Login Form</h2>

      <input
        placeholder="Username"
        value={state.username}
        onChange={(e) =>
          dispatch({ type: "setUsername", value: e.target.value })
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={(e) =>
          dispatch({ type: "setPassword", value: e.target.value })
        }
      />

      <br />
      <br />

      <button onClick={handleLogin}>
        Login
      </button>

      <hr />

      {/* Loading state */}
      {state.loading && <p>Loading...</p>}

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset All
      </button>
    </div>
  );
}