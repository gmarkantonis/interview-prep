import {getQuestions} from '../api/QuestionBank';
import Problem from "../components/Problem";

function ProblemList(): React.ReactElement {
  return (
    <>
        {getQuestions().map((element, index) => {
          return <Problem data={element} key={index}/>
        })}
    </>
  );
}

export default ProblemList;
