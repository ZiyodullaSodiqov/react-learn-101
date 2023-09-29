import React from 'react'
import Nav from '../nav/Nav';
import Foods from '../foods/Food';

    function Items() {
        return(
            <>
                <Nav />
                <div className='site-hero-add_items'>
                    <div className='text'>
                        <h1>
                            Add Food Items
                        </h1>
                    </div>
                    <div className='button-groups'>
                        <button
                            className='btn-add_1'>
                            Add Category
                        </button>
                        <button
                            className='btn-add_2'>
                            Add Category
                        </button>
                    </div>

                    <div className='site-nav_category'>
                        <div class="span-div">
                            <span style={{
                                background:"#FFAE35",
                                borderRadius:"5px",
                                color:"#fff"
                            }}>
                                All
                            </span>
                            <span>
                                Ice cream
                            </span>
                            <span>
                                Ice cream test
                            </span>
                        </div>
                    </div>

                    <div>
                        <Foods />
                    </div>
                </div>
            </>
        )
    }

    export default Items;