import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./App.css"
import { CgAddR } from "react-icons/cg";
import { GrCheckmark } from "react-icons/gr";
function App() {
  const isAdmin = true;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigation();
  const [currentPage, setCurrentPage] = useState("games");
  useEffect(() => {
   
   
  },[currentPage]);
  return (
    <div className="app">
      <header
        className="fixed top-0 w-full bg-blue-500 text-white p-4"
        style={{
          display: "flex",
          alignItems: "center",
          height: "8%",
          justifyContent: "space-between",
        }}
      >
        <h1
          className="text-2xl font-bold"
          style={{ alignSelf: "center", height: "80%" }}
        >
          Mininig News
        </h1>
        
        <Link to={"/add/"+currentPage}>Add<CgAddR/></Link>
        {isAdmin && <Link to={"/approve/"+currentPage}>Approve<GrCheckmark/></Link>}
      </header>
      <main
        className="py-3 px-2"
        style={{ height: "82%", marginTop: "8%", marginBottom: "10%" }}
      >
        <Outlet context={{ currentPage, setCurrentPage }} />
      </main>
      <nav
        className="fixed bottom-0 w-full bg-gray-200 p-4"
        style={{ height: "10%" }}
      >
        <Footer />
      </nav>
    </div>
  );
}

export default App;
