import styles from "./Button.module.css";
import cn from "classnames";
import { Icon, ICON_MAP } from "../Icon/Icon";

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
  style = BUTTON_STYLE.primary,
  icon,
  iconClassName,
  title,
  disabled,
  onClick,
}) => {
  const buttonClasses = cn(styles._, className, size, style);

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {icon && <Icon name={icon} className={cn(styles.icon, iconClassName)} />}
      {title && <div className={styles.text}>{title}</div>}
    </button>
  );
};

export const Buttons = () => {
  return (
    <>
      <div className={cn(styles.buttons, "dashed-wrapper")}>
        <div className={styles.buttons__section}>
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.medium}
            style={BUTTON_STYLE.primary}
            title="Text here"
          />
          <Button
            size={BUTTON_SIZE.medium}
            style={BUTTON_STYLE.primary}
            title="Text here"
          />
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.medium}
            style={BUTTON_STYLE.primary}
          />
        </div>

        <div className={styles.buttons__section}>
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.medium}
            style={BUTTON_STYLE.reverse}
            title="Text here"
          />
          <Button
            size={BUTTON_SIZE.medium}
            style={BUTTON_STYLE.reverse}
            title="Text here"
          />
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.medium}
            style={BUTTON_STYLE.reverse}
          />
        </div>

        <div className={styles.buttons__section}>
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.medium}
            style={BUTTON_STYLE.secondary}
            title="Text here"
          />
          <Button
            size={BUTTON_SIZE.medium}
            style={BUTTON_STYLE.secondary}
            title="Text here"
          />
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.medium}
            style={BUTTON_STYLE.secondary}
          />
        </div>

        <div className={styles.buttons__section}>
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.small}
            style={BUTTON_STYLE.primary}
            title="Text here"
          />
          <Button
            size={BUTTON_SIZE.small}
            style={BUTTON_STYLE.primary}
            title="Text here"
          />
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.small}
            style={BUTTON_STYLE.primary}
          />
        </div>

        <div className={styles.buttons__section}>
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.small}
            style={BUTTON_STYLE.reverse}
            title="Text here"
          />
          <Button
            size={BUTTON_SIZE.small}
            style={BUTTON_STYLE.reverse}
            title="Text here"
          />
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.small}
            style={BUTTON_STYLE.reverse}
          />
        </div>
      </div>
    </>
  );
};
