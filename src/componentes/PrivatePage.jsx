import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const PrivatePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <p>This is a private page that can only be accessed by authenticated users.</p>
    </div>
  );
};

export default PrivatePage;