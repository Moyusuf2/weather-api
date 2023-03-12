import { TextField, Slide } from "@mui/material";
import "./App.css";


function App() {
    return (
        <div className="bg_img">
            <TextField variant="filled" label="Search Location" className="input" />
            <h1 className="city">Rome</h1>
            <div className="group">
                <img src="" alt="" />
                <h1>Clear</h1>
            </div>

            <h1 className="temp">5 </h1>

            {/* <Slide direction="right" timeout={800}> */}
            <div className="box_container">
                <div className="box">
                    <p>Humidity</p>
                    <h1>12%</h1>
                </div>
            </div>

            <div className="box_container">
                <div className="box">
                    <p>wind</p>
                    <h1>5 km/h</h1>
                </div>
            </div>

            <div className="box_container">
                <div className="box">
                    <p>Feels Like</p>
                    <h1>4 °C</h1>
                </div>
            </div>

            {/* </Slide> */}
        </div>
    );
}

export default App;