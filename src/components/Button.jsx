import React from 'react'

class Button extends React.Component {
    state = {  }
    render() { 
        return ( 

            <>
            <a href={this.props.ref}>
            <li className="btn-head">{this.props.text}</li>
        </a>
            </>

         );
    }
}
 
export default Button;