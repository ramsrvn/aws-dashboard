import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
// import { AuthRoute } from "./components/AuthRoute";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Buckets from "./pages/Buckets";
import WebSite from "./pages/WebSite";
import Home from "./pages/Instances"
import Register from "./pages/Register";
import AddInstance from './pages/AddInstance'
import ShowInstance from './pages/showInstance'
import AddBucket from './components/Buckets/AddBucket'
import UploadBucketInfo from './components/Buckets/UploadBucketInfo'
import FileInfo from './components/Buckets/FileInfo'

import ShowBucketInfo from './components/Buckets/ShowBucketInfo'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/*"
            element={
                <Layout></Layout>
            }
          >
            <Route index element={<Home/>}></Route>
            <Route path="Buckets" element={<Buckets></Buckets>}></Route>
            <Route path="WebSite" element={<WebSite></WebSite>}></Route>
            <Route path="AddInstance" element={<AddInstance></AddInstance>}></Route>
            <Route path="ShowInstance" element={<ShowInstance></ShowInstance>}></Route>
            <Route path="AddBucket" element={<AddBucket></AddBucket>}></Route>
            <Route path="UploadBucketInfo" element={<UploadBucketInfo></UploadBucketInfo>}></Route>
            <Route path="FileInfo" element={<FileInfo></FileInfo>}></Route>


            <Route path="ShowBucketInfo" element={<ShowBucketInfo></ShowBucketInfo>}></Route>

            
          </Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
