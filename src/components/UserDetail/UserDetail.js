import styles from "./UserDetail.module.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Button from "../UI/Button/Button";
import Avatar from "../Avatar/Avatar";
const UserDetail = () => {
  const detail = useSelector((state) => state.user.userDetail);
  const content = detail ? (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className={detail ? styles.userDetail : ""}
    >
      <div>
        <div className={styles.avatar}>
          <Avatar src={detail.avatar} alt={detail.id} />
        </div>
        <div className={styles.details}>
          <div className={styles.name}>
            {detail.first_name} {detail.last_name}
            {detail.isActive ? <div className={styles.dot}></div> : ""}
          </div>
          <p className={styles.email}>{detail.email}</p>
          <p className={styles.yourPlan}>Your Plan: Standard</p>
        </div>
        <div className={styles.buttonDiv}>
          <Button className={styles.button}>Active User</Button>
        </div>
        <div>
          <section className={styles.planUses}>
            <p className={styles.planUsesText}>Plan Uses</p>
            <div className={styles.planUsesOuter}>
              <div className={styles.planUsesInner}></div>
            </div>
          </section>
          <section className={styles.usages}>
            <div className={`${styles.usage} ${styles.borderRight}`}>
              <div className={styles.usageNumber}>2450</div>
              <div className={styles.usageText}>clicks reviewed</div>
            </div>
            <div className={styles.usage}>
              <div className={styles.usageNumber}>5000</div>
              <div className={styles.usageText}>Monthly clicks</div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  ) : (
    ""
  );
  return <>{content}</>;
};
export default UserDetail;
