import styles from "./UserItem.module.css";
import { FiTrash2, FiLock } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import Avatar from "../Avatar/Avatar";

import { hoverUser } from "../../actions/userActions";
const UserItem = (props) => {
  const ID = props.data.id;
  const dispatch = useDispatch();

  const hoverHandler = () => {
    dispatch(hoverUser({ id: props.data.id }));
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
        {!ID !== 1 ? (
          <DropDownMenu name="status" values={["inactive", "Active"]} />
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
          <FiTrash2 className={`${styles.icon} ${styles.lock}`} />
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
