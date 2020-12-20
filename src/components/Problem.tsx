import {Box} from "@chakra-ui/react"
import Info from "./Info";
import CodeInput from "./CodeInput";

interface ProblemProps {
  data: {
    title: string,
    problem: string,
    reference?: string,
    examples: (string | boolean)[][]
  }
}

function Problem(props: ProblemProps): React.ReactElement {
  return <Box p={5}>
    <Info data={props.data}/>
    <CodeInput />
  </Box>
}

export default Problem;
