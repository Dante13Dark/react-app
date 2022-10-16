import "./PageHeader.css";
import { Icon } from "../Icon/Icon";

export const PageHeaders = () => (
  <>
    <div className="page-headers dashed-wrapper">
      <div className="header">
        <span className="header__text">Список заказов</span>
        <button className="button button_medium button_color_reverse header__button">
          <Icon name={"sun"} className={"button__icon"} />
          <span className="button__text">Светлая тема</span>
        </button>
      </div>

      <div className="header">
        <span className="header__text">Список заказов</span>
        <button className="button button_medium button_color_reverse header__button">
          <Icon name={"sun"} className={"button__icon"} />
          <span className="button__text">Светлая тема</span>
        </button>
      </div>
    </div>
  </>
);
