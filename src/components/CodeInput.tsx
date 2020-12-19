import React from 'react';
import {Box, Button, Code, HStack, LightMode, Text, Textarea} from "@chakra-ui/react"

function CodeInput() {
  let [value, setValue] = React.useState("")
  let [result, setResult] = React.useState("")

  let runCode = (input: string) => {
    try {
      setResult(eval(input));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <Box p={5}>
        <Code w="100%" bg="none">
          <Textarea value={value} onChange={(e) => setValue(e.target.value)} h="300px" placeholder="Write your function here and call it with your selected test case."></Textarea>
        </Code>
        <HStack spacing="24px">
          <LightMode>
            <Button colorScheme="red" onClick={() => runCode(value)}>
              Run Code
            </Button>
          </LightMode>
          <Code>
            <Text>{result}</Text>
          </Code>
        </HStack>
      </Box>
    </>
  );
}

export default CodeInput;
