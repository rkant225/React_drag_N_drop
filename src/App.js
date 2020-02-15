import React from 'react';
import styled from 'styled-components';
import SortableComponent from './SortableComponent'
import DragAndDropTest from './DragAndDrop/DragAndDropTest';

const AppWrapper = styled.div`    
    display : flex;
    justify-cintent : center;
    margin-top : 100px;
`;

const Container = styled.div`
`;

function App() {
  return (
    <div className="App">
      <h1>Hello World....</h1>
      <SortableComponent />
      
      
      
      <AppWrapper>
        <Container>
            <DragAndDropTest />  
        </Container>
      </AppWrapper>
      
       
    </div>
  );
}

export default App;
