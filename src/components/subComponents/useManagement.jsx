import { useState } from "react";
import { Button, Input, List, message, Modal, notification } from "antd";

const UserManager = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "John" },
    { id: 3, name: "David" },
  ]);

  const [name, setName] = useState("");
  
  const addUser = () => {
    if (!name.trim()) {
      message.error("User name cannot be empty");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: name.trim(),
    };

    setUsers((prev) => [...prev, newUser]);
    setName("");

    message.success("User added successfully");

    notification.success({
      message: "New User Created",
      description: `${newUser.name} was added to the system.`,
    });
  };

  const deleteUser = (id) => {
    Modal.confirm({
      title: "Are you sure?",
      content: "This action cannot be undone.",
      okText: "Yes, delete",
      cancelText: "Cancel",
      okType: "danger",

      onOk() {
        setUsers((prev) => prev.filter((user) => user.id !== id));
        message.success("User deleted successfully");
      },
    });
  };

  return (
    <div style={{ width: 400, margin: "50px auto" }}>
      <h2>User Manager</h2>

      <Input
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: 10 }}
      />

      <Button type="primary" onClick={addUser} block>
        Add User
      </Button>

      <List
        style={{ marginTop: 20 }}
        bordered
        dataSource={users}
        renderItem={(user) => (
          <List.Item
            actions={[
              <Button
                danger
                size="small"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </Button>,
            ]}
          >
            {user.name}
          </List.Item>
        )}
      />
    </div>
  );
};

export default UserManager;
