import style from "../src/components/contact.module.css"


const Contact = () => {
  return (
    <div className={style.centerSection}>
      <div className={style.containerContact}>
        <form>
          <label>
            Name/Company 
            <input type="text" name="name"/>
          </label>
          <label>
            Name/Company 
            <input type="text" name="name"/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  )
}

export default Contact