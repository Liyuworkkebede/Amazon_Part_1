import React from 'react'
import classes from "./Header.module.css"
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
function Header() {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon-logo"
              />
            </a>
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
            <BsSearch size={25} />
          </div>
          {/* {right-side -link} */}

          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png?20151118161041" />
              <select name="" id="">
                <option value="" className={classes.ad}>
                  EN
                </option>
              </select>
            </a>

            {/* {Three component} */}
            <a href="">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>
            <a href="/orders">
              <p>returns</p>
              <span> & Orders</span>
            </a>

            <a href="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header