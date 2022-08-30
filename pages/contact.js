import style from "../src/components/contact/contact.module.css"
import SvgIconHelper from "../src/components/assets/SvgIconHelper"
import LinkedinComponent from "../src/props/icons/contactPage/linkedin"
import Email from "../src/props/icons/contactPage/email"
import Twitter from "../src/props/icons/contactPage/twitter"



const Contact = () => {
  return (
    <div className={style.contactContainer}>
      <div className={style.subContactContainer}>
      <div className={style.contactBoxTextContainer}>
          <div className={style.contactBoxBoxTextSubContainer}>
            <h1>
              Get in touch
            </h1>
            <p>
              If you want to create something, don't hesitate to contact   
            </p>
          </div>
      </div>

      <div className={style.contactBox}>
        <div className={style.iconsBox} >
          <div className={style.iconComponent}>
            <SvgIconHelper name="linkedin" icon={<LinkedinComponent  />} pass={"https://github.com/bogdandraghia"} />
          </div>
          <div className={style.iconComponent}>
            <SvgIconHelper name="twitter" icon={<Email  />} pass={"https://github.com/bogdandraghia"} />
          </div>
          <div className={style.iconComponent}>
            <SvgIconHelper name="email" icon={<Twitter  />} pass={"https://github.com/bogdandraghia"} />
          </div>
        </div>
        <div className={style.formBox}>
          <form className={style.form}>
            <div className={style.formWrap}>
              <label htmlFor="formname">
                Name
              </label>
              <input
                type="text"
                id="formname"
                required
              />
            </div>
            <div className={style.formWrap}>
              <label htmlFor="formname">
                Email
              </label>
              <input
                type="text"
                id="formname"
                required
              />
            </div>
            <div className={style.formWrap}>
              <label htmlFor="formname">
                Message
              </label>
              <textarea
                type="textarea"
                id="formname"
                required
              />
            </div>
            <button className={style.buttonForm}>
              Send
            </button>
          </form>
        </div>
      </div>
      </div>
    </div>

  )
}

export default Contact