import React from 'react'
import './homepage.style.scss'
import Directory from '../../components/directory/directory.components'
import { HomePageContainer } from './homepage.styles'
const Homepage = ({ history })=>{
    return(
    <HomePageContainer>
        <Directory history={history}></Directory>
    </HomePageContainer>
    );
}
export default Homepage