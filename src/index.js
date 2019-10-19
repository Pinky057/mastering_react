import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";

class QuizBee extends Component{
    state={
        questionBank: [],
        score:0,
        response:0
};
    computeAnswer=(answer, correctAnswer)=>{
     if (answer===correctAnswer){
         this.setState({
             score: this.state.score + 1
         });
     }
     this.setState({
         response: this.state.response< 5? this.state.response+1:5
     })
    };

    getQuestions=()=>{
      quizService().then(question=>{
         this.setState({
             questionBank:question
         }) ;
      });
    };
    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return(
            <div className="container">
                <div className="title">QuizBee</div>
                {this.state.questionBank.length >0 &&
                this.state.response<5 &&
                this.state.questionBank.map(
                    ({question,answers, correct,questionId})=>(
                        <QuestionBox
                            question={question}
                            options={answers}
                            key={questionId}
                         selected={answer=>this.computeAnswer(answer, correct)}
                        />
                    )
                )}
            </div>
        );
    }

}
ReactDOM.render(<QuizBee/>, document.getElementById("root"));