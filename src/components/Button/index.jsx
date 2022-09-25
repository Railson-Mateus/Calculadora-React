import React from "react";
import './index.css';

export default function Button(props) {
  let classes = 'button ';
  classes += props.operation ? 'operation ' : '';
  classes += props.double ? 'double ' : '';
  classes += props.doubleCol ? 'doubleCol ' : '';

  return (
    <button 
      className={classes}
      onClick={e => props.click && props.click(props.name ? props.name : props.label)} 
      > 
      <i>{props.label}</i>
    </button>
  );
}