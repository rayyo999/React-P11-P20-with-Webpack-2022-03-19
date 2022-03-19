import React,{useState} from "react";
import Quiz from "./Quiz"

const Page = ({setstart,data,setclick,check,setcheck,getData}) => { 
    const [count, setcount] = useState(0);
    let listQuiz;
    if(data){
        listQuiz = data.map((item, index) => {
            return <Quiz 
                key={index} 
                idForQuiz={item.idForQuiz}
                question={item.question}
                options={item.options}
                setclick={setclick}
                check={check}
                setcount={setcount}
                />
        })
    } 
    function restart(){
        setstart(false);
        setcheck(false);
        getData();
    }
    return (
        <div className="page-p11">
            {listQuiz}
            {
                !check &&
                <div className="check">
                    <button className="checkBtn" onClick={()=>{setcheck(true)}}>Check Answer</button>
                </div>
            }
            {
                check &&
                <div className="restart">
                    <div className="count"><p>{count} / 5 correct</p></div>
                    <button className="restartBtn" onClick={restart}>Try Again</button>
                </div>
            }
        </div>
    )
}
export default Page