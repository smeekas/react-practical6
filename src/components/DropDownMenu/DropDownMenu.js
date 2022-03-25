import styles from "./DropDownMenu.module.css";
const DropDownMenu = ({ onChange, values, name, className }) => {
  return (
    <select
      onChange={onChange}
      className={className || styles.menu}
      name={name}
    >
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
