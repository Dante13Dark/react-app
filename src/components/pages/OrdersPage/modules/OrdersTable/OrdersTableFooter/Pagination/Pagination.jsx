import styles from "./Pagination.module.css";
import {
  Button,
  BUTTON_SIZE,
  BUTTON_STYLE,
} from "../../../../../../shared/Button/Button";
import {
  getFilteredOrders,
  getPageLimit,
  getPageNumber,
} from "../../../../model/orders/ordersSelectors";

import { setCurrentPage } from "../../../../model/orders/ordersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "../../../../../../shared/Dropdown/Dropdown";
import { Input } from "../../../../../../shared/Input/Input";
import { useEffect, useState } from "react";

export const Pagination = () => {
  const dispatch = useDispatch();
  const handlePageClick = (index) => dispatch(setCurrentPage(index));
  const filteredOrders = useSelector(getFilteredOrders);
  const page = useSelector(getPageNumber);
  const pageLimit = useSelector(getPageLimit);
  const pageCount = Math.ceil(filteredOrders.length / pageLimit);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [pageCount]);

  const [inputValue, setInputValue] = useState("");
  const input = document.getElementById("selectPage");
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Enter") {
        if (e.target.value > 0 && e.target.value <= pageCount)
          handlePageClick(e.target.value);
      }
    };
    input?.addEventListener("keypress", handler);
    return () => {
      input?.removeEventListener("keypress", handler);
    };
  });

  return (
    <div className={styles.pages}>
      <div className={styles.pagination}>
        {[...Array(pageCount)].map((e, i) => {
          const index = i + 1;

          return (
            <Button
              key={i + 1}
              size={BUTTON_SIZE.small}
              buttonStyle={
                Number(index) === Number(page)
                  ? BUTTON_STYLE.primary
                  : BUTTON_STYLE.reverse
              }
              onClick={() => handlePageClick(index)}
              disabled={Number(index) === Number(page)}
            >
              {index}
            </Button>
          );
        })}
        {pageCount > 1 && (
          <Dropdown
            trigger={
              <Button
                size={BUTTON_SIZE.small}
                buttonStyle={BUTTON_STYLE.reverse}
              >
                #
              </Button>
            }
            overlay={
              <div className={styles.input}>
                <Input
                  id={"selectPage"}
                  label={"Номер страницы"}
                  placeholder={"Введите"}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onReset={() => setInputValue("")}
                  incorrect={
                    inputValue && !(inputValue > 0 && inputValue <= pageCount)
                  }
                />
              </div>
            }
            className={styles.dropdown}
          />
        )}
      </div>
    </div>
  );
};
