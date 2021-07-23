import React from 'react'
import './Home.css'
import Product from'./Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/EOSS_July21/Mob_PC/Without_BankStripe/1500X600._CB663794648_.jpg" alt="banner" />
            
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="New Apple iPhone 12 Pro Max (256GB) - Pacific Blue
                        4.6 "
                        price={132200}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY218_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="OnePlus 9 Pro 5G (Pine Green, 12GB RAM, 256GB Storage)"
                        price={69999}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/612ytK4luvL._AC_UY218_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="New Apple Watch Series 6 (GPS, 44mm) - Silver Aluminium Case with White Sport Band"
                        price={43900}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/7158cliU8vL._AC_UY218_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>
                
                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
