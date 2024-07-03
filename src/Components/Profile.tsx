import { useSelector } from "react-redux"
import { RootState } from "../state/store"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import InfoAdder from "./InfoAdder";
import { extraInfo } from "../Constants/data";

import EmailIcon from '../assets/email.svg'
import FacebookIcon from '../assets/facebook.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import BehanceIcon from '../assets/behance.svg'
const Profile = () => {
  const userData = useSelector((state: RootState) => state.userData);





  return (
    <main className="main-div vw-100 vh-100 px-4">
      <div className="d-flex flex-wrap justify-content-evenly align-items-center vh-100">
        <div>

          <div className="d-flex flex-column justify-content-center align-items-center profile-div">
            <img src={userData.img as string} alt="" className="border-4 rounded-circle border border-light profile-img" />
            <h1 className="text-white mt-4">{userData.name}</h1>
            <h4 className="text-white">{userData.position}</h4>
            <div>

              <h4 className="text-white">{userData.address}</h4>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center icons-wrapper">
            <img src={EmailIcon} alt="Email Logo" />
            <img src={LinkedinIcon} alt="Linkedin Logo" />
            <img src={FacebookIcon} alt="Facebook logo" />
            <img src={BehanceIcon} alt="Behance logo" />
          </div>
        </div>

        <div>
          {
            extraInfo.map((componentInfo) => (
              <InfoAdder data={componentInfo} key={componentInfo.id} />
            ))
          }

        </div>
      </div>

    </main>
  )
}

export default Profile