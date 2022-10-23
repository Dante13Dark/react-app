import { ReactComponent as Abort } from "./abort.svg";
import { ReactComponent as Bin } from "./bin.svg";
import { ReactComponent as Checkmark } from "./checkmark.svg";
import { ReactComponent as Dot } from "./dot.svg";
import { ReactComponent as Filter } from "./filter.svg";
import { ReactComponent as Locked } from "./locked.svg";
import { ReactComponent as Moon } from "./moon.svg";
import { ReactComponent as Pencil } from "./pencil.svg";
import { ReactComponent as Refresh } from "./refresh.svg";
import { ReactComponent as Search } from "./search.svg";
import { ReactComponent as Sun } from "./sun.svg";
import { ReactComponent as V_arrow } from "./v_arrow.svg";
import { ReactComponent as X_large } from "./x-large.svg";
import { ReactComponent as X_medium } from "./x-medium.svg";

export const ICON_MAP = {
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
  vArrow: V_arrow,
  xLarge: X_large,
  xMedium: X_medium,
};

export const Icon = ({ name, ...props }) => {
  const Component = name;
  return Component ? <Component {...props} /> : null;
};
