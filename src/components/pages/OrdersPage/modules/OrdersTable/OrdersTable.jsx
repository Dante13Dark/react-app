import { Table } from "../../../../shared/TableElements/Table/Table";

import { OrdersTableFooter } from "./OrdersTableFooter/OrdersTableFooter";
import { OrdersTableHeader } from "./OrdersTableHeader/OrdersTableHeader";
import { OrdersTableBody } from "./OrdersTableBody/OrdersTableBody";

export const OrdersTable = () => {
  return (
    <Table>
      <OrdersTableHeader />
      <OrdersTableBody />
      <OrdersTableFooter />
    </Table>
  );
};
