import { useState } from "react";
import SearchFilter from "../../Components/AdminDashboard/Utilities/SearchFilter";
import SideBar from "../../Components/AdminDashboard/Utilities/SideBar";
import CustomersTable from "../../Components/AdminDashboard/customers/CustomersTable";

const CustomersPage = () => {
  const [searchId, setSearchId] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-grow bg-[#292929] p-4 overflow-hidden">
        {/* Added margin-right to account for the sidebar */}
        <SearchFilter
          setSearchId={setSearchId}
          setSortOrder={setSortOrder}
          title="العملاء"
        />
        <CustomersTable searchId={searchId} sortOrder={sortOrder} />
      </div>
      <SideBar /> {/* Sidebar now on the right */}
    </div>
  );
};

export default CustomersPage;
