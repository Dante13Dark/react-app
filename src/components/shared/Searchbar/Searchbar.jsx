import styles from "./Searchbar.module.css";
import { Icon, ICON_MAP } from "../Icon/Icon";
import { Button, BUTTON_SIZE, BUTTON_STYLE } from "../Button/Button";
import { Input } from "../Input/Input";

const noop = () => {};
export const Searchbar = ({
  className,
  placeholder,
  value,
  onChange = noop,
}) => {
  const prefix = <Icon name={ICON_MAP.search} className={styles.icon} />;
  const postfix = (
    <>
      {value && (
        <Button
          size={BUTTON_SIZE.small}
          buttonStyle={BUTTON_STYLE.reverse}
          icon={ICON_MAP.xMedium}
          iconClassName={styles.button_icon}
        />
      )}
    </>
  );

  return (
    <Input
      prefix={prefix}
      className={className}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      postfix={postfix}
    />
  );
};
