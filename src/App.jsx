import ThemeProvider from "./components/shared/ThemeContext/ThemeContext";
import { OrdersPage } from "./components/pages/OrdersPage/OrdersPage";
import { store } from "./components/pages/OrdersPage/model/index";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <OrdersPage />
    </ThemeProvider>
  </Provider>
);

export default App;
