import ThemeProvider from "./components/shared/ThemeContext/ThemeContext";
import { OrdersPage } from "./components/pages/OrdersPage/OrdersPage";

const App = () => (
  <ThemeProvider>
    <OrdersPage />
  </ThemeProvider>
);

export default App;
