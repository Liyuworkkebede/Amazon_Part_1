import React, { useContext } from 'react'
import classes from "./Header.module.css"
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../Utility/FireBase';
// console.log(basket);

function Header() {
  const [{user,basket}, dispatch]=useContext(DataContext)
  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount + amount
  },0)
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon-logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* {search} */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={38} />
          </div>
          {/* {right-side -link} */}

          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png?20151118161041" />
              <select name="" id="">
                <option value="" className={classes.ad}>
                  EN
                </option>
              </select>
            </Link>

            {/* {Three component} */}
            <Link to="/auth">
              <div>
                {user ? (
                  <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ):(
                  <>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                  </>
                
              )}

             
              </div>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span> & Orders</span>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header