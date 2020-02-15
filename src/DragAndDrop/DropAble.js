import React from 'react';


class DropAble extends React.Component{
    
    drop = (ev) =>{          
          ev.preventDefault();
          var data = ev.dataTransfer.getData("text");
          console.log(data);
          ev.target.appendChild(document.getElementById(data));
    }
    
    allowDrop = (e) => {        
        e.preventDefault();        
    }
    
    render(){
        return(
            <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>
                {this.props.children}
            </div>
        );
        
    }
}


export default DropAble;

