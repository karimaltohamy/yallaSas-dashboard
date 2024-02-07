import { useEffect } from "react";
import "./App.scss";
import Layout from "./layout/Layout";

function App() {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        document.querySelector(".sidebar").classList.add("remove_elemnts");
        document.querySelector(".sidebar").classList.add("close_sidebar");
        document.querySelector(".overflow_sidebar").classList.remove("active");
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    if (innerWidth < 768) {
      document.querySelector(".sidebar").classList.add("remove_elemnts");
      document.querySelector(".sidebar").classList.add("close_sidebar");
      document.querySelector(".overflow_sidebar").classList.remove("active");
    }

    // default lang
    if (localStorage.getItem("lang") == "ar") {
      document.body.classList.add("ar");
      document.body.classList.remove("en");
    } else {
      document.body.classList.add("en");
      document.body.classList.remove("ar");
    }

    if (localStorage.getItem("mode") == "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window]);

  return <Layout />;
}

export default App;
