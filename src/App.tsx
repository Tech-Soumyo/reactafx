import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./components/custom/mainPage";
import ReadPage from "./components/custom/ReadPage";

function App() {
  return (
    <>
      {/* <SplashCursor /> */}
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/read" element={<ReadPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
