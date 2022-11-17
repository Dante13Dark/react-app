import styles from "./Searchbar.module.css";
import { Icon, ICON_MAP } from "../Icon/Icon";
import { Input } from "../Input/Input";

const noop = () => {};
export const Searchbar = ({
  className,
  placeholder,
  value,
  onChange = noop,
  onReset = noop,
}) => {
  const prefix = <Icon name={ICON_MAP.search} className={styles.icon} />;

  return (
    <Input
      prefix={prefix}
      className={className}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onReset={onReset}
    />
  );
};
