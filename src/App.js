import React, { useState } from 'react';
import Toolbar from './components/toolbar/Toolbar';
import SideDrawer from './components/sidedrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  function drawerToggleCLickHandler() {
    setSideDrawerOpen(!sideDrawerOpen);
  }

  function backdropClickHandler() {
    setSideDrawerOpen(false);
  }

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  return (
    <div className="app-container" style={{ height: '100%' }}>
      <Toolbar drawerClickHandler={drawerToggleCLickHandler} />
      <SideDrawer show={sideDrawerOpen} close={backdropClickHandler} />
      {backdrop}
      <main className="pages-container" style={{ marginTop: '56px' }}>
        <section
          id="section-1"
          style={{ width: '100%', height: '100vh', backgroundColor: '#B3B1C4', textAlign: 'center', lineHeight: "100vh"}}>
          <h1>Section 1</h1>
        </section>
        <section
          id="section-2"
          style={{ width: '100%', height: '100vh', backgroundColor: '#C4C2B1', textAlign: 'center', lineHeight: "100vh" }}>
          <h1>Section 2</h1>
        </section>
        <section
          id="section-3"
          style={{ width: '100%', height: '100vh', backgroundColor: '#917481', textAlign: 'center', lineHeight: "100vh" }}>
          <h1>Section 3</h1>
        </section>
        <section
          id="section-4"
          style={{ width: '100%', height: '100vh', backgroundColor: '#A5C8CE', textAlign: 'center', lineHeight: "100vh" }}>
          <h1>Section 4</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
