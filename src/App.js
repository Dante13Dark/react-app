import "./App.css";
import "./css/common.css";

import { Buttons } from "./shared/Button/Button";
import { Checkboxes } from "./shared/Checkbox/Checkbox";
import { Radios } from "./shared/Radio/Radio";
import { Inputs } from "./shared/Input/Input";
import { Searchbars } from "./shared/Searchbar/Searchbar";
import { PageHeaders } from "./shared/PageHeader/PageHeader";
import { Dropdowns } from "./shared/Dropdown/Dropdown";

const App = () => (
  <div>
    <div className="container">
      <Buttons />
      <Checkboxes />
      <Radios />
      <Inputs />
      <Searchbars />
      <PageHeaders />
      <Dropdowns />
    </div>
  </div>
);

export default App;
