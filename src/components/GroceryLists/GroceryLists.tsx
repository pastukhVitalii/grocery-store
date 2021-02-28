import React from "react";
import {GroceryType} from "../../api/api";
import {GroceryList} from "../GroceryList/GroceryList";
import './GroceryLists.scss';

type PropsType = {
  products: Array<GroceryType>
}

export const GroceryLists = React.memo((props: PropsType) => {
  return (
    <div className='grocery-lists'>
      {props.products.map(p => {
        return <GroceryList key={p.name} product={p}/>
      })}
    </div>
  )
})
