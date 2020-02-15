import React from 'react';

class DragAble extends React.Component{
    
    drag = (ev) =>{ 
        console.log("Drag Started....")   
        console.log(ev.target.id);
        ev.dataTransfer.setData("text", ev.target.id);
    }
    
    render(){
        return(
            <div id={this.props.id} draggable='true' onDragStart={this.drag}  style={this.props.style}>
                {this.props.children}                 
            </div>
        );
        
    }
}

export default DragAble;

