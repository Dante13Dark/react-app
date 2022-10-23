import styles from "./Button.module.css";
import cn from "classnames";
import { Icon, ICON_MAP } from "../Icon/Icon";

export const BUTTON_SIZE = {
  medium: "medium",
  small: "small",
};

export const BUTTON_STYLE = {
  primary: "primary",
  secondary: "secondary",
  reverse: "reverse",
};

export const Button = ({
  className,
  size = BUTTON_SIZE.medium,
  style = BUTTON_STYLE.primary,
  icon,
  iconClassName,
  title,
  disabled,
}) => {
  const buttonClasses = cn(styles._, {
    [styles.small]: size === BUTTON_SIZE.small,
    [styles.medium]: size === BUTTON_SIZE.medium,
    [styles.primary]: style === BUTTON_STYLE.primary,
    [styles.secondary]: style === BUTTON_STYLE.secondary,
    [styles.reverse]: style === BUTTON_STYLE.reverse,
    [className]: !!className,
  });

  return (
    <button className={buttonClasses} disabled={disabled}>
      {icon && (
        <Icon
          name={icon}
          className={cn(styles.icon, { [iconClassName]: !!iconClassName })}
        />
      )}
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
