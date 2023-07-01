import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Weather from "./pages/Weather/Weather";
import WeatherDetail from "./pages/WeatherDetail/WeatherDetail";
import Layout from "./components/UI/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/weather" />} exact />
        <Route path="/weather" element={<Weather />} exact></Route>
        <Route path="/weather/:weatherID" element={<WeatherDetail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
