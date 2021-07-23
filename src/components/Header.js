import React from 'react'
import logo from '../images/logo.png';

const Header = () => {
    return(
        <>
<header className="header">

<div>
    <img src={logo}>
    </img>
</div>

<nav>
    <ul>
        <li><button> What is that?</button></li>
        <li><button>Artists</button></li>
        <li><button>Live Code</button></li>
        <li><button>About</button></li>
    </ul>
</nav>

<div className="menu-btn">
        <div className="bar bar-1"></div>
        <div className="bar bar-2"></div>
        <div className="bar bar-3"></div>
</div>
</header>
        </>
    )
}

export default Header;
