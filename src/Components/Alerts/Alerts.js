import React from "react";
import ContextUrl from "../../Services/ContextUrl";

const Alerts = () => {
  return (
    <ContextUrl.Consumer>
      {context => (
        <div className="alert">
          {context.status &&
            context.status === 200 &&
            alert("Url succesfully added")}
          {context.status &&
            context.status === 402 &&
            alert("Url already exist")}
          {context.status &&
            context.status === 401 &&
            alert("Please fill a valid url")}
          {context.status &&
            context.status === 400 &&
            alert("Something went wrong, please try again")}
        </div>
      )}
    </ContextUrl.Consumer>
  );
};

export default Alerts;
