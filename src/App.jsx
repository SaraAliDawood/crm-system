// import React from "react";
// import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// import HomePage from "./Pages/AdminPages/HomePage";
// import AdminSignINPage from "./Pages/AdminPages/AdminSignINPage";
// import AppointmentsPage from "./Pages/AdminPages/AppointmentsPage";
// import CustomerPage from "./Pages/AdminPages/CustomersPage";
// import AdminTicketsPage from "./Pages/AdminPages/AdminTicketsPage";
// import AdminDashboardPage from "./Pages/AdminPages/AdminDashboardPage";
// import AdminChatPage from "./Pages/AdminPages/AdminChatPage";
// import RigesterPage from "./Pages/UserPages/RegisterPage";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
         
//           <Route path="/" element={<HomePage />} />
//           <Route path="/admindashboard" element={<AdminDashboardPage />} />
//           <Route path="/signin" element={<AdminSignINPage />} />
//           <Route path="/appointments" element={<AppointmentsPage />} />
//           <Route path="/customers" element={<CustomerPage />} />
//           <Route path="/tickets" element={<AdminTicketsPage />} />
//           <Route path="/chat" element={<AdminChatPage />} /> ..
//           <Route path="/register" element={<RigesterPage />} />
//           
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminSignINPage from "./Pages/AdminPages/AdminSignINPage";
import HomePage from "./Pages/AdminPages/HomePage";
import RigesterPage from "./Pages/UserPages/RegisterPage";
import AdminDashboardPage from "./Pages/AdminPages/AdminDashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />         
      <Route path="/user" element={<AdminSignINPage />} />
      <Route path="/register" element={<RigesterPage />} />
      <Route path="/signin" element={<AdminSignINPage />} />
      <Route path="/admindashboard" element={<AdminDashboardPage />} />
      
    </Routes>
  );
}

export default App;
