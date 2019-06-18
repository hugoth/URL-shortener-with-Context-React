import React from "react";
import ContextUrl from "../../Services/ContextUrl";
import "./List.css";

const List = () => {
  return (
    <ContextUrl.Consumer>
      {context => (
        <div className="content-list">
          <div className="list-title">
            <p>Original-Url</p>
            <p>Short-Url</p>
            <p id="visits-title">Visits</p>
          </div>
          <ul className="list-url">
            {context.urls &&
              context.urls.map(url => {
                return (
                  <li key={url._id}>
                    <p>
                      <a href={url.original}>{url.original}</a>
                    </p>
                    <p>
                      <a
                        href={
                          "https://short-url-server-hugo-tessier.herokuapp.com/" +
                          url.shorten
                        }
                      >
                        {"https://short-url-server-hugo-tessier.herokuapp.com/" +
                          url.shorten}
                      </a>
                    </p>
                    <p id="visits-result">{url.visits}</p>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </ContextUrl.Consumer>
  );
};

export default List;
