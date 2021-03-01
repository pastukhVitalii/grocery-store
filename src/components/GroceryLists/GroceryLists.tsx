import React from "react";
import {GroceryType} from "../../api/api";
import {GroceryList} from "../GroceryList/GroceryList";
import './GroceryLists.scss';
import {Button} from "../Button/Button";

type PropsType = {
  products: Array<GroceryType>
}

export const GroceryLists = React.memo((props: PropsType) => {

  return (
    <div>
      <div className='grocery-lists'>
        {props.products.map(p => {
          return <GroceryList key={p.name} product={p}/>
        })}
      </div>
      <div className='btn-cheap'>
        <Button name={'by cheapest'} onClick={() => alert('dd')} type={"primary"} size={"medium"}/>
      </div>
    </div>
  )
})
