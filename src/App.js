import React, { createContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { CgAddR } from "react-icons/cg";
import { GrCheckmark } from "react-icons/gr";
function App() {
  const isAdmin = true;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigation();
  const [currentPage, setCurrentPage] = useState("games");
  useEffect(() => {}, [currentPage]);
  return (
    <div className="app">
     {currentPage!=="NA"&&<header
        className="fixed top-0 w-full text-white px-4"
        style={{
          display: "flex",
          height: "8%",
          justifyContent: "space-between",
        }}
      >
        {/* <h1
          className="text-2xl font-bold"
          style={{ alignSelf: "center", height: "80%" }}
        >
          Mininig News
        </h1> */}

        
        {isAdmin && (
          <Link to={"/approve/" + currentPage} className="text-red-500 rounded">
            <GrCheckmark />
          </Link>
        )}
        <Link
          className="text-red-500"
          to={"/add/" + currentPage}
          title="Add Item"
        >
          
          <CgAddR className="inline mr-1"/>
        </Link>
      </header>}
      <main
        className="py-3 px-2 bg-black"
        style={{ height: "82%", marginBottom: "10%" }}
      >
        <Outlet context={{ currentPage, setCurrentPage }} />
      </main>
      <nav className="fixed bottom-0 w-full " style={{ height: "10%" }}>
        <Footer currentPage={currentPage} />
      </nav>
    </div>
  );
}
export default App;
