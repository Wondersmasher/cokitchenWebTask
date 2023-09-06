import Home from "./Pages/Home";
import SingleFile from "./Pages/SingleFile";
import useFetch from "./hooks/useFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const { data, isLoading } = useFetch("http://3wdz.c.time4vps.cloud:3000/");
  return (
    <div className="min-w-screen flex justify-center">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home data={data} isLoading={isLoading} />}
          />
          <Route path="/file/:itemId" element={<SingleFile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
