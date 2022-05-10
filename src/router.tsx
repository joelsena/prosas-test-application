import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AddEdital } from "./pages/Dashboard/AddEdital";
import { AddProposal } from "./pages/Dashboard/AddProposal";
import { DashboardLayout } from "./pages/Dashboard";
import { Dashboard } from "./pages/Dashboard/Dashboard";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-proposta" element={<AddProposal />} />
          <Route path="add-edital" element={<AddEdital />} />
        </Route>
      </Routes>
    </Router>
  );
}
