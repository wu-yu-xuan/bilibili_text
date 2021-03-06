import React from "react";
import Top from "./Top";
import Body from "../../Animation/Left/Body"
import * as style from "./style.scss";

export default function Left (props:{tag:string}){
  return <div className={style.box}>
    <Top tag={props.tag}/>
    <Body />
  </div>
}