import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasetIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider'
function Header() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo"/>
            </Link>
            <div className="header__search">
                {/* Search Box */}
                <input className="header__searchInput" type="text" />
                {/* Search Logo */}
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to="/login">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello Guest
                        </span>
                        <span className="header__optionLineTwo">
                            Sign in
                        </span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasetIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?basket.length:'0'}
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header