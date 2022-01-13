import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductHttpService from '../apis/product-service';

const ListProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  const api = new ProductHttpService();

  useEffect(() => {
    async function getData() {
      try {
        let response = await api.getData();
        setProducts(response.data);
      } catch (e) {
        setProducts(`Error Occurred while fetching data ${e.message} `);
      }
    }
    getData();
  }, []);

  const deleteProduct = async (id) => {
    let response = await api.deleteData(id);
    if (response) {
      setMessage(`Product Deleted Successfully`);
    } else {
      setMessage(`Product Deletion failed`);
    }
  };

  if (products.length === 0) {
    return <div>No Records to display</div>;
  } else {
    return (
      <div className='container'>
        <div className='container'>
          <strong>{message}</strong>
        </div>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              {Object.keys(products[0]).map((c, i) => (
                <th key={i}>{c}</th>
              ))}
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((prd, idx) => (
              <tr key={idx}>
                {Object.keys(products[0]).map((c, i) => (
                  <td key={i}>{prd[c]}</td>
                ))}
                <td>
                  <button type='button' className='btn btn-warning'>
                    <Link to={`/edit/${prd.ProductRowId}`}>Edit</Link>
                  </button>
                </td>
                <td>
                  <input
                    type='button'
                    value='Delete'
                    className='btn btn-danger'
                    onClick={() => deleteProduct(prd.ProductRowId)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ListProductsComponent;
