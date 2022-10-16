import styles from "./Button.module.css";
import cn from "classnames";
import { Icon } from "../Icon/Icon";

export const Button = ({ icon, children }) => (
  <button
    className={cn(
      styles.button,
      styles.button_medium,
      styles.button_color_primary
    )}
  >
    <Icon name={icon} className={cn(styles.button__icon)} />
    {children}
  </button>
);

export const Buttons = () => (
  <>
    <div className="buttons dashed-wrapper">
      <div className="buttons__section">
        <Button icon={"dot"}>Text here</Button>
        <button
          className={cn(
            styles.button,
            styles.button_medium,
            styles.button_color_primary
          )}
        >
          <Icon name="dot" className={styles.button__icon} />
          <span className="button__text">Text here</span>
        </button>
        <button className="button button_medium button_color_primary">
          <span className="button__text">Text here</span>
        </button>
        <button className="button button_medium button_color_primary">
          <Icon name="dot" className={"button__icon"} />
        </button>
      </div>

      <div className="buttons__section">
        <button className="button button_medium button_color_reverse">
          <Icon name="dot" className={"button__icon"} />
          <span className="button__text">Text here</span>
        </button>
        <button className="button button_medium button_color_reverse">
          <span className="button__text">Text here</span>
        </button>
        <button className="button button_medium button_color_reverse">
          <Icon name="dot" className={"button__icon"} />
        </button>
      </div>

      <div className="buttons__section">
        <button className="button button_medium button_color_secondary">
          <Icon name="dot" className={"button__icon"} />
          <span className="button__text">Text here</span>
        </button>
        <button className="button button_medium button_color_secondary">
          <span className="button__text">Text here</span>
        </button>
        <button className="button button_medium button_color_secondary">
          <Icon name="dot" className={"button__icon"} />
        </button>
      </div>

      <div className="buttons__section">
        <button className="button button_small button_color_primary">
          <Icon name="dot" className={"button__icon"} />
          <span className="button__text">Text here</span>
        </button>
        <button className="button button_small button_color_primary">
          <span className="button__text">Text here</span>
        </button>
        <button className="button button_small button_color_primary">
          <Icon name="dot" className={"button__icon"} />
        </button>
      </div>

      <div className="buttons__section">
        <button className="button button_small button_color_reverse">
          <Icon name="dot" className={"button__icon"} />
          <span className="button__text">Text here</span>
        </button>
        <button className="button button_small button_color_reverse">
          <span className="button__text">Text here</span>
        </button>
        <button className="button button_small button_color_reverse">
          <Icon name="dot" className={"button__icon"} />
        </button>
      </div>
    </div>
  </>
);
