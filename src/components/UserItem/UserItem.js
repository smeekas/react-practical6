import styles from "./UserItem.module.css";
import { FiTrash2, FiLock } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import Avatar from "../Avatar/Avatar";
import { useState } from "react";
import { deleteUser, hoverUser } from "../../store/user/userActions";
const UserItem = (props) => {
  const ID = props.data.id;
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(ID === 1 ? true : false);
  const activeStateHandler = (event) => {
    if (event.target.value === "Active") {
      setIsActive(true);
    }
  };
  const deleteHandler = () => {
    dispatch(deleteUser(props.data.id));
  };
  const hoverHandler = () => {
    dispatch(hoverUser({ isActive: isActive, id: props.data.id }));
  };
  return (
    <motion.div
      transition={{ duration: 0.2 }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      className={styles.userItem}
    >
      <div onMouseEnter={hoverHandler} className={styles.avatar_name}>
        <Avatar
          className={styles.avatar}
          src={props.data.avatar}
          alt={props.data.id}
        />
        <section className={styles.name_email}>
          <div
            className={styles.name}
          >{`${props.data.first_name} ${props.data.last_name}`}</div>
          <div className={styles.email}>{props.data.email}</div>
        </section>
      </div>
      <div className={styles.status}>
        {!isActive ? (
          <DropDownMenu
            onChange={activeStateHandler}
            name="status"
            values={["inactive", "Active"]}
          />
        ) : (
          <p className={styles.active}>Active</p>
        )}
      </div>

      <div>
        {ID !== 1 ? (
          <DropDownMenu name="access" values={["Manager", "Read"]} />
        ) : (
          <p>Owner</p>
        )}
      </div>
      {ID !== 1 ? (
        <div>
          <FiTrash2
            onClick={deleteHandler}
            className={`${styles.icon} ${styles.lock}`}
          />
        </div>
      ) : (
        <div>
          <FiLock className={styles.icon} />
        </div>
      )}
    </motion.div>
  );
};
export default UserItem;
