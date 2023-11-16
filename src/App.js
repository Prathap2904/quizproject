import question from "./components/question";
import { useState } from 'react';
import './App.css';

function App() {
  const[questionIndex,setQuestionIndex] = useState(0);
  const[score,setScore] = useState(0);
  const presentquestion = question[questionIndex];
  const[result,setResult]=useState(false);
  const replay =()=>{
    setQuestionIndex(0);
    setScore(0);
    setResult(false)
  }
  const getchoice = (index)=>{
    if(presentquestion.Answer==index){
      setScore(score+1);
    }
    
    
    const nextquestion = questionIndex+1;
    if(nextquestion<question.length){
      setQuestionIndex(questionIndex+1);
    }
    else{
      setResult(true)
    }
    
  }
  return (
    <div className="Appname">
      {result?(<><h1>Mark:{score}/5</h1><br></br>
      <button onClick={replay}>PlayAgain</button></>):(<div className='quizquestion'>
          {presentquestion.question}
        <div className='quizoption'></div>
        <ul className='quizul'>
          {presentquestion.options.map((option,i) =>{
            return<li className="options" onClick={()=>{getchoice(i)}}>{option}</li>
          })}
          
        </ul>
        </div>
     )}
    
         </div>
  );
}

export default App;
