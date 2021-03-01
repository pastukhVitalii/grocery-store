import React from 'react';
import './Button.scss';

type OwnPropTypes = {
  name: string
  onClick: () => void
  type: 'primary' | 'secondary'
  size: 'large' | 'medium' | 'small'
}

export const Button = React.memo((props: OwnPropTypes) => {

  return (
    <button className={`button ${props.type} ${props.size}`} onClick={props.onClick}>
      {props.name}
    </button>
  )
})
