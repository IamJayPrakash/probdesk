import '../styles/globals.css';
import AuthProvider from '../contexts/AuthContext';
import NotificationProvider from '../contexts/NotificationContext';
import ThemeProvider from '../contexts/ThemeContext';
import MetaData from '../components/common/MetaData';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NotificationProvider>
        <ThemeProvider>
          <MetaData
            title="ProbDesk"
            description="Manage your projects efficiently with our JIRA clone."
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default MyApp;
