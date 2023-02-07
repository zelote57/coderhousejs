import './App.css';
import GetService from './Services/GetService';
import Categories from './Pages/Categories/Categories';
import Layout from './Pages/Layout/Layout'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {

  const[catego, setCatego] = useState([]);

  useEffect(() => {
    GetService().then(
      data => setCatego(data.results)
    );
  },[]);

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
      {/* <Layout/> */}
      <ItemListContainer gretting="Old Music New Souls" />
      {/* <Item src="" description="cancion" /> */}
      <Categories inputCategories = {catego}/>
    </div>
  );
}

export default App;
