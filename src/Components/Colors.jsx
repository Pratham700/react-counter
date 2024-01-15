import {useState} from "react";
import Button from "./Button.jsx";
import button from "./Button.jsx";

//import 'src/App.css'
function Colors() {
    const [color, setColor] = useState("black");
    const buttons = [
        {colorText: 'Red', bgColour: 'darkred'},
        {colorText: 'Orange', bgColour: 'coral'},
        {colorText: 'Blue', bgColour: 'cadetblue'},
    ]

    function changeColor(newColor) {
        return () => setColor(newColor)
    }

    return (
        <div className="w-full h-screen duration-200"
             style={{backgroundColor: color}}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-300 px-3 py-2 rounded-lg">
                    {buttons.map((uniqueButton) => (
                        <Button key={uniqueButton.colorText}
                                color={uniqueButton.colorText.toLowerCase()}
                                text={uniqueButton.colorText}
                                onCLick={changeColor(uniqueButton.bgColour)}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Colors