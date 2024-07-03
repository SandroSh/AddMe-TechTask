import { ChangeEvent, useState } from "react";
import { ExtraInfoType } from "../Constants/data";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { RootState } from "../state/store";
import { createUser } from "../state/user/userSlice";

import GoToIcon from '../assets/goTo.svg'
import YellowAddIcon from '../assets/yellowAddIcon.svg'
import GreenAddIcon from '../assets/greenAddIcon.svg'

const InfoAdder = ({ data }: { data: ExtraInfoType }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.userData);
  const [toggleAdd, setToggleAdd] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [detector, setDetector] = useState<'portfolio' | 'linkedin' | 'email' | 'github' | ''>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleClick = () => {
    if (inputValue && ((inputValue.startsWith('https://') && (data.inputName == 'portfolio' || data.inputName == 'linkedin' || data.inputName == 'github')) || inputValue.includes('@'))) {
      switch (data.inputName) {
        case 'portfolio':
          dispatch(createUser({ ...userData, portfolio: inputValue }));
          setDetector('portfolio');
          break;
        case 'linkedin':
          dispatch(createUser({ ...userData, linkedin: inputValue }));
          setDetector('linkedin');
          break;
        case 'email':
          dispatch(createUser({ ...userData, email: inputValue }));
          setDetector('email');
          break;
        case 'github':
          dispatch(createUser({ ...userData, github: inputValue }))
          setDetector('github');
          break;
        default:
          break;
      }

      setToggleAdd(!toggleAdd);

    } else {
      switch (data.inputName) {
        case 'portfolio':
        case 'linkedin':
        case 'github':
          toast('Please Enter valid Website Url, webpage has to be start with "https://"')
          break;
        case 'email':
          toast('Please Enter valid Email')
          break;
        default:
          break;
      }

    }
  }

  return (
    <div className='component-div mt-4'>
      <div className="info-div d-flex flex-column align-items-center justify-content-center text-white extra-info-div">
        {
          !toggleAdd ?
            <div className=" d-flex w-100 justify-content-end info-img-wrapper">
              <img src={detector ? YellowAddIcon : GreenAddIcon} alt="Add Icon" className="position-absolute" onClick={() => setToggleAdd(!toggleAdd)} />
            </div>
            :
            null
        }


        {
          !toggleAdd ?
            <div className="d-flex w-100 justify-content-evenly align-items-center">
              <h3>{detector && userData[detector] ? data.titleAfterSubmit : data.titleBeforSubmit}</h3>
              {
                detector && userData[detector] ? <img src={GoToIcon} alt="new tab icon" className="position-absolute newTabImage"/> : null
              }
            </div>
            :
            <div className="d-flex w-100 flex-column justify-content-start p-5">
              <label className="form-label fs-5 w-100 text-white ">
                <input
                  type={data.inputName === 'email' ? "email" : 'text'}
                  name={data.inputName}
                  className="form-control"
                  placeholder={data.placeholder}
                  value={inputValue}
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <button type="submit" className="btn bg-light w-50" onClick={handleClick}>Submit</button>
            </div>
        }
      </div>
      <Toaster toastOptions={{
        className: '',
        style: {
          backgroundColor: 'red',
          padding: '16px',
          color: 'white',
        },
      }} />
    </div>
  )
}

export default InfoAdder