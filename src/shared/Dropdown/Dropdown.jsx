import "./Dropdowns.css";
import { Icon } from "../Icon/Icon";

export const Dropdowns = () => (
  <>
    <div className="dropdowns dashed-wrapper">
      <form className="dropdown dropdown_with-list dropdown_section1">
        <ul className="dropdown__list">
          <li className="dropdown__list-item">
            <label className="checkbox">
              <input className="checkbox__area" type="checkbox" />
              <span className="checkbox__text">Новый</span>
              <Icon name={"checkmark"} className="checkbox__icon" />
            </label>
          </li>
          <li className="dropdown__list-item">
            <label className="checkbox">
              <input className="checkbox__area" type="checkbox" />
              <span className="checkbox__text">Рассчет</span>
              <Icon name={"checkmark"} className="checkbox__icon" />
            </label>
          </li>
          <li className="dropdown__list-item">
            <label className="checkbox">
              <input className="checkbox__area" type="checkbox" checked />
              <span className="checkbox__text">Подтвержден</span>
              <Icon name={"checkmark"} className="checkbox__icon" />
            </label>
          </li>
          <li className="dropdown__list-item">
            <label className="checkbox">
              <input className="checkbox__area" type="checkbox" />
              <span className="checkbox__text">Отложен</span>
              <Icon name={"checkmark"} className="checkbox__icon" />
            </label>
          </li>
          <li className="dropdown__list-item">
            <label className="checkbox">
              <input className="checkbox__area" type="checkbox" />
              <span className="checkbox__text">Выполнен</span>
              <Icon name={"checkmark"} className="checkbox__icon" />
            </label>
          </li>
          <li className="dropdown__list-item">
            <label className="checkbox">
              <input className="checkbox__area" type="checkbox" />
              <span className="checkbox__text">Отменен</span>
              <Icon name={"checkmark"} className="checkbox__icon" />
            </label>
          </li>
        </ul>
      </form>
      <form className="dropdown dropdown_with-list dropdown_section2">
        <ul className="dropdown__list">
          <li className="dropdown__list-item">
            <label className="radio">
              <input
                className="radio__area radio__area_hidden"
                type="radio"
                name="dropdown-selector"
                value="new"
              />
              <span className="radio__text radio__text_enabled">Новый</span>
              <Icon name={"dot"} className="radio__icon" />
            </label>
          </li>
          <li className="dropdown__list-item">
            <label className="radio">
              <input
                className="radio__area radio__area_hidden"
                type="radio"
                name="dropdown-selector"
                value="calculation"
              />
              <span className="radio__text radio__text_enabled">Рассчет</span>
              <Icon name={"dot"} className="radio__icon" />
            </label>
          </li>
          <li className="dropdown__list-item">
            <label className="radio">
              <input
                className="radio__area radio__area_hidden"
                type="radio"
                name="dropdown-selector"
                value="accepted"
              />
              <span className="radio__text radio__text_enabled">
                Подтвержден
              </span>
              <Icon name={"dot"} className="radio__icon" />
            </label>
          </li>
          <li className="dropdown__list-item">
            <label className="radio">
              <input
                className="radio__area radio__area_hidden"
                type="radio"
                name="dropdown-selector"
                value="paused"
              />
              <span className="radio__text radio__text_enabled">Отложен</span>
              <Icon name={"dot"} className="radio__icon" />
            </label>
          </li>
          <li className="dropdown__list-item">
            <label className="radio">
              <input
                className="radio__area radio__area_hidden"
                type="radio"
                name="dropdown-selector"
                value="done"
              />
              <span className="radio__text radio__text_enabled">Выполнен</span>
              <Icon name={"dot"} className="radio__icon" />
            </label>
          </li>
          <li className="dropdown__list-item">
            <label className="radio">
              <input
                className="radio__area radio__area_hidden"
                type="radio"
                name="dropdown-selector"
                value="cancelled"
              />
              <span className="radio__text radio__text_enabled">Отменен</span>
              <Icon name={"dot"} className="radio__icon" />
            </label>
          </li>
        </ul>
      </form>
      <form className="dropdown dropdown_with-input dropdown_section3">
        <div className="inputField inputField_empty">
          <label className="inputField__label" htmlFor="dropdown__inputField">
            Дата и время заказа
          </label>
          <div className="inputField__area-container">
            <input
              className="inputField__area"
              id="dropdown__inputField"
              placeholder="Введите"
            />
          </div>
        </div>
      </form>
      <div className="dropdown dropdown_with-dialog dropdown_section4">
        <div className="dropdown__content">
          <span className="dropdown__title">Удалить n записей?</span>
          <button className="button button_small button_color_reverse dropdown__button">
            <span className="button__text">Удалить</span>
          </button>
          <button className="button button_small button_color_primary dropdown__button">
            <span className="button__text">Отмена</span>
          </button>
        </div>
      </div>
      <div className="dropdown dropdown_with-dialog dropdown_section5">
        <div className="dropdown__content">
          <span className="dropdown__title">Выберите тему</span>
          <button className="button button_small button_color_reverse dropdown__button">
            <Icon name={"sun"} className="button__icon" />
            <span className="button__text">Светлая</span>
          </button>
          <button className="button button_small button_color_primary dropdown__button">
            <Icon name={"moon"} className="button__icon" />
            <span className="button__text">Темная</span>
          </button>
        </div>
      </div>
    </div>
  </>
);
