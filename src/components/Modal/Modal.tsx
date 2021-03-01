import React, {SyntheticEvent, useRef} from 'react';
import './Modal.scss';
import {GroceryType} from "../../api/api";
import '../GroceryList/_cardStyle.scss';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";

type PropsType = {
  showModal: boolean
  setShowModal: (value: boolean) => void
  product: GroceryType
}

const Modal = (props: PropsType) => {

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (event: SyntheticEvent) => {
    if (modalRef.current === event.target) {
      props.setShowModal(false);
    }
  }

  return (
    <div className={`modal showModal-${props.showModal}`} ref={modalRef} onClick={closeModal}>
      <div className={'modal-content'}>
        <button className={'btn-cancel'} onClick={() => props.setShowModal(false)}>X</button>
        <div className='category'>
          {props.product.category}
        </div>
        <div className="title">
          {props.product.name}
        </div>
        <div>
          <span className='currencySymbol'>$</span>
          <span className="price">
            {props.product.price}
          </span>
        </div>
        <div className={'form'}>
          <Input name={'name'} required onlyLetters/>
          <Input name={'number'} required minLength onlyNumbers/>
        </div>
        <div className={'btn-order'}>
          <Button name={'order'} type={"primary"} size={"large"} onClick={() => alert('send')}/>
        </div>
      </div>
    </div>
  );
};

export default Modal;