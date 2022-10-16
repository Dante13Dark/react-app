import "./InputField.css";
import { Icon } from "../Icon/Icon";

export const Inputs = () => (
  <>
    <div className="inputs dashed-wrapper">
      <div className="inputField inputField_empty">
        <label className="inputField__label" htmlFor="inputField_empty">
          Дата и время заказа
        </label>
        <div className="inputField__area-container">
          <input
            className="inputField__area"
            id="inputField_empty"
            placeholder="Введите"
          />
        </div>
      </div>

      <div className="inputField inputField_incorrect">
        <label className="inputField__label" htmlFor="inputField_incorrect">
          Дата и время заказа
        </label>
        <div className="inputField__area-container">
          <input
            className="inputField__area"
            id="inputField_incorrect"
            value="06.12.2021"
            placeholder="Введите"
          />
          <button className="button button_small button_color_reverse inputField__button-cross">
            <Icon name="x-medium" className={"button__icon"} />
          </button>
        </div>
      </div>

      <div className="inputField inputField_disabled">
        <label className="inputField__label" htmlFor="inputField">
          Дата и время заказа
        </label>
        <div className="inputField__area-container">
          <input
            className="inputField__area"
            id="inputField"
            value="06.12.2021"
            placeholder="Введите"
            disabled
          />
          <button
            className="button button_small button_color_reverse inputField__button-lock"
            disabled
          >
            <Icon name="locked" className={"button__icon"} />
          </button>
        </div>
      </div>
    </div>
  </>
);
