import React from "react";

const Start = ({setstart, updateData}) => {
    function start(){
        setstart(true);
        updateData();
    }
    return (
        <div className="start-p11">
            <h1>Quizzical</h1>
            <h4>Inhence some skills</h4>
            <button onClick={start}>Start quiz</button>
        </div>
    )
}
export default Start