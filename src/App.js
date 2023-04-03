import './App.css';
import { Navigation } from './components/navigation/navigation.component';
import { Home } from './routes/home/home.component';
import { Routes, Route } from "react-router-dom";
import { RouteContainer } from './routes/route-container/route-container.component';
import { Welcome } from './components/welcome/welcome.component';
import { useEffect, useState } from 'react';


const App = () => {
  const [ok , setOk] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {setOk(!ok)}, "1500");
    return () => clearTimeout(timer);
  }, [])
  
   return ( 
    <>
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home ok={ok}/>}/>
        <Route path=":nav" element={<RouteContainer/>}/>
      </Route>
    </Routes>
    {/* {!ok && <><div className="w-[30px] h-screen fixed top-0 right-0 z-10" ></div><div className="w-[30px] h-screen fixed top-0 left-0 z-10" style={{ backgroundImage: `url(${Pattern})`}}></div></>} */}
    {ok ? <Welcome setOk={setOk} ok={ok}/> : null}
    </>
   )
};



export default App;
