import { BrowserRouter, NavLink} from 'react-router-dom';

const Home=()=>{
  return (
  <div>
    <h1>Home Page</h1>
  </div>
  )
}
const About=()=>{
  return (
  <div>
    <h1>About Page</h1>
  </div>
  )
}

const navLinkStyle=({isActive})=>({
    color:isActive?'red':'blue',
    textDecoration:isActive?'underline':'none'
  })
const App=()=>{
  return (
    <div>
      <BrowserRouter>
       <nav style={{display:'flex',gap:'20px'}}>
         <NavLink to="/" style={navLinkStyle}>Home</NavLink>
         <NavLink to="/about" style={navLinkStyle}>About</NavLink>
       </nav>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;