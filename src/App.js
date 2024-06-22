
import { BrowserRouter } from "react-router-dom"
import Router from "./routes"
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const {isAuthenticated} = useAuthContext();
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
