import React, { useState } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const newNotification = {
      id: Date.now(),
      message: "You have a new dashboard alert!",
      read: false,
    };

    setNotifications([newNotification, ...notifications]);
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div style={{ maxWidth: "400px" }}>
      <h2>Dashboard Notifications</h2>

      <button onClick={addNotification}>Add Notification</button>
      <button onClick={clearAll} style={{ marginLeft: "10px" }}>
        Clear All
      </button>

      <ul>
        {notifications.length === 0 && <p>No notifications</p>}

        {notifications.map((n) => (
          <li
            key={n.id}
            style={{
              background: n.read ? "#eee" : "#d1ecf1",
              padding: "8px",
              margin: "8px 0",
              listStyle: "none",
            }}
          >
            <span>{n.message}</span>
            {!n.read && (
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => markAsRead(n.id)}
              >
                Mark as Read
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
