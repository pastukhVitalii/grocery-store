import React, {SyntheticEvent, useRef} from 'react';
import './Modal.scss';
import {GroceryType} from "../../api/api";

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
        </div>
        <button onClick={() => props.setShowModal(false)}>close</button>
      </div>
    </div>
  );
};

export default Modal;