import './App.css';
import { Navigation } from './components/navigation/navigation.component';
import { Welcome } from './components/welcome/welcome.component';
import { Carasoul } from './components/carasoul/carasoul.component';
import { Features } from './components/features/features.component';
import { Events } from './components/events/events.component';
import { Footer } from './components/footer/footer.component';
import { useState } from 'react';
import { Moto } from './components/moto/moto.component';
function App() {
  const [ok , setOk] = useState(true);
  return (
    <>
      <Navigation/>
      <Carasoul/>
      {!ok ? <>
      <Features/>
      <Moto/>
      <Events/>
      <Footer/>
      </> : null}
      {ok ? <Welcome setOk={setOk}/> : null}
    </>
  );
}

export default App;
