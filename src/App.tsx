import Router from './routes';
import Header from './components/Header';
import UserPreferencesProvider from './context/userPreferences.context';

function App() {
    return (
        <>
            <UserPreferencesProvider>
                <Header />
                <Router />
            </UserPreferencesProvider>
        </>
    );
}

export default App;
