import React from 'react'

class Box extends React.Component {
    
    render() { 
        return ( 

            <div id={this.props.id} >
                <i className={this.props.icon}></i>
                <h2 className="title">{this.props.title}</h2>
                <p className="font">{this.props.text}</p>
            </div>

         );
    }
}
 
export default Box;