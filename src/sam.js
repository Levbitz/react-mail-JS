import emailjs from "emailjs-com";
import firebase from "firebase/app";

function Sam() {
  console.log(firebase);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5fln1l9",
        "template_jy56qfn",
        e.target,
        "user_4LdHkEcN1bqeDGvVpFSu0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div>
      <h2>Email js</h2>

      <div>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="name" name="name" />
          <br />
          <input type="email" name="email" id="" placeholder="emil" />
          <br />
          <input type="number" name="number" id="" placeholder="phone number" />
          <br />
          <textarea
            id=""
            cols="30"
            rows="10"
            placeholder="message"
            name="message"
          ></textarea>
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}

export default Sam;
