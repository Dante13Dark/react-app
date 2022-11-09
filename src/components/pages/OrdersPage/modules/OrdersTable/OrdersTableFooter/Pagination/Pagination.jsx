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
  const selectedPage = useSelector(getPageNumber);
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

  const pages = calculatePages(selectedPage, pageCount);

  return (
    <div className={styles.pages}>
      <div className={styles.pagination}>
        {pages.map((p, index) => {
          return (
            <Button
              key={index}
              size={BUTTON_SIZE.small}
              buttonStyle={
                Number(p) === Number(selectedPage)
                  ? BUTTON_STYLE.primary
                  : BUTTON_STYLE.reverse
              }
              onClick={() => handlePageClick(p)}
              disabled={Number(p) === Number(selectedPage) || p === "..."}
            >
              {p}
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

function calculatePages(activePage, pageCount) {
  let pages = [activePage];
  if (pageCount <= 7) {
    pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  } else {
    const diffBefore = activePage - 1;
    const diffAfter = pageCount - activePage;
    if (diffBefore >= 3) {
      if (activePage === pageCount) {
        pages.unshift(1, "...", activePage - 2, activePage - 1);
      } else {
        pages.unshift(1, "...", activePage - 1);
      }
    } else if (diffBefore === 2) {
      pages.unshift(1, pages - 1);
    } else if (diffBefore === 1) {
      pages.unshift(1);
    }

    if (diffAfter >= 3) {
      if (activePage === 1) {
        pages.push(
          Number(activePage) + Number(1),
          Number(activePage) + Number(2),
          "...",
          pageCount
        );
      } else {
        pages.push(Number(activePage) + Number(1), "...", pageCount);
      }
    } else if (diffAfter === 2) {
      pages.push(Number(activePage) + Number(1), pageCount);
    } else if (diffAfter === 1) {
      pages.push(pageCount);
    }
  }
  return pages;
}
