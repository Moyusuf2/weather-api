import { TextField, } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";


function App() {
    const [cityName, setCityName] = useState("Paris");
    const [inputText, setInputText] = useState("");
    const [data, setdata] = useState({});
    useEffect(() => {
        fetch(
            //API info Hidden
        )
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error("Something went wrong")
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [cityName]);
    console.log(inputText)
    return (
        <div className="bg_img">
            <TextField variant="filled" 
            label="Search Location"
            autoComplete="off"
             className="input" 
             value={inputText}
             onChange={(e) => setInputText(e.target.value)}/>
            <h1 className="city">Rome</h1>
            <div className="group">
                <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather Icon" />
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