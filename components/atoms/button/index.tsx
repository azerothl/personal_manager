import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
    /**
     * Is the button disabled ?
     */
    disabled?: boolean;
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * 
     */
    rounded?: 'none' | 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;

    style?: string[];
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  disabled = false,
  primary = false,
  backgroundColor,
  size = 'medium',
  rounded = 'none',
  label,
  style=[],
  ...props
}: ButtonProps) => {
  const mode = disabled ? styles['button--disabled'] : primary ? styles['button--primary'] : styles['button--secondary'];
  return (
    <button
      type="button"
      className={[styles['button'], styles[`button--${size}`], styles[`button--rounded-${rounded}`], style.length>0?style.join(', '):'', mode].join(' ')}
      style={{ backgroundColor }}
      disabled={!!disabled}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;