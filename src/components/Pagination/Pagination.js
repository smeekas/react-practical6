import styles from "./Pagination.module.css";
import { fetchUsersPagination } from "../../store/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state) => state.pagination);

  const curr = currentPage;

  const prev = curr !== 1 ? curr - 1 : -1;
  const next = curr < totalPages ? curr + 1 : -1;
  const nextHandler = () => {
    dispatch(fetchUsersPagination(next));
  };
  const prevHandler = () => {
    dispatch(fetchUsersPagination(prev));
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
      {prevPageComponent}
      {currentPageComponent}
      {nextPageComponent}
    </div>
  );
};
export default Pagination;
