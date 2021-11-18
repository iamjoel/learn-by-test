import React, { FC } from 'react'

export interface IBtnProps {
  id?: string
  type?: 'primary' | 'danger',
  onClick?: () => void
}
const Btn: FC<IBtnProps> = ({
  id = '',
  type = 'primary',
  children,
  onClick
}) => {
    return (
      <div
        id={id}
        className="btn"
        style={
          {color: type === 'primary' ? 'blue' : 'red'}
        }
        onClick={onClick || (() => {})}
      >
        {children}
      </div>
    );
}

export default Btn
