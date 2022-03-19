import React from "react";
import Option from "./Option";

const Quiz = ({idForQuiz,question,options,setclick,check,setcount}) => {
    let listOption;
    if(options){
        listOption = options.map((item, index) => {
            return <Option 
                key={index} 
                idForQuiz={idForQuiz} 
                value={item.value} 
                idForOption={item.idForOption} 
                click={item.click}
                isAnswer={item.isAnswer}
                setclick={setclick}
                check={check}
                setcount={setcount} 
                />
        })
        
    }
    return (
        <div className="quiz-p11">
            <h3>{question}</h3>
            <div className="option-list">
                {listOption}
            </div>
            <hr/>
        </div>
    )
}
export default Quiz