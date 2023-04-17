import "./App.css";
import { Navigation } from "./components/navigation/navigation.component";
import { Home } from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import { RouteContainer } from "./routes/route-container/route-container.component";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { Welcome } from './components/welcome/welcome.component';

const App = () => {
  const [ok, setOk] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      setOk(!ok);
    }, "1500");
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home ok={ok} />} />
            <Route path=":nav" element={<RouteContainer />} />
          </Route>
        </Routes>
        {/* {ok ? <Welcome setOk={setOk} ok={ok}/> : null} */}
      </AnimatePresence>
    </>
  );
};

export default App;
