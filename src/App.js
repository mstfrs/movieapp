import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import Main from "./pages/Main";
import AppRouter from "./router/Router";

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
