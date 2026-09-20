import React from 'react'
import './RestaurentOnline.css'

function RestaurentOnline() {
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className='w-75'>
                <h4 className='fw-bold'>Restaurants with online food delivery in Kochi</h4>
                <div style={{ gap: "1rem" }} className='buttonsoffiltering d-flex flex-wrap'>
                    <button>filter <i className="fa-solid fa-gears"></i></button>
                    <button>Sort by <i className="fa-solid fa-angle-down"></i></button>
                    <button>Fast Delivery</button>
                    <button>New On Swiggy</button>
                    <button>Rate 4.0+</button>
                    <button>Pure Veg</button>
                    <button>Offers</button>
                    <button>Rs.300 - Rs.600</button>
                    <button>Less Than Rs.300</button>
                </div>

                <div id='Card-section'>
                    {/* Row 1 */}
                    <div className='d-flex justify-content-between mt-4'>
                        <div className='Online-card'>
                            <div style={{
                                backgroundImage: `url(https://swiggy.com)`
                            }} className='Online-Card-img '>
                                <div className='Online-color'><h4 className='fw-bolder'>40% OFF UPTO ₹80</h4></div>
                            </div>
                            <h5 className='mt-3'>The Good Bowl</h5>
                            <i style={{color:"#20963a"}} className="fa-solid fa-star"></i>4
                            <p style={{fontWeight:"300"}}>Biriyani, North Indian, Pastas, Punjabi<br />Chittethukara</p>
                        </div>

                        <div className='Online-card'>
                            <div style={{
                                backgroundImage: `url(https://swiggy.com)`
                            }} className='Online-Card-img '>
                                <div className='Online-color'><h4 className='fw-bolder'>60% OFF UPTO ₹120</h4></div>
                            </div>
                            <h5 className='mt-3'>Sweet Truth-Cake and...</h5>
                            <i style={{color:"#20963a"}} className="fa-solid fa-star"></i>3.9
                            <p style={{fontWeight:"300"}}>Snacks, Bakery, Dessert, Beverages<br />Chittethukara</p>
                        </div>

                        <div className='Online-card'>
                            <div style={{
                                backgroundImage: `url(https://swiggy.com)`
                            }} className='Online-Card-img '>
                                <div className='Online-color'><h4 className='fw-bolder'>25% OFF UPTO ₹125</h4></div>
                            </div>
                            <h5 className='mt-3'>Frozen Bottle - Milkshakes,...</h5>
                            <i style={{color:"#20963a"}} className="fa-solid fa-star"></i>4.1
                            <p style={{fontWeight:"300"}}>Deserts, Beverages, IceCream,...<br />Ernakulam</p>
                        </div>

                        <div className='Online-card'>
                            <div style={{
                                backgroundImage: `url(https://swiggy.com)`
                            }} className='Online-Card-img '>
                                <div className='Online-color'><h4 className='fw-bolder'>50% OFF UPTO ₹100</h4></div>
                            </div>
                            <h5 className='mt-3'>Faasos - Wrap & Rolls</h5>
                            <i style={{color:"#20963a"}} className="fa-solid fa-star"></i>3.7
                            <p style={{fontWeight:"300"}}>Kebabs, Fast Food, Snacks, North...<br />Chittethukara</p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className='d-flex justify-content-between mt-4'>
                        <div className='Online-card'>
                            <div style={{
                                backgroundImage: `url(https://swiggy.com)`
                            }} className='Online-Card-img '>
                                <div className='Online-color'><h4 className='fw-bolder'>50% OFF UPTO ₹100</h4></div>
                            </div>
                            <h5 className='mt-3'>Subway</h5>
                            <i style={{color:"#20963a"}} className="fa-solid fa-star"></i>3.9
                            <p style={{fontWeight:"300"}}>Healthy Food, Salad, Snacks,...<br />Kakkanad</p>
                        </div>

                        <div className='Online-card'>
                            <div style={{
                                backgroundImage: `url(https://swiggy.com)`
                            }} className='Online-Card-img '>
                                <div className='Online-color'></div>
                            </div>
                            <h5 className='mt-3'>The Burger Junction</h5>
                            <i style={{color:"#20963a"}} className="fa-solid fa-star"></i>4.5
                            <p style={{fontWeight:"300"}}>American, Beverages<br />Kakkanad</p>
                        </div>

                        <div className='Online-card'>
                            <div style={{
                                backgroundImage: `url(https://swiggy.com)`
                            }} className='Online-Card-img '>
                                <div className='Online-color'><h4 className='fw-bolder'>20% OFF UPTO ₹50</h4></div>
                            </div>
                            <h5 className='mt-3'>KFC</h5>
                            <i style={{color:"#20963a"}} className="fa-solid fa-star"></i>4.1
                            <p style={{fontWeight:"300"}}>American, Burgers, Biriyani, Snacks,...<br />Kakkanad</p>
                        </div>

                        <div className='Online-card'>
                            <div style={{
                                backgroundImage: `url(https://swiggy.com)`
                            }} className='Online-Card-img '>
                                <div className='Online-color'><h4 className='fw-bolder'>10% OFF UPTO ₹40</h4></div>
                            </div>
                            <h5 className='mt-3'>Amma's Pastries</h5>
                            <i style={{color:"#20963a"}} className="fa-solid fa-star"></i>3.9
                            <p style={{fontWeight:"300"}}>Desserts, Bakery<br />Kakkanad</p>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className='d-flex justify-content-between mt-4'>
                        <div className='Online-card'>
                            <div style={{
                                backgroundImage: `url(https://swiggy.com)`
                            }} className='Online-Card-img '>
                                <div className='Online-color'><h4 className='fw-bolder'>20% OFF UPTO ₹50</h4></div>
                            </div>
                            <h5 className='mt-3'>Thaal Kitchen</h5>
                            <i style={{color:"#20963a"}} className="fa-solid fa-star"></i>3.9
                            <p style={{fontWeight:"300"}}>Kerala, Arabian<br />Kakkanad</p>
                        </div>

                        <div className='Online-card'>
                            <div style={{
                                backgroundImage: `url(https://swiggy.com)`
                            }} className='Online-Card-img '>
                                <div className='Online-color'><h4 className='fw-bolder'>30% OFF UPTO ₹75</h4></div>
                            </div>
                            <h5 className='mt-3'>Burger Spot</h5>
                            <i style={{color:"#20963a"}} className="fa-solid fa-star"></i>4.5
                            <p style={{fontWeight:"300"}}><br />Kakkanad</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurentOnline
