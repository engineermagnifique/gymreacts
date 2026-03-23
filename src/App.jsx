import { BrowserRouter,Routes,Route,Navigate,NavLink} from 'react-router-dom';
import { useState } from 'react';
const Navigation=()=>{
  return (
    <nav style={{padding:'6px'}}>
      <NavLink style={{padding:'4px'}} to="/">Landing</NavLink>
      <NavLink style={{padding:'4px'}} to="/home">Home</NavLink>
      <NavLink style={{padding:'4px'}} to="/dashboard">Dashboard</NavLink>
      <NavLink style={{padding:'4px'}} to="/analytics">Analytics</NavLink>
      <NavLink style={{padding:'4px'}} to="/admin">Admin</NavLink>
    </nav>
  )
}

const Landing=()=>{
  return <h1>Landing Page any one</h1>
}

const Home=({user})=>{
  return <h1>Home Page any one can access it</h1>
}

const Dashboard=()=>{
  return <h1>Dashboard Page protected</h1>
}

const Analytics=()=>{
  return <h1>Analytics Page protected</h1>
}

const Admin=()=>{
  return <h1>Admin Page protected</h1>
}

const NotFound=()=>{
  return <h1>404 Not Found</h1>
}

const ProtectedRoute=({user,redirectPath="/",children})=>{
  if(!user){
    return <Navigate to={redirectPath} replace/>
  }
  return children;
}
const App=()=>{
  const [user,setUser]=useState(null);
  const handleLogin=()=>setUser({name:'John Doe',role:'admin'});
  const handleLogout=()=>setUser(null);
  return (
    <BrowserRouter>
    <Navigation />
    {user ? (
      <>
       <p>Welcome again Mr {user.name} who is {user.role}</p>
       <button onClick={handleLogout}>Logout</button>
      </>
    ):(
        <button onClick={handleLogin}>Login</button>
    )}
     <Routes>
       <Route path="/" element={<Landing />} />
       <Route path="/home" element={
        <ProtectedRoute user={user}>
          <Home user={user} />
        </ProtectedRoute>
       } 
       />
       <Route path="/dashboard" element={
        <ProtectedRoute user={user} >
          <Dashboard />
        </ProtectedRoute>
       } />
       <Route path="analytics" element={<Analytics />} />
       <Route path="admin" element={<Admin />} />
       <Route path="*" element={<NotFound />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App;