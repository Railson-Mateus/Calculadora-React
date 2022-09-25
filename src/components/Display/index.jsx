import React from "react";
import './index.css';

export default function Display(props) {
  return (
    <div className='display'>{props.value}</div>
  );
}