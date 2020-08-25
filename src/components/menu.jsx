import React from 'react'

function Menu() {
    return (
            <div className="col-md-12 menuPagestyle">
                <div>
                    <img alt="" src={require('../assets/download.png')} width={200}/>
                </div>
                <div style={{marginTop:40,color:'#f15953'}}>
                    <h1 className="imgTextStyle">Hi, I'm Jaac!</h1>
                    <h2 className="imgTextStyle">Your E-Waiter</h2>
                </div>
                <div className='divBuuton'>
                    <button className='btnStyle'>
                    <img alt="" src={require('../assets/navigation_qr_icon_active.svg')} width={30} style={{marginRight:30}}/>
                        Scan QR Code
                    </button>
                    <p className='textBelowButton'>Click the Scan QR Code button to turn on your phone’s camera and scan the QR code on your table!</p>
                </div>
                <div className="textdiv">
                    <p>
                    I'll show you this restaurant's menu and take your orders. With me, you can call a waiter and ask for the bill with one click.
                    </p>
                </div>
            </div>
        
    )
}

export default Menu
