import React from 'react'
import {categoryInfos} from "./catagoryFullInfos"
import CatagoryCard from"./CatagoryCard"
import classes from "./catagory.module.css"

function Catagory() {
  return (
    <section className={classes.container}>
        {
            categoryInfos.map((infos)=>(
               <CatagoryCard data = {infos}/> 
            ))
        }
    </section>
  )
}

export default Catagory