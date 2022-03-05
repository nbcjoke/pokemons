import { Typography, Divider } from "@mui/material";

import styles from "./style.module.css";

export const ProfileLayout = ({ userData }) => {
  return (
    <div>
      <div className={styles.wrapper__title}>
        <Divider variant="fullWidth">
          <Typography variant="h4">Profile</Typography>
        </Divider>
      </div>
      <div className={styles.wrapper__description}>
        <Typography variant="h6">
          On this page u can see information about youself
        </Typography>
      </div>
      <div className={styles.profile__wrapper}>
        <div className={styles.profile__item}>Email: {userData.email}</div>
        <div className={styles.profile__item}>
          First Name: {userData.firstName}
        </div>
        <div className={styles.profile__item}>
          Last Name: {userData.lastName}
        </div>
        <div className={styles.profile__item}>Phone: {userData.phone}</div>
        <div className={styles.profile__item}>Gender: {userData.gender}</div>
      </div>
    </div>
  );
};
