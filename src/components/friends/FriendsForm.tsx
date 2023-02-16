import React from 'react'
import FriendsMain from './FriendsMain';
import FriendsSidebar from './sidebar/FriendsSidebar';

export default function FriendsForm() {
  return (
    <div className="FriendsWrapper">
      <FriendsMain />
      <FriendsSidebar />
    </div>
  );
}
