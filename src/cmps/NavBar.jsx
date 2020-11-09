import React from 'react'
import {  scroller } from 'react-scroll'


export function NavBar() {

    // function goTo(path) {
    //     if (path === 'contact') history.push('/contact')
    //     if (path === 'about') history.push('/about')
    //     if (path === 'projects') history.push('/projects')

    // }

    function scrollTo(element) {
        scroller.scrollTo(element, {
          duration: 700,
          delay: 50,
          smooth: true
        })
      }

    return (

        <div>
            <nav class="menu">
                <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
                <label class="menu-open-button" for="menu-open">
                    <span class="lines line-1"></span>
                    <span class="lines line-2"></span>
                    <span class="lines line-3"></span>
                </label>

                {/* <a onClick={()=>{goTo('contact')}} className="menu-item blue"> <i className="fas fa-envelope"></i> </a> */}
                <a onClick={()=>{scrollTo('contact')}} className="menu-item blue"> <i className="fas fa-envelope"></i> </a>
                {/* <a onClick={()=>{goTo('projects')}} className="menu-item red"> <i className="fas fa-code"></i> </a> */}
                <a onClick={()=>{scrollTo('projects')}} className="menu-item red"> <i className="fas fa-code"></i> </a>
                {/* <a onClick={()=>{goTo('about')}} className="menu-item green"> <i className="fas fa-street-view"></i> </a> */}
                <a onClick={()=>{scrollTo('about')}} className="menu-item green"> <i className="fas fa-street-view"></i> </a>



            </nav>
        </div>
    )
}


