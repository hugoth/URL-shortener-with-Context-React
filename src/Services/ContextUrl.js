import React, { Component, createContext } from "react";
import axios from "axios";

const { Consumer, Provider } = createContext();

class ContextUrl extends Component {
  state = {
    urls: null,
    url: "",
    status: null
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      url: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    await axios
      .post("https://short-url-server-hugo-tessier.herokuapp.com/url/create", {
        url: this.state.url
      })
      .then(response => {
        const listUrl = [...this.state.urls];
        const newUrl = {
          original: response.data.original,
          shorten: response.data.shorten,
          visits: 0
        };
        listUrl.push(newUrl);
        this.setState({ urls: listUrl, result: 200 }, () => {
          this.setState({ status: null });
        });
      })
      .catch(error => {
        this.setState({ status: error.response.status }, () => {
          this.setState({ status: null });
        });
      });
  };

  render() {
    return (
      <Provider
        value={{
          urls: this.state.urls,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
          status: this.state.status,
          handleRefreshAlert: this.handleRefreshAlert
        }}
      >
        {this.props.children}
      </Provider>
    );
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://short-url-server-hugo-tessier.herokuapp.com/url"
    );
    this.setState({ urls: response.data });
  }
}
export default {
  Provider: ContextUrl,
  Consumer
};
