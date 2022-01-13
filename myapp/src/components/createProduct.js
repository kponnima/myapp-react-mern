import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductHttpService from '../apis/product-service';

const CreateProductComponent = () => {
  const [product, setProduct] = useState({
    ProductRowId: 0,
    ProductId: '',
    ProductName: '',
    Manufacturer: '',
    CategoryName: '',
    Description: '',
    BasePrice: 0,
  });
  const [message, setMessage] = useState('');
  const api = new ProductHttpService();
  const categories = ['Electronics', 'Electrical', 'Home Appliances'];
  const manufacturers = [
    'MS-Electrical',
    'LS-Home Appliances',
    'LS-Electrical',
    'MS-Electronics',
    'LS-Electronics',
  ];

  let navigate = useNavigate();
  const clear = () =>
    setProduct({
      ProductRowId: 0,
      ProductId: '',
      ProductName: '',
      CategoryName: '',
      Manufacturer: '',
      Description: '',
      BasePrice: 0,
    });

  const save = async () => {
    try {
      let response = await api.postData(product);
      setProduct(response.data);
      setMessage('Record Added Successfully');
      navigate('/');
    } catch (e) {
      setMessage(`Error Occurred ${e.message}`);
    }
  };

  return (
    <div className='container'>
      <h2>Create the New Product</h2>
      <div className='container'>
        <strong>{message}</strong>
      </div>
      <div className='form-group'>
        <label>Product Row Id</label>
        <input
          type='text'
          className='form-control'
          value={product.ProductRowId}
          readOnly
        />
      </div>
      <div className='form-group'>
        <label>Product Id</label>
        <input
          type='text'
          className='form-control'
          value={product.ProductId}
          onChange={(evt) => {
            setProduct({ ...product, ProductId: evt.target.value });
          }}
        />
      </div>
      <div className='form-group'>
        <label>Product Name</label>
        <input
          type='text'
          className='form-control'
          value={product.ProductName}
          onChange={(evt) => {
            setProduct({ ...product, ProductName: evt.target.value });
          }}
        />
      </div>
      <div className='form-group'>
        <label>Category Name</label>

        <select
          type='text'
          className='form-control'
          name='CategoryName'
          value={product.CategoryName}
          onChange={(evt) => {
            setProduct({ ...product, CategoryName: evt.target.value });
          }}
        >
          <option>Select Category Name</option>
          {categories.map((v, i) => (
            <option key={i} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>
      <div className='form-group'>
        <label>Manufacturer</label>
        <select
          type='text'
          className='form-control'
          value={product.Manufacturer}
          onChange={(evt) => {
            setProduct({ ...product, Manufacturer: evt.target.value });
          }}
        >
          <option>Select Manufacturer</option>
          {manufacturers.map((v, i) => (
            <option key={i} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>
      <div className='form-group'>
        <label>Description</label>
        <input
          type='text'
          className='form-control'
          value={product.Description}
          onChange={(evt) => {
            setProduct({ ...product, Description: evt.target.value });
          }}
        />
      </div>
      <div className='form-group'>
        <label>Base Price</label>
        <input
          type='text'
          className='form-control'
          value={product.BasePrice}
          onChange={(evt) => {
            setProduct({ ...product, BasePrice: parseInt(evt.target.value) });
          }}
        />
      </div>
      <div className='form-group'>
        <input
          type='button'
          value='Clear'
          className='btn btn-warning'
          onClick={clear}
        />
        <input
          type='button'
          value='Save'
          className='btn btn-success'
          onClick={save}
        />
      </div>
    </div>
  );
};

export default CreateProductComponent;
