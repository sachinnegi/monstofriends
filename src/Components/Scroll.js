import React from 'react'
const Scroll = (props) =>{
    
    return(
        <div style ={{overflowY: 'scroll', border:'5px black solid', height:'529px'}} >
            {props.children}
        </div>
    )
}
export default Scroll