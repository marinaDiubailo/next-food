import s from './AddMealForm.module.scss'

export const AddMealForm = () => {
  return (
    <form className={s.form}>
      <div className={s.row}>
        <fieldset className={s.fieldset}>
          <legend>Ваше имя</legend>
          <input type="text" name="name" required className={s.input} />
        </fieldset>
        <fieldset className={s.fieldset}>
          <legend>Ваша почта</legend>
          <input type="email" name="email" required className={s.input} />
        </fieldset>
      </div>
      <fieldset className={s.fieldset}>
        <legend>Название блюда</legend>
        <input type="text" name="title" required className={s.input} />
      </fieldset>
      <fieldset className={s.fieldset}>
        <legend>Краткое описание</legend>
        <input type="text" name="summary" required className={s.input} />
      </fieldset>
      <fieldset className={s.fieldset}>
        <legend>Способ приготовления:</legend>
        <textarea
          id="instructions"
          name="instructions"
          rows={10}
          required
          className={s.input}
        ></textarea>
      </fieldset>
      IMAGE PICKER
      <div className={s.actions}>
        <button type="submit">Поделиться</button>
      </div>
    </form>
  )
}
