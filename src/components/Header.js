import React from 'react';

    const Header =(props)=>{
        return(
            <header className="top">
                <img  className="imgheader" src="http://www.destinationdresden.com/admin/data/img/uploads/online-shop-logo-template-ai-eps-10.jpg" alt=""/>
                
            </header>
        )

    }

Header.PropTypes={
    tagline:React.PropTypes.string.isRequired
}
export default Header;
