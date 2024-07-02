import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createUser, initialState, userDataType } from '../state/user/userSlice';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

import { useNavigate } from 'react-router';
const Register = () => {
  const [formData, setFormData] = useState<userDataType>(initialState);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    type generalInfo = 'name' | 'positon' | 'address';
    setFormData({ ...formData, [e.target.name as generalInfo]: e.target.value });

  };

  const handleFileChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    }
    
    const file = new FileReader;
    file.onload = function () {
      setImagePreview(file.result);
      setFormData({ ...formData, img:file.result})
    }
    file.readAsDataURL(target.files[0]);

  };


  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (formData.name && formData.position && formData.address && formData.img) {
      dispatch(createUser(formData));
      navigate('/profile');
    } else {
      toast('Please Fill all of the input fields');
    }
  };



  return (
    <main className="main-div vw-100 vh-100 px-3">
      <div className='d-flex flex-wrap justify-content-center align-items-center vh-100'>
        <form onSubmit={handleSubmit} className='inner-div p-5'>
          {
            imagePreview &&
            <div className='d-flex justify-content-center image-wrap'>
              <img src={imagePreview as string} alt="Profile Image" className=' preview-img  border-4 rounded-circle border border-light' />
            </div>

          }
          <div className="mb-3">
            <label className="form-label fs-5 w-100 text-white ">
              Name:
              <input
                type="text"
                name="name"
                className="form-control myInput"
                value={formData.name}
                onChange={handleChange}
                placeholder='Jemal Baghashvili'

              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label fs-5 w-100 text-white">
              Position:
              <input
                type="text"
                name="position"
                className="form-control"
                value={formData.position}
                onChange={(e) => handleChange(e)}
                placeholder='Software Developer'
                required
              />
            </label>
          </div>

          <div className="mb-3">
            <label className="form-label fs-5 w-100 text-white">
              Address:
              <input
                type="text"
                name="address"
                className="form-control"
                value={formData.address}
                placeholder='Georgia'
                onChange={(e) => handleChange(e)}
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label fs-5 text-white">
              Image:
              <input
                type="file"
                name="img"
                accept="image/png, image/jpeg,"
                className="form-control"
                onChange={(e) => handleFileChange(e)}
              />
            </label>
          </div>
          <button type="submit" className="btn bg-light w-50" onClick={handleSubmit} >Submit</button>
        </form>
      </div>
      <Toaster toastOptions={{

        className: '',
        style: {
          backgroundColor: 'red',
          padding: '16px',
          color: 'white',
        },

      }} />
    </main>
  )
}

export default Register