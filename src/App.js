import React, { createContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { CgAddR } from "react-icons/cg";
// Function to get the user ID from URL parameters


function App() {
  const isAdmin = true;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigation();
  const [currentPage, setCurrentPage] = useState("games");
  useEffect(() => {
    // Access the Telegram Web App user data
    // const initData = window.Telegram.WebApp.initData;
    // const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;

    // // Access the user_id from initDataUnsafe
    // const userId = initDataUnsafe.user.id;

    // console.log("User ID:", userId);
    // const urlParams = new URLSearchParams(window.location.search);
    // const user = JSON.parse(urlParams.get("user")); // Extract the user JSON
    // const userId = user.id;
    // alert(userId);
  }, [currentPage]);
  return (
    <div className="app">
      {currentPage !== "NA" && (
        <header className="fixed top-0 w-full text-white px-4">
          {/* <h1
          className="text-2xl font-bold"
          style={{ alignSelf: "center", height: "80%" }}
        >
          Mininig News
        </h1> */}

          {isAdmin && (
            <Link
              className="text-red-500"
              to={"/add/" + currentPage}
              title="Add Item"
              style={{ float: "right" }}
            >
              <CgAddR className="inline mr-1" size="30px" />
            </Link>
          )}
        </header>
      )}
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
