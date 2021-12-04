import React from "react";
import "../style/toolsDraw.css";

function createTool(props) {
    return(
        <li className="items" 
            onClick={props.callback}
            key={props.id}>
            <img src={props.src} alt="tool"></img>
        </li>
    )
}

function ToolsDraw(props) {
    
    return(
        <div className="toolsDraw">
            <ul className="listTool">
                {props.array.map(x => createTool(x))}
            </ul>
        </div>
    )   
}

export default ToolsDraw;