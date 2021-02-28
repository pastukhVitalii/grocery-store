import React from 'react';
import './Button.scss';

type OwnPropTypes = {
  name: string
  onClick: () => void
}
export const Button = React.memo((props: OwnPropTypes) => {

  return (
    <button className={`button`} onClick={props.onClick}>
      {props.name}
    </button>
  )
})
