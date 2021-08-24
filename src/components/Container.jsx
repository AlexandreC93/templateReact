import React from 'react'

class Container extends React.Component {
    state = {  }
    render() { 
        return ( 

            <>
            <div id={this.props.name}>
                <h1 className={`title-cont ${this.props.class}`}>{this.props.title}</h1>
                {this.props.children}
            </div>
            </>

         );
    }
}
 
export default Container;