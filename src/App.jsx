import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import SearchBar from "./components/transitions";
import Hoc from "./components/Hoc";
import Timer from "./components/useEffects";
function Info(){
  const {firstName}=useParams();
  return <h1>Hello, {firstName}</h1>;
}
function App(){
  return (
    <BrowserRouter>
      <nav>
        <Link to="/customer/Emil">Emil</Link>{" "}
        <Link to="/customer/Tobias">Tobias</Link>{" "}
      </nav>
      <Routes>
        <Route path="/customer/:firstName" element={<Timer/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;