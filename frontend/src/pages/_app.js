import "../styles/globals.css";
import AuthProvider from '../contexts/AuthContext';
import NotificationProvider from '../contexts/NotificationContext';
import ThemeProvider from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NotificationProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default MyApp;