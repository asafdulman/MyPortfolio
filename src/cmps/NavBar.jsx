import React from 'react'

export function NavBar() {
    return (

        <div>
            <nav class="menu">
                <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
                <label class="menu-open-button" for="menu-open">
                    <span class="lines line-1"></span>
                    <span class="lines line-2"></span>
                    <span class="lines line-3"></span>
                </label>

                <a href="#contact" className="menu-item blue"> <i className="fas fa-envelope"></i> </a>
                <a href="#projects" className="menu-item red"> <i className="fas fa-code"></i> </a>
                <a href="#about" className="menu-item green"> <i className="fas fa-street-view"></i> </a>



            </nav>
        </div>
    )
}


