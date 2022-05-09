import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AddEdital } from "./pages/AddEdital";
import { AddProposal } from "./pages/AddProposal";
import { Dashboard } from "./pages/Dashboard";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-proposal" element={<AddProposal />} />
        <Route path="/add-edital" element={<AddEdital />} />
      </Routes>
    </Router>
  );
}
