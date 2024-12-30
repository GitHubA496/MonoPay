import "./Footer.css"
import Main from "/main logo.png"
import X from "/twitter.png"
import instagram from '/instagram.png'
import playstore from '/google_play.png'
import appstore from '/app_store.png'
import credit from '/credits.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">
                <div className="footer-images">
                    <img src={Main} alt="logo" />
                    <div className="insta">
                    <img src={X} alt="logo" />
                    <img src={instagram} alt="logo" />
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. </p>
            </div>
            <div className="buttons">
                <div className="download-btns">
                    <div className="store">
                        <img src={playstore} alt="logo" />
                        <p>Google Play</p>
                    </div>
                    <div className="store">
                        <img src={appstore} alt="logo" />
                        <p>App Store</p>
                    </div>
                </div>
                <p style={{color: "#E5E5E5"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. </p>
            </div>
            <div className="menu">
                <div className="menu-lists pad">
                        <div className="menu-list">
                        <ul>
                        <p style={{color: "#E5E5E5"}}>Company</p>
                            <li>Monopay Savings</li>
                            <li>Secure Payment</li>
                            <li>Vision and Mission</li>
                            <li>Cashless Makes Perfect</li>
                        </ul>
                        </div>
                        <div className="menu-list">
                        <ul>
                            <p style={{color: "#E5E5E5"}}>Blog</p>
                            <li>Monopay Savings</li>
                            <li>Cashless Makes Perfect</li>
                            <li>Monopay No Interest</li>
                            <li>Monopay Digital Wallet</li>
                            <li>About Monobank</li>
                        </ul>
                        </div>
                        <div className="menu-list">
                        <ul>
                        <p style={{color: "#E5E5E5"}}>Features</p>
                            <li>Secure Payment</li>
                            <li>Daily Cashback</li>
                            <li>Auto Cashflow</li>
                            <li>Scan and Pay</li>
                            <li>Monocard</li>
                            <li>Wallet</li>
                        </ul>
                        </div>
                </div>
                <div className="menu-credit">         
                    <div className="menu-lists">
                            <div className="menu-list">
                            <ul>
                            <p style={{color: "#E5E5E5"}}>Contact</p>
                                <li>Contact Us</li>
                                <li>Contact Support</li>
                            </ul>
                            </div>
                            <div className="menu-list">
                            <ul>
                            <p style={{color: "#E5E5E5"}}>Legal</p>
                                <li>Terms</li>
                                <li>Privacy</li>
                            </ul>
                            </div>
                    </div>
                    <div className="credits">
                        <img src={credit} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer