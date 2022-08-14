import React from 'react';

const Box = ({id, handleRemove, width =5, height= 5, backgroundColor = "green"}) =>{
    const remove = () => handleRemove(id)
    return (
        <div>
            <div
                style={{ 
                    height: `${height}em`,
                    width: `${width}em`,
                    backgroundColor
                }}>

            </div>
            <button onClick={remove}>REMOVE</button>

        </div>
    )
}

export default Box;