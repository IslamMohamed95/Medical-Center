import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { GlobalProvider } from "./context/GlobalContext";

import "./App.css";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Navbar />
        <Router>
          <AppRoutes />
        </Router>
        <Footer />
      </GlobalProvider>
    </div>
  );
}

export default App;
