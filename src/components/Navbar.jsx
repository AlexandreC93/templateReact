import React from 'react'
import Button from './Button'

class Navbar extends React.Component {
    state = {  }
    render() { 
        return ( 

            <>
            <h1 className="title">{this.props.title}</h1>

<div className="navbar">
    <ul className="list">
        <Button text="FEATURES" ref="#"/>
        <Button text="ABOUT" ref="#"/>
        <Button text="SERVICES" ref="#"/>
        <Button text="GALLERY" ref="#"/>
        <Button text="TESTIMONIALS" ref="#"/>
        <Button text="TEAM" ref="#"/>
        <Button text="CONTACT" ref="#"/>
        
    </ul>
</div>
            </>

         );
    }
}
 
export default Navbar;