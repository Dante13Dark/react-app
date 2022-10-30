import cn from "classnames";
import styles from "./UIKit.module.css";
import dropdownStyles from "../../shared/Dropdown/Dropdown.module.css";
import { Checkbox } from "../../shared/Checkbox/Checkbox";
import { Radio } from "../../shared/Radio/Radio";
import { Icon, ICON_MAP } from "../../shared/Icon/Icon";
import { Button, BUTTON_SIZE, BUTTON_STYLE } from "../../shared/Button/Button";
import { Input, INPUT_STYLE } from "../../shared/Input/Input";
import { Searchbar } from "../../shared/Searchbar/Searchbar";
import { PageHeader } from "../../shared/PageHeader/PageHeader";
import {
  DropdownListItem,
  ITEM_TYPE,
} from "../../shared/DropdownListItem/DropdownListItem";

export const UIKit = () => {
  return (
    <div className={styles.container}>
      <Buttons />
      <Checkboxes />
      <Radios />
      <Inputs />
      <Searchbars />
      <PageHeaders />
      <Dropdowns />
    </div>
  );
};

const Buttons = () => {
  return (
    <>
      <div className={cn(styles.buttons, styles.dashed_wrapper)}>
        <div className={styles.buttons__section}>
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.medium}
            buttonStyle={BUTTON_STYLE.primary}
            title="Text here"
          />
          <Button
            size={BUTTON_SIZE.medium}
            buttonStyle={BUTTON_STYLE.primary}
            title="Text here"
          />
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.medium}
            buttonStyle={BUTTON_STYLE.primary}
          />
        </div>

        <div className={styles.buttons__section}>
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.medium}
            buttonStyle={BUTTON_STYLE.reverse}
            title="Text here"
          />
          <Button
            size={BUTTON_SIZE.medium}
            buttonStyle={BUTTON_STYLE.reverse}
            title="Text here"
          />
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.medium}
            buttonStyle={BUTTON_STYLE.reverse}
          />
        </div>

        <div className={styles.buttons__section}>
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.medium}
            buttonStyle={BUTTON_STYLE.secondary}
            title="Text here"
          />
          <Button
            size={BUTTON_SIZE.medium}
            buttonStyle={BUTTON_STYLE.secondary}
            title="Text here"
          />
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.medium}
            buttonStyle={BUTTON_STYLE.secondary}
          />
        </div>

        <div className={styles.buttons__section}>
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.small}
            buttonStyle={BUTTON_STYLE.primary}
            title="Text here"
          />
          <Button
            size={BUTTON_SIZE.small}
            buttonStyle={BUTTON_STYLE.primary}
            title="Text here"
          />
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.small}
            buttonStyle={BUTTON_STYLE.primary}
          />
        </div>

        <div className={styles.buttons__section}>
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.small}
            buttonStyle={BUTTON_STYLE.reverse}
            title="Text here"
          />
          <Button
            size={BUTTON_SIZE.small}
            buttonStyle={BUTTON_STYLE.reverse}
            title="Text here"
          />
          <Button
            icon={ICON_MAP.dot}
            size={BUTTON_SIZE.small}
            buttonStyle={BUTTON_STYLE.reverse}
          />
        </div>
      </div>
    </>
  );
};

const Checkboxes = () => (
  <>
    <div className={cn(styles.checkboxes, styles.dashed_wrapper)}>
      <Checkbox checked />
      <Checkbox />
    </div>
  </>
);

const Radios = () => (
  <>
    <div className={cn(styles.radios, styles.dashed_wrapper)}>
      <Radio name="radio" value="1" text="Text1" />
      <Radio name="radio" value="2" text="Text2" />
      <Radio name="radio" value="3" text="Text3" />
    </div>
  </>
);

const Inputs = () => {
  const postfixIcon = (
    <Icon name={ICON_MAP.vArrow} className={styles.vArrow_icon} />
  );

  return (
    <div className={cn(styles.inputs, styles.dashed_wrapper)}>
      <Input
        inputStyle={INPUT_STYLE.default}
        id={"inputField_empty1"}
        label={"Дата и время заказа"}
        placeholder={"Введите"}
      />
      <Input
        inputStyle={INPUT_STYLE.incorrect}
        id={"inputField_incorrect1"}
        label={"Дата и время заказа"}
        placeholder={"Введите"}
      />
      <Input
        inputStyle={INPUT_STYLE.disabled}
        id={"inputField_disabled1"}
        label={"Дата и время заказа"}
        placeholder={"Введите"}
        value={"12.12.2012"}
      />
      <Input
        inputStyle={INPUT_STYLE.default}
        id={"inputField_empty1"}
        label={"Дата и время заказа"}
        placeholder={"Введите"}
        postfix={postfixIcon}
        readOnly
      />
    </div>
  );
};

