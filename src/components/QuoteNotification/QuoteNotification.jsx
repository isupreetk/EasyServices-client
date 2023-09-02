import React, { Component } from "react";

class QuoteNotification extends Component {
  constructor() {
    super();
    this.showNotification = this.showNotification.bind(this);
  }

  componentDidMount() {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }

  showNotification() {
    var notification = new Notification("You have received a new quote!", {
      body: "New notification",
    });
    notification.onclick = function () {
      window.focus();
      //   window.open("http://stackoverflow.com/");
      notification.close();
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.showNotification}>
          Click to show notification
        </button>
      </div>
    );
  }
}

export default QuoteNotification;
