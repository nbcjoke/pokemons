import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { authSelector } from "../../login/selectors";
import { SIGN_IN_SUCCESS } from "../../login/actions";

import { ProfileLayout } from "../components/ProfileLayout";
export const ProfilePageContainer = () => {
  const { userData, isAuth } = useSelector(authSelector);
  console.log(userData);

  return <ProfileLayout userData={userData} isAuth={isAuth} />;
};
