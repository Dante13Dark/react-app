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

export const Icon = ({ name, ...props }) => {
  switch (name) {
    case "abort":
      return <Abort {...props} />;
    case "bin":
      return <Bin {...props} />;
    case "checkmark":
      return <Checkmark {...props} />;
    case "dot":
      return <Dot {...props} />;
    case "filter":
      return <Filter {...props} />;
    case "locked":
      return <Locked {...props} />;
    case "moon":
      return <Moon {...props} />;
    case "pencil":
      return <Pencil {...props} />;
    case "refresh":
      return <Refresh {...props} />;
    case "search":
      return <Search {...props} />;
    case "sun":
      return <Sun {...props} />;
    case "v_arrow":
      return <V_arrow {...props} />;
    case "x-large":
      return <X_large {...props} />;
    case "x-medium":
      return <X_medium {...props} />;
    default:
      return null;
  }
};
