import styles from "./Button.module.css";
import cn from "classnames";
import { Icon } from "../Icon/Icon";

export const BUTTON_SIZE = {
  medium: styles.medium,
  small: styles.small,
};

export const BUTTON_STYLE = {
  primary: styles.primary,
  secondary: styles.secondary,
  reverse: styles.reverse,
};

export const Button = ({
  className,
  size = BUTTON_SIZE.medium,
  buttonStyle = BUTTON_STYLE.primary,
  icon,
  iconClassName,
  children,
  disabled,
  onClick,
  ...props
}) => {
  const buttonClasses = cn(styles._, className, size, buttonStyle);

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && <Icon name={icon} className={cn(styles.icon, iconClassName)} />}
      {children && <div className={styles.text}>{children}</div>}
    </button>
  );
};
