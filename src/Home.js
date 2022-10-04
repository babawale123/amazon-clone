import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
               <img 
               className="home__image"
               src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />  
           </div>

            <div className="home__row">
                <Product
                id ="1"
                title="The Lean Start Up:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex "
                price={29.99} 
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
                rating ={2}
                />
                <Product
                    id ="2"
                    title="Plasma Television:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                    price={99.99} 
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                    rating ={3}
                />
            
            </div>
            <div className="home__row">
                    <Product 
                    id ="3"
                    title="Labtop:Lorem ipsum dolor sit amet, consectetur adipisicing elit, "
                    price={299.99} 
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                    rating ={4}
                    />

                    <Product  
                    id ="4" 
                    title="Apple product:Lorem ipsum dolor sit amet, consectetur  "
                    price={499.99} 
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                    rating ={3}
                    />

                    <Product  
                    id ="5"
                    title="Hp Laptop:Lorem ipsum dolor sit amet, consectetur adipisicing"
                    price={199.99} 
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
                    rating ={2}
                    />

            </div>

            <div className="home__row">
                <Product   
                id ="6"
                title="Amazon great Product:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
                price={9.99} 
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                rating={6}
                />
            </div>
        </div>
    
    )
    
}

export default Home
