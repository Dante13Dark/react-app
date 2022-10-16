import "./App.css";
import "./css/common.css";
import {
  Buttons,
  Checkboxes,
  Radios,
  Inputs,
  Searchbars,
  PageHeaders,
  Dropdowns,
} from "../src/shared";

const App = () => (
  <div className="container">
    <Buttons />
    <Checkboxes />
    <Radios />
    <Inputs />
    <Searchbars />
    <PageHeaders />
    <Dropdowns />
  </div>
);

export default App;
