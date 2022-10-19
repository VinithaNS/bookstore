import { Routes,Route } from "react-router-dom";

import About from './components/About';
import AddBook from './components/AddBook';
import Header from './components/Header';
import Home from './components/Home';
import HomeLayout from "./components/HomeLayout";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookDetail from "./components/Book/BookDetail";
import Books from './components/Book/Books';
function App() {
  return (
    < >
      <header>
        
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </Route>
           <Route path="/homeLayout" element={<HomeLayout/>} >
          <Route index  element={<Home />}  />
          <Route path='/homeLayout/add' element={<AddBook />}  />
          <Route path='/homeLayout/books' element={<Books />}  />
          <Route path='/homeLayout/about' element={<About Us />}  />
          <Route path='/homeLayout/books/:id' element={<BookDetail />} />
          {/* <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} /> */}
           
          </Route>
          </Routes>
       
      </main>
    </>
  );
}

export default App;
