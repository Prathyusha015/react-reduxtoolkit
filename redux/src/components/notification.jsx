import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addNotification } from "../features/notifications/notificationSlice";
import { removeNotification } from "../features/notifications/notificationSlice";

const Notification = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.messages);

  const handleAddNotification = () => {
    dispatch(addNotification("This is a notification"));
  };

  const handleRemoveNotification = (index) => {
    dispatch(removeNotification(index));
  };
  return (
    <div>

        <h2>Notifications</h2>
      <button onClick={handleAddNotification}>show notification</button>
     
      
      {notifications.map((msg, index) => (
        <div key={index}>
          <span>{msg}</span>
          <button onClick={() => handleRemoveNotification(index)}>
            Dismiss
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notification;
