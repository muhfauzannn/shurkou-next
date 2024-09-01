'use client'
import React from "react";

const Hamburger = ()=>{
    const [active, setActive] = React.useState(false);
    function handleClick() {
        setActive(!active)
        const navbar = document.getElementById('Navbar');
        if (active) {
            navbar?.classList.add('translate-x-full');
        } else {
            navbar?.classList.remove('translate-x-full');
        }
    }

    return(
        <div id="menuToggle" onClick={handleClick}>
                <input type="checkbox" />
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
            </div>
    )
};

export default Hamburger;