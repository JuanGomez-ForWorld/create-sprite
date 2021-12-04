import ToolsDraw from "./componet/toolsDraw.jsx";
import Color from "./componet/color.jsx";
import Draw from "./componet/draw.jsx";
import LineTime from "./componet/lineTime.jsx";
// css
import "./style/style.css"
// logic
import datos from "./datos.js";
// img
import lapiz from "./img/lapiz.png";
import borra from "./img/borra.png";
import balde from "./img/balde.png";


const array = [
  {id: 1, src: lapiz, callback: () => datos.tool = "lapiz"},
  {id: 2, src: borra, callback: () => datos.tool = "borra"},
  {id: 3, src: balde, callback: () => datos.tool = "balde"}
]

function App() {
  return (
    <div className="container">

      <div className="column1">

        <ToolsDraw  array={array}/>
        <Color />

      </div>

      <div className="column2">

        <Draw width="320" height="320" />
        <LineTime />
        
      </div>

      <div className="column3">

        <ToolsDraw array={array}/>

      </div>
    </div>
    
  );
  
}



export default App;
