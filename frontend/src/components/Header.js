import React from 'react';
import Switch from "react-switch";

const Header = (prop) => {
  return (
    <div className='app-header'>
      <h1>Note List</h1>
      <div align="right">
        <Switch onChange={() => {prop.setLightTheme(!prop.lightTheme)}} checked={prop.lightTheme}/>
      </div>
    </div>
  )
}

export default Header
