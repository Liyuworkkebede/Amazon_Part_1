import React from 'react'
import numeral from "numeral"
const CurencyFormater = ({amount})=>{
    const currencyFormat = numeral(amount).format("$0,0.00");
    return <div>{currencyFormat}</div>;
}
export default CurencyFormater;