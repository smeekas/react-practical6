import styles from "./DropDownMenu.module.css";
const DropDownMenu = ({ onChange, values, name }) => {
  return (
    <select onChange={onChange} className={styles.menu} name={name}>
      {values.map((valueName) => {
        return (
          <option key={valueName} value={valueName}>
            {valueName}
          </option>
        );
      })}
    </select>
  );
};
export default DropDownMenu;
