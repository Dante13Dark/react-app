import styles from "./DropdownListItem.module.css";
import { Checkbox } from "../Checkbox/Checkbox";
import { Radio } from "../Radio/Radio";

export const ITEM_TYPE = {
  checkbox: Checkbox,
  radio: Radio,
};

export const DropdownListItem = ({
  type = ITEM_TYPE.checkbox,
  text,
  isTextOnly,
  onClick,
  ...props
}) => {
  const Component = type;
  return (
    <li className={styles.item}>
      <Component
        className={styles.control}
        text={text}
        isTextOnly={isTextOnly}
        iconClassName={styles.icon}
        onClick={onClick}
        {...props}
      />
    </li>
  );
};
