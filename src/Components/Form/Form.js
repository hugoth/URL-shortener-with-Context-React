import React from "react";
import ContextUrl from "../../Services/ContextUrl";
import "./Form.css";

const Form = () => {
  return (
    <ContextUrl.Consumer>
      {context => (
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
      )}
    </ContextUrl.Consumer>
  );
};

export default Form;
