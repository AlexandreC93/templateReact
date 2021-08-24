import React from 'react'

class Header extends React.Component {
    state = {  }
    render() { 
        return ( 

            <div id="header">
            
            <h1 className="title">WE ARE <br /> LANDING PAGE</h1>
            <p className="font">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nostrum quibusdam necessitatibus <br /> aperiam quisquam praesentium similique reiciendis. Beatae provident vero harum ducimus? <br /> Laudantium natus reprehenderit iste sapiente delectus quasi ut?</p>
            
            <button>LEARN MORE</button>
            </div>

         );
    }
}
 
export default Header;