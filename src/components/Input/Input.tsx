import React, {ChangeEvent, useCallback, useState} from "react";
import './Input.scss';

type PropsType = {
  name: string
  required?: boolean
  minLength?: boolean
  onlyNumbers?: boolean
  onlyLetters?: boolean
}

export const Input = React.memo((props: PropsType) => {

  const [value, setValue] = useState('');
  const [error, setError] = useState<string | undefined>('');

  const onChange = useCallback((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setValue(value);
  }, [setValue])

  const required = () => {
    if (value.trim() === '') {
      return setError('This field in required')
    } else return undefined
  };

  const minLength = (length: number) => {
    if (value.length <= length) {
      return setError('Should contain 12 characters')
    } else return undefined
  }

  const onlyLetters = () => {
    let reg = /^[a-zа-яё]+$/i;
    if (!reg.test(value)) {
      setError('Only letters allowed')
    } else setError('')
  }

  const onlyNumbers = () => {
    let reg = /^[0-9]*$/gm;
    if (!reg.test(value)) {
      return setError('Only numbers allowed');
    } else return undefined
  }

  const validate = () => {
    switch (props.minLength) {
      case props.minLength:
        minLength(12);
        break;
      default:
        break;
    }
    switch (props.onlyNumbers) {
      case props.onlyNumbers:
        onlyNumbers();
        break;
      default:
        break;
    }
    switch (props.onlyLetters) {
      case props.onlyLetters:
        onlyLetters();
        break;
      default:
        break;
    }
    switch (props.required) {
      case props.required:
        required();
        break;
      default:
        break;
    }
  }

  return (
    <div>
      {error ? <div className={'errorIcon'}>X</div> : ''}
      <input name={props.name} type={'text'} value={value} onChange={onChange} onFocus={() => setError('')}
             onBlur={validate} placeholder={props.name} className={error ? 'error' : ''}/>
      <div className={'errorMessage'}>{error}</div>
    </div>
  )
})
