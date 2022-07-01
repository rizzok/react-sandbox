import { Box, Button, ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Box mb={5}>
          <h1>React Sandbox</h1>
        </Box>
        <Box m={5}>
          <Button colorScheme="blue">Button</Button>
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default App;
