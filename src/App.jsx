import { useEffect } from "react";
import "./App.scss";
import Layout from "./layout/Layout";

function App() {
  useEffect(() => {
    if (innerWidth < 768) {
      // document.querySelector(".sidebar").classList.add("remove_elemnts");
      // document.querySelector(".sidebar").classList.add("close_sidebar");
      // document.querySelector(".content_page").classList.add("close_sidebar");
      document.querySelector(".sidebar").classList.add("remove_elemnts");
      document.querySelector(".sidebar").classList.add("close_sidebar");
      // document.querySelector(".content_page").classList.add("close_sidebar");

      console.log();
    }
  }, []);

  return <Layout />;
}

export default App;
