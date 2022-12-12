import React, { useState } from "react";
const Button = (props) =>{
const [open,setOpen] = useState(false);
   return (<div onClick={()=>{
    props.handlerClick();
   }} className="blocks">
       <div />
       <div />
       <div />
   </div>)
}
export default Button;