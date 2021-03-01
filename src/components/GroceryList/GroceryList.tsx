import React, {useState} from "react";
import {GroceryType} from "../../api/api";
import './GroceryList.scss';
import {Button} from "../Button/Button";
import Modal from "../Modal/Modal";
import cart from '../../img/Group 11.svg';

type PropsType = {
  product: GroceryType
}

export const GroceryList = React.memo((props: PropsType) => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div>
      <div className='list'>
        <div className='category'>
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
          {showModal
            ? <img src={cart} alt="cart"/>
            : <Button name={'buy'} type={"secondary"} size={"small"} onClick={openModal}/>}
        </div>
      </div>
      {showModal ? <Modal showModal={showModal} setShowModal={setShowModal} product={props.product}/> : null}
    </div>
  )
})
