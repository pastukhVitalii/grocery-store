import React from "react";
import {GroceryType} from "../../api/api";
import './GroceryList.scss';
import {Button} from "../button/Button";

type PropsType = {
  product: GroceryType
}

export const GroceryList = React.memo((props: PropsType) => {
  return (
    <div className='list'>
      <div className='subtitle'>
        {props.product.category}
      </div>
      <div className="title">
        {props.product.name}
      </div>
      <div className='footer'>
        <div>
          <span className='currencySymbol'>$</span>
          <span className="price">
            {props.product.price}
          </span>
        </div>
        <Button name={'buy'}/>
      </div>
    </div>
  )
})
