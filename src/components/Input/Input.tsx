import React, {ChangeEvent, useCallback} from "react";
import './Input.scss';

type PropsType = {
  inputName: string
  value: string
  setValue: (value: string) => void
  error: string | undefined
  setError: (value: string | undefined) => void
  validate: (inputName: string, value: string) => void
}

export const Input = React.memo((props: PropsType) => {

  const onChange = useCallback((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.currentTarget.value;
    props.setValue(value);
  }, [props])

  const onValidate = useCallback(() => {
    props.validate(props.inputName, props.value)
  }, [props])

  return (
    <div>
      {props.error ? <div className={'errorIcon'}>X</div> : ''}
      <input name={props.inputName} type={'text'} value={props.value} onChange={onChange}
             onFocus={() => props.setError('')}
             onBlur={onValidate} placeholder={props.inputName} className={props.error ? 'error' : ''}/>
      <div className={'errorMessage'}>{props.error}</div>
    </div>
  )
})
