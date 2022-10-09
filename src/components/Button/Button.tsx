import React, { FC } from 'react';
import joinClasses from '../../utils/joinClasses';
import styles from './Button.module.css';

interface Props {
  children: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
  isAriaDisabled?: boolean
  className?: string
}

const Button: FC<Props> = ({
  children,
  onClick,
  variant = '',
  isAriaDisabled = false,
  className,
}) => {
  const classes = [styles.btn, styles[`${variant}Btn`], className].filter((x) => x) as string[];
  return (
    <button
      onClick={onClick}
      className={joinClasses(classes)}
      aria-disabled={isAriaDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
