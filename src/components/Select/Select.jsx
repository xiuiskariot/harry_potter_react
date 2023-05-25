import s from "./Select.module.css"

export const Select = ({ data, select, setSelect, dataArr, setDataArr }) => {
  let newData = [...new Set(data.map((el) => el.house))].filter(
      (element) => element !== "")
  
  return (
    <div className={s.input_from }>
      <label for="school" className={s.input_label}>
        School
      </label>


      <select id="school" className={s}
        onChange={(evt) => {
          setSelect(evt.target.value)
      }}
        >
        <option selected disabled className={s.selected}>
          Choose school
        </option>
        {newData.map((option, i) => (<option key={i} value={option}>{option }</option>))}
      </select>
    </div>
  );
}
