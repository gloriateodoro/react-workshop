import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import AgeList from "./components/AgeList";
import { TechWomanList } from "./components/TechWomanList";
import HomePage from "./components/HomePage";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ageList" element={<AgeList />} />
        <Route path="/womenList" element={<TechWomanList />} />
      </Routes>
    </Router>
  )
}
