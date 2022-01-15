import React, {useState} from 'react';

const BoxGenerator = (props) => {

    let [boxColor,setBoxColor] = useState("");
    let [boxHeight, setBoxHeight] = useState("");
    let [boxWidth, setBoxWidth] = useState("");
    let [listOfBoxes,setListOfBoxes] = useState([]);

    const createBox = (e) => {
        e.preventDefault();
        let boxObj = {boxColor,boxHeight,boxWidth};
        setListOfBoxes([...listOfBoxes,boxObj]);
        document.getElementById("input") 
        
    }

    return (
        <div>
            <h3>The Box Generator!</h3>

            <form name="box-form" onSubmit={createBox}>
                <label htmlFor="">Color: </label>
                <input id='input' type="text" onChange={(e)=>setBoxColor(e.target.value)}/>

                <label htmlFor="">Height in Pixels: </label>
                <input type="text" onChange={(e)=>setBoxHeight(e.target.value)}/>

                <label htmlFor="">Width in Pixels: </label>
                <input type="text" onChange={(e)=>setBoxWidth(e.target.value)}/>

                <input type="submit" value="Create your box!"/>
            </form>

            <h3>Here are the boxes:</h3>

            {
                listOfBoxes.map((box,i)=>{
                    return (
                        <div key={i} style= {{backgroundColor:box.boxColor, height:box.boxHeight+"px", width:boxWidth+"px", display: "inline-block"}}>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default BoxGenerator