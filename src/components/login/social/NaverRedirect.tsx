import React from 'react'
import { useNavigate } from 'react-router-dom'
import { naverLogin } from '../../../hooks/axios/Login';

export default function NaverRedirect() {
    const navigate = useNavigate();
    console.log(window.location.hash);
    const socialLogin = async() => {
        const hash = window.location.hash;
        const result = await naverLogin(hash);
        console.log(result);
        return result;
        // if (result) {
        //     navigate('/');
        // }
    }
    console.log(socialLogin());
  return (
    <div>네이버 소셜로그인 진행중 ...</div>
  )
}
