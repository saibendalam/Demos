import Dashboard from "@/screens/dashboard/Dashboard";
import RuleManagement from "@/screens/ruleManagement/RuleManagement";
import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";

/**
 * layout component to generate our basic layout of our application
 * @returns {void}
 */
function Layout() {
  return (
    <div className="h-full w-full flex transition-all">
      <div className={`flex flex-col h-full w-full p-4`}>
        <Header />
        <div className={` h-full w-full overflow-hidden`}>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <div className="h-full w-full bg-background">
                  <Dashboard />
                </div>
              }
            />
            <Route
              path="/rulemanagement"
              element={
                <div className="h-full w-full bg-background">
                  <RuleManagement />
                </div>
              }
            />
            <Route path="/other" element={<div>other</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Layout;
