import React, {useState, useEffect} from "react";
import "./P11.css"
import Start from "./components/Start";
import Page from "./components/Page";

const P11 = () => {
    const [data, setdata] = useState([]);
    const [start, setstart] = useState(false);
    const [check, setcheck] = useState(false);

    function getData() {
        fetch("https://opentdb.com/api.php?amount=5")
        .then(res => res.json())
        .then(data => setdata((data.results)))
    }
    function updateData(){
        setdata(prevdata => {
            return prevdata.map((item,index) => {
                const options = [];
                let correctAnswer = {
                    value:item.correct_answer,
                    isAnswer:true,
                    click:false,
                    idForOption:(item.incorrect_answers.length === 3 ? 3 : 1)
                }
                let incorrectAnswer = item.incorrect_answers.map((option, index) => {
                    const incorrectOption = {
                        value:option,
                        isAnswer:false,
                        click:false,
                        idForOption:index
                    }
                    options.push(incorrectOption)
                    return incorrectOption
                })
                options.splice(Math.floor(Math.random()*3),0,correctAnswer)
                return {
                    ...item,
                    correct_answer:correctAnswer,
                    incorrect_answers:incorrectAnswer,
                    options:options,
                    idForQuiz:index
                }
            })
        })
    }

    function setclick(idForQuiz,idForOption){
        setdata(prev => prev.map((quiz) => {
            return (
                quiz.idForQuiz === idForQuiz ?
                {
                    ...quiz,
                    options:quiz.options.map((option) => {
                        return (
                            option.idForOption === idForOption ?
                            {
                                ...option,
                                click:!option.click
                            }
                            : option
                        )
                    })
                }
                : quiz
            )
        })
        )
    }

    useEffect(() => {
        getData();
        updateData()
    }, []);
    return (
        <div className="body-p11">
            <header></header>
            <main className="main-p11">
                {
                    !start && 
                    <Start 
                        setstart={setstart} 
                        updateData={updateData}
                    />
                }
                { 
                    start && 
                    <Page 
                        setstart={setstart} 
                        data={data} 
                        setdata={setdata} 
                        setclick={setclick}
                        check={check}
                        setcheck={setcheck}
                        getData={getData}
                    />
                }
            </main>
            <footer></footer>
        </div>
    )
}
export default P11