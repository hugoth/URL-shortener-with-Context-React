import React from "react";
import ContextUrl from "./Services/ContextUrl";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";

import "./index.css";

function App() {
  return (
    <ContextUrl.Provider>
      <>
        <div className="App">
          <div className="content">
            <div className="header">
              <h1>Simplifly your links</h1>
              <Form />
            </div>
            <div className="list">
              <List />
            </div>
          </div>
        </div>
      </>
    </ContextUrl.Provider>
  );
}

export default App;
