import React, {Component} from 'react'
import './Layout.scss'
function Layout(props) {
    
        return(
            <div className='Layout'>



                <main>
                    {props.children}
                </main>
            </div>
        )
    
}

export default Layout