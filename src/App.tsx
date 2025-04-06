import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./components/custom/mainPage";
import { useEffect, useState } from "react";
import Loader from "./components/custom/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
