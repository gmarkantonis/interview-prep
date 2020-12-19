import {bank} from '../QuestionBank';
import {Box} from "@chakra-ui/react"
import Info from "./Info";
import CodeInput from "./CodeInput";

function Problem() {
  return (
    <>
        {bank.map((element, index) => {
          return <Box key={index} p={5}>
            <Info data={element}/>
            <CodeInput />
          </Box>
        })}
    </>
  );
}

export default Problem;
