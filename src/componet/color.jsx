import { React, useState } from "react";
import datos from "../datos.js"

function Color() {
    const [clr, setClr] = useState("#000000")
    // console.log(clr);
    return(
        <div className="color">
            <input type="color" name="mycolor" 
            className="color" defaultValue={clr}
            onChange={(e) => {
                setClr(clr.replace(clr , e.target.value)) 
                datos.color =  e.target.value
            }}/>
        </div>
    )
}

export default Color;