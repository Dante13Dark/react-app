import "./Searchbar.css";
import { Icon } from "../Icon/Icon";

export const Searchbars = () => (
  <>
    <div className="searchbars dashed-wrapper">
      <div className="searchbar searchbar_empty">
        <Icon name="search" className={"searchbar__icon"} />
        <input
          className="searchbar__input"
          placeholder="Номер заказа или ФИО"
        />
      </div>

      <div className="searchbar searchbar_filled">
        <Icon name="search" className={"searchbar__icon"} />
        <input
          className="searchbar__input"
          value="50744"
          placeholder="Номер заказа или ФИО"
        />
        <button className="button button_small button_color_reverse searchbar__button">
          <Icon name="x-medium" className={"button__icon"} />
        </button>
      </div>
    </div>
  </>
);
