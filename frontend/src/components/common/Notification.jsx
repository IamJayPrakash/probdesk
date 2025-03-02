import { useNotification } from '../../contexts/NotificationContext';

const Notification = () => {
  const { notify } = useNotification();

  return (
    <div>
      <button onClick={() => notify('This is a notification!')} className="p-2">
        Show Notification
      </button>
    </div>
  );
};

export default Notification;