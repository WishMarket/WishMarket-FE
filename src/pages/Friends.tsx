import React from 'react'
import Footer from '../components/footer/Footer'
import FriendsForm from '../components/friends/FriendsForm'
import Header from '../components/header/Header'

export default function Friends() {
  return (
    <div className="Friends_Container">
      <Header />
      <FriendsForm />
      <Footer />
    </div>
  );
}
