import React from 'react';
import './RoleToggle.css';

function RoleToggle({ role, setRole }) {
  return (
    <div className="role-toggle" onClick={() => setRole(role === 'admin' ? 'user' : 'admin')}>
      <div
        className={`slider ${role === 'admin' ? 'right' : 'left'}`}
      ></div>
      <span className={`label left ${role === 'user' ? 'active' : ''}`}>User</span>
      <span className={`label right ${role === 'admin' ? 'active' : ''}`}>Admin</span>
    </div>
  );
}

export default RoleToggle;
