import React from 'react'
import {Link} from 'react-router-dom'

import './AddictionList.css'

class AddictionList extends React.Component {

    clearStorage = e => {
        localStorage.clear()
        window.location.reload();
    }

    deleteItem = id => {
        let addictions = JSON.parse(localStorage.getItem('addictions'))
        addictions = addictions.filter(el => {
            return el.id === !id
        })
        console.log(addictions)
        localStorage.setItem('addictions', JSON.stringify(addictions))
        //window.location.reload();
    }

    render() {
        const addictions = JSON.parse(localStorage.getItem('addictions'))
        return(
            <div className="addiction-item-list">
                <div className="addiction-list">
                    {addictions !== null && addictions.map(el => {
                        return(
                            <div className="addiction-grids">

                                <Link to={{
                                    pathname:'/addiction',
                                    state: {
                                        values: {...el}
                                    }
                                }} style ={{textDecoration:'none'}}>
                                    <div className="addiction-grid">
                                        <h1>{el.addiction === "Other" ? el.otherAddiction : el.addiction}</h1>
                                    </div>
                                </Link>
                                <button className="delete=item" onClick={this.deleteItem}>-</button>

                            </div>
                        )
                    })}
                </div>  
                <div className="buttons">
                    <Link to="/new-addiction">
                        <button>+</button>
                    </Link>
                    <button onClick={this.clearStorage}>CLEAR ALL</button>
                </div>              
            </div>
        )
    }
}


export default AddictionList