import "./Notification.scss";
import NotificationJS from "notification-npm";
import "/node_modules/notification-npm/index.css";

function Notification() {
  const shownotification = () => {
    const notification = new NotificationJS({
      message: "You have received a new quote!", //specify message here
      type: "normal", //specify type of notification
      duration: 3000, //duration in milliseconds
      theme: "light", //theme of notification
      sound: true, //for notificaion sound
      disable_timer: false, //set it true of you don't want timer
    });

    notification.show();
  };
  return <button onClick={() => shownotification()}></button>;
}

export default Notification;
