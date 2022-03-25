import styles from "./UserList.module.css";
import { useSelector } from "react-redux";
import UserItem from "../UserItem/UserItem";
import { AnimatePresence } from "framer-motion";
import Pagination from "../Pagination/Pagination";
import { BarLoader } from "react-spinners";
const UserList = () => {
  const user = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.ui.isLoading);
  const loaderStyle = `
 display:block;
  margin:auto;
  border-color: red;
`;
  return (
    <>
      <div className={styles.userList}>
        <div>
          <div className={styles.header}>
            <p>Name</p>
            <p>Status</p>
            <p>Access</p>
          </div>
          <div>
            {!isLoading && (
              <AnimatePresence>
                {user.map((item) => {
                  return <UserItem key={item.id} data={item} />;
                })}
              </AnimatePresence>
            )}
          </div>
          {isLoading && (
            <div className={styles.loader}>
              <BarLoader
                color="#ffa500"
                loading={isLoading}
                css={loaderStyle}
                size={5}
              />
            </div>
          )}
        </div>
        <Pagination />
      </div>
    </>
  );
};
export default UserList;
