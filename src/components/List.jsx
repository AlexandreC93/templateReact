import React from 'react'


class List extends React.Component {
    state = {  }
    render() { 
        return ( 

            <>

            <ul className="fa-ul">
                <li className="btn-list"><span className="fa-li"><i className="fas fa-check-square"></i></span>{this.props.text1}</li>
                <li className="btn-list"><span className="fa-li"><i className="fas fa-check-square"></i></span>{this.props.text2}</li>
                <li className="btn-list"><span className="fa-li"><i className="fas fa-check-square"></i></span>{this.props.text3}</li>
                <li className="btn-list"><span className="fa-li"><i className="fas fa-check-square"></i></span>{this.props.text4}</li>
            </ul>

            </>

         );
    }
}
 
export default List;