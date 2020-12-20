import React from 'react';
import NavBar from "./components/NavBar";
import ProblemList from './containers/ProblemList';

function App(): React.ReactElement {
  return (
    <>
      <NavBar />
      <ProblemList />
    </>
  );
}

export default App;
