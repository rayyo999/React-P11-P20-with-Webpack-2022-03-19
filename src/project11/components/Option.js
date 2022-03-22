import React from "react";

const Option = ({value,click,setclick,idForQuiz,idForOption,check,isAnswer,setcount}) => {
    let toggle;
    if(click === true){
        toggle = "option option-click";
    } else if(click === false){
        toggle = "option"
    }
    if(check === true){
        if(click === true && isAnswer === true){
            toggle = " option option-correct"
        }
        if(click === false && isAnswer === true){
            toggle = "option option-incorrect"
        }
    }
    function select(){
        setclick(idForQuiz, idForOption);
        if(isAnswer === true){
            setcount(prev => prev + 1)
        }
    }

    return (
        <div 
            className={toggle} 
            onClick={select}
        >
            {value}
        </div>
    )
}
export default Option