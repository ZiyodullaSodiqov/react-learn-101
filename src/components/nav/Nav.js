import React from 'react'
import Dashboard  from '../../assets/images/dashboard.svg'
import StockIn  from '../../assets/images/stockIn.svg'
import StockOut   from '../../assets/images/stockOut.svg'
import Order from '../../assets/images/order.svg'
import Food from '../../assets/images/foodMenu.svg'

    function Nav() {
        return(
            <>
                <div className='site-hero-nav'>
                    <div className='box-1'>
                        <img src={Dashboard} alt='image icon'/>
                        <p>
                            Dashboard
                        </p>
                    </div>
                    <br />
                    <div className='box-1'>
                        <img src={StockIn} alt='image icon'/>
                        <p>
                            Stock In
                        </p>
                    </div>
                    <br />
                    <div className='box-1'>
                        <img src={StockOut} alt='image icon'/>
                        <p>
                            Stock Out 
                        </p>
                    </div>
                    <br />
                    <div className='box-1'>
                        <img src={Order} alt='image icon'/>
                        <p>
                            Order Request
                        </p>
                    </div>
                    <br />
                    <div className='box-1'>
                        <img src={Food} alt='image icon'/>
                        <p>
                            Food menu
                        </p>
                    </div>
                    <br />
                </div>
            </>
        )
    }

    export default Nav;