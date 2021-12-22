import React from 'react'
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'
import { connect } from 'react-redux';
const Directory= ({sections})=> {

        return(
            <div className="directory-menu">
                {
                    sections.map((section)=>(
                        <MenuItem key = {section.id} title= {section.title} img={section.img} size={section.size} linkUrl = {section.linkUrl}></MenuItem>
                    ))
                }
            </div>
        )
    
}

const mapStateToProps = (state)=>{
    return {
    sections : state.directory.sections
    }

}

export default connect(mapStateToProps)(Directory);