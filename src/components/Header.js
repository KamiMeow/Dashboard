import React from 'react';

function Header(props) {
  return (
    <header>
      <h2>DASHBOARD-{" }{oTaбbl4"}</h2>
      {props.children}
    </header>
  );
};

export default Header;