import { useContext } from "react";
import { NotificationContext } from "../contexts/NotificationContext";

const useNotifications = () => {
  return useContext(NotificationContext);
};

export default useNotifications;
