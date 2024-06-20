import React from 'react'
import Image from 'next/image'
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <div className={styles.form}>
          <form>
            <label>First Name : </label>
            <input type='text' name='firstname' placeholder='Your First Name..' />
            <label for="lname">Last Name :</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

              <label for="country">Country : </label>
              <select id="country" name="country">
                <option value="usa">India</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>

              <label for="subject">Subject :</label>
              <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

              <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact