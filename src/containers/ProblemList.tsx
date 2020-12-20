import {bank} from '../api/QuestionBank';
import Problem from "../components/Problem";

function ProblemList(): React.ReactElement {
  return (
    <>
        {bank.map((element, index) => {
          return <Problem data={element} key={index}/>
        })}
    </>
  );
}

export default ProblemList;
