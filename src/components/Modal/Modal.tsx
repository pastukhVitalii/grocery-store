import React, {SyntheticEvent, useRef, useState} from 'react';
import './Modal.scss';
import {GroceryType} from "../../api/api";
import '../GroceryList/_cardStyle.scss';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import arrow from '../../img/arrow-right.svg';

type PropsType = {
  showModal: boolean
  setShowModal: (value: boolean) => void
  product: GroceryType
}

const Modal = React.memo((props: PropsType) => {

    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = (event: SyntheticEvent) => {
      if (modalRef.current === event.target) {
        props.setShowModal(false);
      }
    }

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [errorName, setErrorName] = useState<string | undefined>('');
    const [errorNumber, setErrorNumber] = useState<string | undefined>('');

    const required = (value: string, inputName: string) => {
      if (value.trim() === '') {
        return inputName === 'name' ? setErrorName('This field in required') : setErrorNumber('This field in required');
      } else return undefined
    };

    const minLength = (value: string, length: number, inputName: string) => {
      if (value.length <= length) {
        return inputName === 'name' ? setErrorName('Should contain 12 characters') : setErrorNumber('Should contain 12 characters');
      } else return undefined
    }

    const onlyLetters = (value: string, inputName: string) => {
      let reg = /^[a-zа-яё]+$/i;
      if (!reg.test(value)) {
        return inputName === 'name' ? setErrorName('Only letters allowed') : setErrorNumber('Only letters allowed');
      } else return undefined
    }

    const onlyNumbers = (value: string, inputName: string) => {
      let regNum = /^[0-9]*$/gm;
      if (!regNum.test(value)) {
        return inputName === 'name' ? setErrorName('Only numbers allowed') : setErrorNumber('Only numbers allowed');
      } else return undefined
    }

    const validate = (inputName: string, value: string) => {
      switch (inputName) {
        case 'name':
          onlyLetters(value, inputName);
          required(value, inputName);
          break;
        case 'number':
          minLength(value, 12, inputName);
          onlyNumbers(value, inputName);
          required(value, inputName);
          break;
        default:
          break;
      }
    }

    const sendData = () => {
      if (name && number) {
        console.log(name, number)
      } else {
        validate('name', name);
        validate('number', number);
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
            <Input inputName={'name'} value={name} validate={validate} setValue={setName} error={errorName}
                   setError={setErrorName}/>
            <Input inputName={'number'} value={number} setValue={setNumber} error={errorNumber} setError={setErrorNumber}
                   validate={validate}/>
          </div>
          <div className={'btn-order'}>
            <Button name={'order'} type={"primary"} size={"large"} onClick={sendData}/>
            <img src={arrow} alt="arrow"/>
          </div>
        </div>
      </div>
    );
  }
)
export default Modal;