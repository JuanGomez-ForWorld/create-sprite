import { React } from "react";
import "../style/draw.css"
  
function Draw(props) {
    return(
        <div className="draw">
            <canvas className="canvas"
                    width={props.width}
                    height={props.height}>
            </canvas>
        </div>
    )
}

export default Draw;