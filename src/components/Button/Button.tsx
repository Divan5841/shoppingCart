import React, { FC, ReactNode } from 'react'

import styles from './Button.module.scss'

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string
  icon?: ReactNode
  onClick?: () => void
}

export const Button: FC<IButtonProps> = ({
  text,
  icon,
  onClick,
  children,
  ...otherProps
}) => (
  <button className={styles.button} onClick={onClick} {...otherProps}>
    {icon && <div className={styles.icon}>{icon}</div>}
    {children || (text && <span>{text}</span>)}
  </button>
)
