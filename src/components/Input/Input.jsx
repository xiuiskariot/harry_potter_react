import s from "./Input.module.css"

export const Input = ({input, setInput }) => {
  return (
    <div className={s.input_form}>
      <label for="hero_name" className={s.input_label}>
        Name
      </label>
      <input
        type="text"
        id="hero_name"
        placeholder="Hermione"
        className={s.input_hero_name}
        value={input}
        onChange={(evt) => setInput(evt.target.value)}
      />
    </div>
  );
};
