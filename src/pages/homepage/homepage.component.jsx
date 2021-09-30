import React from 'react'
import './homepage.style.scss'
import Directory from '../../components/directory/directory.components'
const Homepage = ({ history })=>{
    return(
    <div className="homepage">
        <Directory history={history}></Directory>
    </div>
    );
}
export default Homepage