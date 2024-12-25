import React, { useState } from "react";
import DropDownButton from "./DropDownButton";

function DropDown(props) {
  const [display, setDisplay] = useState("none");

  function handleClick() {
    if (display == "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  }
  return (
    <>
    <DropDownButton onClick={handleClick}/>
    <div>
      
      <div style={{ display: display }}>{props.children}</div>
    </div>
    
    </>
  );
}

export default DropDown;
