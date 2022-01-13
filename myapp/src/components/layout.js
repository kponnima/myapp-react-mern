import { Routes, Route, Outlet, Link } from 'react-router-dom';
const LayoutComponent = () => (
  <div className='container'>
    <table className='table table-bordered table-striped'>
      <tbody>
        <tr>
          <td>
            <Link to='/'>List Products</Link>
          </td>
          <td>
            <Link to='/create'>Create Product</Link>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <Outlet />
  </div>
);

export default LayoutComponent;