const Searchbars = () => (
  <>
    <div className={cn(styles.searchbars, styles.dashed_wrapper)}>
      <Searchbar placeholder={"Номер заказа или ФИО"} />
      <Searchbar placeholder={"Номер заказа или ФИО"} value={"50744"} />
    </div>
  </>
);

const PageHeaders = () => {
  const button = (
    <Button
      className={styles.button}
      size={BUTTON_SIZE.medium}
      buttonStyle={BUTTON_STYLE.reverse}
      icon={ICON_MAP.sun}
      iconClassName={styles.icon}
      title={"Светлая тема"}
    />
  );

  return (
    <>
      <div className={cn(styles.page_headers, styles.dashed_wrapper)}>
        <PageHeader title={"Список заказов"}>{button}</PageHeader>
        <PageHeader title={"Список заказов"}>{button}</PageHeader>
      </div>
    </>
  );
};

const Dropdowns = () => (
  <>
    <div className={cn(styles.dropdowns, styles.dashed_wrapper)}>
      <div
        className={cn(
          dropdownStyles._,
          dropdownStyles.withList,
          styles.dropdown_section1
        )}
      >
        <ul className={dropdownStyles.list}>
          <DropdownListItem text={"Новый"} />
          <DropdownListItem text={"Расчет"} />
          <DropdownListItem text={"Подтвержден"} />
          <DropdownListItem text={"Отложен"} />
          <DropdownListItem text={"Выполнен"} />
          <DropdownListItem text={"Отменен"} />
        </ul>
      </div>

      <form
        className={cn(
          dropdownStyles._,
          dropdownStyles.withList,
          styles.dropdown_section2
        )}
      >
        <ul className={dropdownStyles.list}>
          <DropdownListItem
            type={ITEM_TYPE.radio}
            text={"Новый"}
            name={"dropdown-selector"}
            value={"new"}
            isTextOnly={true}
          />
          <DropdownListItem
            type={ITEM_TYPE.radio}
            text={"Расчет"}
            name={"dropdown-selector"}
            value={"calculation"}
            isTextOnly={true}
            checked
          />
          <DropdownListItem
            type={ITEM_TYPE.radio}
            text={"Подтвержден"}
            name={"dropdown-selector"}
            value={"accepted"}
            isTextOnly={true}
          />
          <DropdownListItem
            type={ITEM_TYPE.radio}
            text={"Отложен"}
            name={"dropdown-selector"}
            value={"paused"}
            isTextOnly={true}
          />
          <DropdownListItem
            type={ITEM_TYPE.radio}
            text={"Выполнен"}
            name={"dropdown-selector"}
            value={"done"}
            isTextOnly={true}
          />
          <DropdownListItem
            type={ITEM_TYPE.radio}
            text={"Отменен"}
            name={"dropdown-selector"}
            value={"cancelled"}
            isTextOnly={true}
          />
        </ul>
      </form>

      <form
        className={cn(
          dropdownStyles._,
          dropdownStyles.withInput,
          styles.dropdown_section3
        )}
      >
        <Input
          inputStyle={INPUT_STYLE.default}
          id={"dropdown__inputField"}
          label={"Номер страницы"}
          placeholder={"Введите"}
        />
      </form>

      <div
        className={cn(
          dropdownStyles._,
          dropdownStyles.withDialog,
          styles.dropdown_section4
        )}
      >
        <div className={dropdownStyles.content}>
          <span className={dropdownStyles.title}>Удалить n записей?</span>
          <Button
            className={styles.button}
            size={BUTTON_SIZE.small}
            buttonStyle={BUTTON_STYLE.reverse}
            title={"Удалить"}
          />
          <Button
            className={styles.button}
            size={BUTTON_SIZE.small}
            buttonStyle={BUTTON_STYLE.primary}
            title={"Отмена"}
          />
        </div>
      </div>

      <div
        className={cn(
          dropdownStyles._,
          dropdownStyles.withDialog,
          styles.dropdown_section5
        )}
      >
        <div className={dropdownStyles.content}>
          <span className={dropdownStyles.title}>Выберите тему</span>
          <Button
            className={dropdownStyles.button}
            size={BUTTON_SIZE.small}
            buttonStyle={BUTTON_STYLE.reverse}
            title={"Светлая"}
            icon={ICON_MAP.sun}
          />
          <Button
            className={dropdownStyles.button}
            size={BUTTON_SIZE.small}
            buttonStyle={BUTTON_STYLE.primary}
            title={"Темная"}
            icon={ICON_MAP.moon}
          />
        </div>
      </div>
    </div>
  </>
);
