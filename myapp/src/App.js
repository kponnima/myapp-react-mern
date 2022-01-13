import { Routes, Route, Outlet, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import ListProductsComponent from './components/listProducts';
import CreateProductComponent from './components/createProduct';
import EditProductComponent from './components/editProduct';
import NotFoundComponent from './components/notFound';
import LayoutComponent from './components/layout';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<LayoutComponent />}>
          <Route index element={<ListProductsComponent />} />
          <Route path='/create' element={<CreateProductComponent />} />
          <Route
            path='/edit/:productRowId'
            element={<EditProductComponent />}
          />
          <Route path='*' element={<NotFoundComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
