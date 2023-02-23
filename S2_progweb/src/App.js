import {useState} from "react";
import "./App.css"

import TP1 from "./tp1/compte";
import TP2 from "./tp2/compte";
import TP3 from "./tp3/compte";
import TP4 from "./tp4/compte";
import TP5 from "./tp5/compte";
import TP6 from "./tp6/compte";
import TP7 from "./tp7/compte";
import TP8 from "./tp8/compte";
import TP9 from "./tp9/compte";


function App() {
    const [TP, setTP] = useState(TP1);

    return (
        <div className="App">
            <div className="Header">
                <button className="Button" onClick={() => setTP(TP1)}>TP1</button>
                <button className="Button" onClick={() => setTP(TP2)}>TP2</button>
                <button className="Button" disabled={true} onClick={() => setTP(TP3)}>TP3</button>
                <button className="Button" disabled={true} onClick={() => setTP(TP4)}>TP4</button>
                <button className="Button" disabled={true} onClick={() => setTP(TP5)}>TP5</button>
                <button className="Button" disabled={true} onClick={() => setTP(TP6)}>TP6</button>
                <button className="Button" disabled={true} onClick={() => setTP(TP7)}>TP7</button>
                <button className="Button" disabled={true} onClick={() => setTP(TP8)}>TP8</button>
                <button className="Button" disabled={true} onClick={() => setTP(TP9)}>TP9</button>
            </div>
            <div>
                {TP}
            </div>
        </div>
    );
}

export default App;
