import React, { useState } from 'react';
import Toolbar from './components/toolbar/Toolbar';
import SideDrawer from './components/sidedrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';
import Section from './components/section/Section';

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
        <Section
          id="section-1"
          backgroundColor="#B3B1C4"
          title="Section 1" />

        <Section
          id="section-2"
          backgroundColor="#C4C2B1"
          title="Section 2" />

        <Section
          id="section-3"
          backgroundColor="#917481"
          title="Section 3" />

        <Section
          id="section-4"
          backgroundColor="#A5C8CE"
          title="Section 4" />
      </main>
    </div>
  );
}

export default App;
