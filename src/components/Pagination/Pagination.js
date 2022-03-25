import styles from "./Pagination.module.css";
import { fetchUsersPagination } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import { fetchUserPageChanged } from "../../actions/paginationAction";
const Pagination = () => {
  const dispatch = useDispatch();
  const perPage = useSelector((state) => state.pagination.perPage);
  const { currentPage, totalPages } = useSelector((state) => state.pagination);

  const curr = currentPage;

  const prev = curr !== 1 ? curr - 1 : -1;
  const next = curr < totalPages ? curr + 1 : -1;
  const nextHandler = () => {
    dispatch(fetchUsersPagination(next, perPage));
  };
  const prevHandler = () => {
    dispatch(fetchUsersPagination(prev, perPage));
  };
  const perPageChangeHandler = (event) => {
    dispatch(fetchUserPageChanged(event.target.value));
  };

  const cellStyle = styles.cell;
  const currentCellStyle = styles.current;

  const prevPageComponent = prev !== -1 && (
    <Button onClick={prev !== -1 && prevHandler} className={cellStyle}>
      {curr - 1}
    </Button>
  );
  const currentPageComponent = (
    <Button className={`${cellStyle} ${currentCellStyle}`}>{curr}</Button>
  );
  const nextPageComponent = next !== -1 && (
    <Button onClick={next !== -1 && nextHandler} className={cellStyle}>
      {curr + 1}
    </Button>
  );
  return (
    <div className={styles.pagination}>
      per page:
      <DropDownMenu
        onChange={perPageChangeHandler}
        className={styles.perPage}
        values={[2, 4, 8, 10, 12]}
      />
      {/* <select onChange={perPageChangeHandler}>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select> */}
      {prevPageComponent}
      {currentPageComponent}
      {nextPageComponent}
    </div>
  );
};
export default Pagination;
