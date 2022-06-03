import emailjs from "emailjs-com";

function App() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7sd0wrs",
        "template_ytov1h9",

        e.target,
        "user_FKeFsx5fVPcdU8BsbTdwU"
      )

      //       {{{name}}}

      // {{{number}}}

      // {{{email}}}

      // {{{message}}}
      .then(
        (result) => {
          alert("you message has been recieved thank for your feed back");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
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

export default App;
