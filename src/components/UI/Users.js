import styles from "./Users.module.css";

export default function Users({ users, width, height, offset, overlap }) {
  const renderUsers = users.length > 4 ? users.slice(0, 4) : users;
  const count = users.length > 4 ? users.length - 4 : 0;

  const usersObj = {
    User1: "/assets/images/User1.png",
    User2: "/assets/images/User2.png",
    User3: "/assets/images/User3.png",
    User4: "/assets/images/User4.png",
    User5: "/assets/images/User5.png",
  };

  return (
    <div className={styles.usersList}>
      {renderUsers.map((user, idx) => {
        const styles =
          overlap === "right"
            ? {
                zIndex: 20 - idx,
                marginLeft: offset === "4" ? "-4px" : "-8px",
              }
            : {
                zIndex: 20 + idx,
                marginRight: offset === "4" ? "-4px" : "-8px",
              };
        return (
          <img
            src={usersObj[user]}
            alt={user}
            className={styles.profile}
            width={width}
            height={height}
            style={styles}
            key={user}
          />
        );
      })}
      {count !== 0 && (
        <span className={styles.count} style={{ width: width, height: height }}>
          +{count}
        </span>
      )}
    </div>
  );
}
