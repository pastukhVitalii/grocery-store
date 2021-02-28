import React, {useState} from "react";
import {GroceryType} from "../../api/api";
import './GroceryList.scss';
import {Button} from "../button/Button";
import Modal from "../Modal/Modal";

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
          <Button name={'buy'} onClick={openModal}/>
        </div>
      </div>
      {showModal ? <Modal showModal={showModal} setShowModal={setShowModal} product={props.product}/> : null}
    </div>
  )
})
