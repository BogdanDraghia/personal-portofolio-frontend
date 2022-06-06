import style from "../src/components/contact/contact.module.css"


const Contact = () => {
  return (
    <div className={style.ContactContainer}>
      <div className={style.ContactBox}>
        <div className={style.ContactFormBox}>
          <div className={style.ParagraphT}>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <form action="submit" method="post" className={style.form}>
            <div className={style.tests}>
              <label htmlFor="fname">Your full Name:</label>
              <input
                type="text"
                id="fname"
                name="FullName"
                placeholder="Full name: "
                required
              />
            </div>
            <div className={style.tests}>
              <label htmlFor="Email">Email:</label>
              <input
                type="text"
                id="Email"
                name="Email"
                placeholder="example@email.com "
                required
              />
            </div>
            <div className={style.tests}>
              <label htmlFor="subjectType">Subject:</label>
              <input
                type="text"
                id="subjectType"
                name="Subject"
                placeholder="Repair,boots, price, etc. "
                required
              />
            </div>
            <div className={style.tests}>
              <label htmlFor="subjectType">Category:</label>
              <input
                type="text"
                id="subjectType"
                name="Subject"
                placeholder="Repair,boots, price, etc. "
                required
              />
            </div>
            <div className={style.textarea}>
              <label htmlFor="subjectext">Your message</label>
              <textarea
                id="subjectext"
                name="Message"
                placeholder="Write something.."
                required
              ></textarea>
            </div>
            <input
              type="submit"
              className={style.Sabutton}
              value="Send"
            />
          </form>
        </div>
        <div className={style.InputContact}>
          <div className={style.subInputContact}>
            <div className={style.ContactInfoItem}>
              <div className={style.ContactIcon}>
                img
              </div>
              <div className={style.ContactText}>@facebook-id</div>
            </div>
            <div className={style.ContactInfoItem}>
              <div className={style.ContactIcon}>
                img2
              </div>
              <div className={style.ContactText}>(3333) 555-555</div>
            </div>
            <div className={style.ContactInfoItem}>
              <div className={style.ContactIcon}>
                img
              </div>
              <div className={style.ContactText}>email@test.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact