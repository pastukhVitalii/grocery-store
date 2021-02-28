import React, {ChangeEvent, useCallback, useState} from "react";
import './Input.scss';

type PropsType = {
  name: string
}

export const Input = React.memo((props: PropsType) => {

  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const onChange = useCallback((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setValue(value);
  }, [setValue])

  const required = () => {
    setError(value.trim() === ''
      ? 'This field in required'
      : '')
  };

  const minLength = (length: number) => {
    setError((value.length <= length)
      ? 'Should contain 12 characters'
      : '')
  }

  const validate = () => {
    switch (props.name) {
      case 'name':
        required();
        /*setError(value.length > 20
        ? 'Only letters allowed'
        : '')*/
        break;
      case 'number':
        required();
        minLength(12);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <input name={props.name} type={'text'} value={value} onChange={onChange} onFocus={() => setError('')}
             onBlur={validate} placeholder={props.name}/>
      <div>{error}</div>
    </div>
  )
})
