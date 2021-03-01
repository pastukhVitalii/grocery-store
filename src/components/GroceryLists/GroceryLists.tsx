import React, {useState} from "react";
import {GroceryType} from "../../api/api";
import {GroceryList} from "../GroceryList/GroceryList";
import './GroceryLists.scss';
import {Button} from "../Button/Button";
import Modal from "../Modal/Modal";

type PropsType = {
  products: Array<GroceryType>
}

export const GroceryLists = React.memo((props: PropsType) => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  let arrPrice = props.products.map(p => p.price);
  let minPrice = Math.min(...arrPrice);

  const [cheapestProduct] = props.products.filter(p => p.price === minPrice);

  return (
    <div>
      <div className='grocery-lists'>
        {props.products.map(p => {
          return <GroceryList key={p.name} product={p}/>
        })}
      </div>
      {showModal ? <Modal showModal={showModal} setShowModal={setShowModal} product={cheapestProduct}/> : null}
      <div className='btn-cheap'>
        <Button name={'by cheapest'} onClick={openModal} type={"primary"} size={"medium"}/>
      </div>
    </div>
  )
})
