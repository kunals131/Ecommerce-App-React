import React, {Profiler} from 'react'
import './homepage.style.scss'
import Directory from '../../components/directory/directory.components'
import { HomePageContainer } from './homepage.styles'
const Homepage = ({ history })=>{
    return(
    <HomePageContainer>
        <Profiler id="directory" onRender={(id,phase,actualDuration)=>{
            console.log({
                id,phase,actualDuration
            })
        }}>
        <Directory history={history}></Directory>
        </Profiler>
    </HomePageContainer>
    );
}
export default Homepage