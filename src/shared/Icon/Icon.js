import { ReactComponent as Abort } from "../../common/icons/abort.svg";
import { ReactComponent as Bin } from "../../common/icons/bin.svg";
import { ReactComponent as Checkmark } from "../../common/icons/checkmark.svg";
import { ReactComponent as Dot } from "../../common/icons/dot.svg";
import { ReactComponent as Filter } from "../../common/icons/filter.svg";
import { ReactComponent as Locked } from "../../common/icons/locked.svg";
import { ReactComponent as Moon } from "../../common/icons/moon.svg";
import { ReactComponent as Pencil } from "../../common/icons/pencil.svg";
import { ReactComponent as Refresh } from "../../common/icons/refresh.svg";
import { ReactComponent as Search } from "../../common/icons/search.svg";
import { ReactComponent as Sun } from "../../common/icons/sun.svg";
import { ReactComponent as V_arrow } from "../../common/icons/v_arrow.svg";
import { ReactComponent as X_large } from "../../common/icons/x-large.svg";
import { ReactComponent as X_medium } from "../../common/icons/x-medium.svg";

const ICON_Map = {
  abort: Abort,
  bin: Bin,
  checkmark: Checkmark,
  dot: Dot,
  filter: Filter,
  locked: Locked,
  moon: Moon,
  pencil: Pencil,
  refresh: Refresh,
  search: Search,
  sun: Sun,
  v_arrow: V_arrow,
  "x-large": X_large,
  "x-medium": X_medium,
};
export const Icon = ({ name, ...props }) => {
  const Component = ICON_Map[name];
  return Component ? <Component {...props} /> : null;
};
