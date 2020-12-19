import {Code, Flex, Heading, Stack, Table, Tbody, Td, Th, Thead, Tr, Text} from "@chakra-ui/react"

function Info(data: any) {
  const problemData = data.data;
  
  return (
      <Stack spacing={2}>
        <Heading size="md">
          {problemData.title}
        </Heading>
        <Text>
          {problemData.problem}
        </Text>
        {problemData.reference && <Code p={5} whiteSpace="pre">{problemData.reference}</Code>}
        <Flex><Code w="100%"><Table size="sm" variant="striped">
          <Thead>
            <Tr>
              <Th>Input</Th>
              <Th>Output</Th>
            </Tr>
          </Thead>
          <Tbody>
            {problemData.examples.map((example: any, index: number) => {
              return <Tr key={index}>
                <Td>{example[0]}</Td>
                <Td>{example[1].toString()}</Td>
              </Tr>
            })}
          </Tbody>
        </Table></Code></Flex>
      </Stack>
  );
}

export default Info;
