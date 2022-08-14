import React, {useState} from 'react';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const add = box => {
        setBoxes(boxes => [...boxes, box]);
    }
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const boxComponent = boxes.map(({id, width, height, backgroundColor}) =>(
        <Box 
           key = {id}
           id = {id}
           width = {width}
           height = {height}
           handleRemove = {remove}
           backgroundColor = {backgroundColor}/>
    ));
    
    return (
        <div>
            <NewBoxForm create ={add}/>
            {boxComponent}
        </div>
    )
}

export default BoxList;