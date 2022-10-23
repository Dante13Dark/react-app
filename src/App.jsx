import styles from "./App.module.css";

import {
  Buttons,
  Checkboxes,
  Radios,
  Inputs,
  Searchbars,
  PageHeaders,
  Dropdowns,
} from "./components/shared";

const App = () => (
  <div className={styles.container}>
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
