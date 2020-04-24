import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form">
      <div>
        <h6>Name</h6>
        <input type="text" name="Name" placeholder="Name" />
      </div>
      <div>
        <h6>Email</h6>
        <input type="text" name="Name" placeholder="example@mail.com" />
      </div>
      <div>
        <h6>Phone</h6>
        <input type="text" name="Name" placeholder="(+216)" />
      </div>
      <div>
        <h6>Message</h6>
        <textarea name="message" cols="25" rows="5" placeholder="Feedback" />
        <br />
        <button class="btn btn-primary" type="button">
          Send
        </button>
      </div>
    </div>
  );
}
export default Form;
