import cn from "classnames";
import styles from "./UIKit.module.css";
import dropdownStyles from "../../shared/Dropdown/Dropdown.module.css";
import { Checkbox } from "../../shared/Checkbox/Checkbox";
import { Radio } from "../../shared/Radio/Radio";
import { Icon, ICON_MAP } from "../../shared/Icon/Icon";
import { Button, BUTTON_SIZE, BUTTON_STYLE } from "../../shared/Button/Button";
import { Input } from "../../shared/Input/Input";
import { Searchbar } from "../../shared/Searchbar/Searchbar";
import { PageHeader } from "../../shared/PageHeader/PageHeader";

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
          >
            Text here
          </Button>
          <Button size={BUTTON_SIZE.medium} buttonStyle={BUTTON_STYLE.primary}>
            Text here
          </Button>
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
          >
            Text here
          </Button>
          <Button size={BUTTON_SIZE.medium} buttonStyle={BUTTON_STYLE.reverse}>
            Text here
          </Button>
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
          >
            Text here
          </Button>
          <Button
            size={BUTTON_SIZE.medium}
            buttonStyle={BUTTON_STYLE.secondary}
          >
            Text here
          </Button>
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
          >
            Text here
          </Button>
          <Button size={BUTTON_SIZE.small} buttonStyle={BUTTON_STYLE.primary}>
            Text here
          </Button>
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
          >
            Text here
          </Button>
          <Button size={BUTTON_SIZE.small} buttonStyle={BUTTON_STYLE.reverse}>
            Text here
          </Button>
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
        id={"inputField_empty1"}
        label={"Дата и время заказа"}
        placeholder={"Введите"}
      />
      <Input
        incorrect
        id={"inputField_incorrect1"}
        label={"Дата и время заказа"}
        placeholder={"Введите"}
      />
      <Input
        disabled
        id={"inputField_disabled1"}
        label={"Дата и время заказа"}
        placeholder={"Введите"}
        value={"12.12.2012"}
      />
      <Input
        incorrect
        disabled
        id={"inputField_disabled1"}
        label={"Дата и время заказа"}
        placeholder={"Введите"}
        value={"12.12.2012"}
      />
      <Input
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
    >
      Светлая тема
    </Button>
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
          <li className={styles.item}>
            <Checkbox
              text={"Новый"}
              className={styles.control}
              iconClassName={styles.control__icon}
            />
          </li>
          <li className={styles.item}>
            <Checkbox
              text={"Расчет"}
              className={styles.control}
              iconClassName={styles.control__icon}
            />
          </li>
          <li className={styles.item}>
            <Checkbox
              text={"Подтвержден"}
              className={styles.control}
              iconClassName={styles.control__icon}
            />
          </li>
          <li className={styles.item}>
            <Checkbox
              text={"Отложен"}
              className={styles.control}
              iconClassName={styles.control__icon}
            />
          </li>
          <li className={styles.item}>
            <Checkbox
              text={"Выполнен"}
              className={styles.control}
              iconClassName={styles.control__icon}
            />
          </li>
          <li className={styles.item}>
            <Checkbox
              text={"Отменен"}
              className={styles.control}
              iconClassName={styles.control__icon}
            />
          </li>
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
          <li className={styles.item}>
            <Radio
              name={"dropdown-selector"}
              value={"new"}
              isTextOnly={true}
              className={styles.control}
              iconClassName={styles.control__icon}
            >
              Новый
            </Radio>
          </li>
          <li className={styles.item}>
            <Radio
              name={"dropdown-selector"}
              value={"calculation"}
              isTextOnly={true}
              checked
              className={styles.control}
              iconClassName={styles.control__icon}
            >
              Расчет
            </Radio>
          </li>
          <li className={styles.item}>
            <Radio
              name={"dropdown-selector"}
              value={"accepted"}
              isTextOnly={true}
              className={styles.control}
              iconClassName={styles.control__icon}
            >
              Подтвержден
            </Radio>
          </li>
          <li className={styles.item}>
            <Radio
              name={"dropdown-selector"}
              value={"paused"}
              isTextOnly={true}
              className={styles.control}
              iconClassName={styles.control__icon}
            >
              Отложен
            </Radio>
          </li>
          <li className={styles.item}>
            <Radio
              name={"dropdown-selector"}
              value={"done"}
              isTextOnly={true}
              className={styles.control}
              iconClassName={styles.control__icon}
            >
              Выполнен
            </Radio>
          </li>
          <li className={styles.item}>
            <Radio
              name={"dropdown-selector"}
              value={"cancelled"}
              isTextOnly={true}
              className={styles.control}
              iconClassName={styles.control__icon}
            >
              Отменен
            </Radio>
          </li>
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
          >
            Удалить
          </Button>
          <Button
            className={styles.button}
            size={BUTTON_SIZE.small}
            buttonStyle={BUTTON_STYLE.primary}
          >
            Отмена
          </Button>
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
            icon={ICON_MAP.sun}
          >
            Светлая
          </Button>
          <Button
            className={dropdownStyles.button}
            size={BUTTON_SIZE.small}
            buttonStyle={BUTTON_STYLE.primary}
            icon={ICON_MAP.moon}
          >
            Темная
          </Button>
        </div>
      </div>
    </div>
  </>
);
