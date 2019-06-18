import React from "react";
import ContextUrl from "../../Services/ContextUrl";
import "./Form.css";

const Form = () => {
  return (
    <ContextUrl.Consumer>
      {context => (
        <div>
          <div className="alert">
            {context.result &&
              context.result === 200 &&
              alert("Url succesfully added")}
            {context.result &&
              context.result === 402 &&
              alert("Url already exist")}
            {context.result &&
              context.result === 401 &&
              alert("Please fill a valid url")}
            {context.result &&
              context.result === 400 &&
              alert("Something went wrong, please try again")}
          </div>

          <div className="input">
            <input
              placeholder="Your original url here"
              onChange={context.handleChange}
              value={context.url}
            />
            <button className="button" onClick={context.handleSubmit}>
              SHORTEN URL
            </button>
          </div>
        </div>
      )}
    </ContextUrl.Consumer>
  );
};

export default Form;
