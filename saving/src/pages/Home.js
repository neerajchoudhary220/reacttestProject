import React, { useEffect, useRef, useState } from "react";
import Header from "../components/layouts/Header";
import { Token } from "../api/Token";
import GetProfile from "./Getprofile";
import GetParks from "./GetParks";
import { user } from "../api/user";
import { logout } from "../api/Auth/Auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  Token();

  const HeadingRef = useRef()
  const [profileData, SetProfileData] = useState([]);
  const [parkdata, setParks] = useState();
  const [showdata, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();


  useEffect(() => {
    user().then((res) => {
      SetProfileData(res.data.data);
      setIsLoading(true)
    }).catch(err => console.log(err));

    setData('profile');
  }, [])
  function clickBtn() {
    HeadingRef.current.value = '2000';
    HeadingRef.current.focus()
  }
  // const HandleProfile = () => {
  //   user().then((res) => {
  //     SetProfileData(res.data.data);
  //     setIsLoading(true)
  //   }).catch(err => console.log(err));

  //   setData('profile');

  // }
  const HandleParks = () => {
    // SetProfileData(null)
    // setParks(<GetParks></GetParks>)
  }

  const HandleLogout = () => {
    logout().then((res) => {
      console.log(res)
      localStorage.removeItem('token');
      navigate('/login');
    }).catch(err => console.log(err))

  }
  return (
    <>
      <div className="d-row d-flex mx-3 mt-3">
        <div className="mr-auto d-flex">
          {/* <button className="btn btn-info mr-2">Profile</button> */}
          {/* <button className="btn btn-info mr-2" onClick={HandleParks}>Parks</button> */}
        </div>
        <button className="btn btn-danger" onClick={HandleLogout}>Logout</button>

      </div>

      <div className="container">
        <div className="m-auto">
          <div className="mt-3">
            {(showdata === 'profile') ? (<GetProfile data={profileData} loading={isLoading}></GetProfile>) : null}

          </div>
        </div>

      </div>
    </>)
}
export default Home