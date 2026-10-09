import {
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Agents from "./pages/Agents";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">

      <Navbar />

      <main>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/properties"
            element={<Properties />}
          />

          <Route
            path="/properties/:id"
            element={<PropertyDetails />}
          />

          <Route
            path="/agents"
            element={<Agents />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/login"
            element={<Auth />}
          />

          <Route
            path="/signup"
            element={<Auth />}
          />

          <Route
            path="*"
            element={<Home />}
          />
          <Route 
          path="/favourites" 
          element={<Favourites />} 
          />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;