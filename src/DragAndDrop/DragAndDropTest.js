import React from 'react';
import styled from 'styled-components';
import DropAble from './DropAble';
import DragAble from './DragAble';

const Wrapper = styled.div`
    width : 100%;
    padding : 32px;
    display : flex;
    justify-cintent : center;
`;

const Item = styled.div`
    padding : 8px;
    color : #555;
    background-color : white;
    border-radius : 3px;
`;

const dropAbleStyle = {
    backgroundColor : '#555',
    width : '250px',
    height : '400px',
    margin : '32px'
};

class DragAndDropTest extends React.Component {
    
    render(){
        return(
            <Wrapper>
                <DropAble id="dr1" style={dropAbleStyle}>
                    <DragAble id="item1" style={{margin : '2px'}}> <Item>{"Item 1"}</Item> </DragAble>
                    <DragAble id="item2" style={{margin : '2px'}}> <Item>{"Item 2"}</Item> </DragAble>
                    <DragAble id="item3" style={{margin : '2px'}}> <Item>{"Item 3"}</Item> </DragAble>
                    <DragAble id="item4" style={{margin : '2px'}}> <Item>{"Item 4"}</Item> </DragAble>
                    <DragAble id="item5" style={{margin : '2px'}}> <Item>{"Item 5"}</Item> </DragAble>
                    <DragAble id="item6" style={{margin : '2px'}}> <Item>{"Item 6"}</Item> </DragAble>
                    <DragAble id="item7" style={{margin : '2px'}}> <Item>{"Item 7"}</Item> </DragAble>
                    <DragAble id="item8" style={{margin : '2px'}}> <Item>{"Item 8"}</Item> </DragAble>
                </DropAble>
                
                
                <DropAble id="dr2" style={dropAbleStyle}>
                    
                </DropAble>
                
            </Wrapper>
        );
    }
}

export default DragAndDropTest;
