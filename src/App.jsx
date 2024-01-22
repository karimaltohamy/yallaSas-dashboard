import { useEffect } from "react";
import "./App.scss";
import Layout from "./layout/Layout";

function App() {
  useEffect(() => {
    document.addEventListener("resize", () => {
      if (innerWidth < 768) {
        document.querySelector(".sidebar").classList.add("remove_elemnts");
        document.querySelector(".sidebar").classList.add("close_sidebar");
        document.querySelector(".overflow_sidebar").classList.remove("active");
      }
    });

    if (innerWidth < 768) {
      document.querySelector(".sidebar").classList.add("remove_elemnts");
      document.querySelector(".sidebar").classList.add("close_sidebar");
      document.querySelector(".overflow_sidebar").classList.remove("active");
    }
  }, [document]);

  return <Layout />;
}

export default App;
