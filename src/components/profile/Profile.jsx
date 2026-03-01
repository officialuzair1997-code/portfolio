import React from 'react';

const Profile = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: '#f3f4f6'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        padding: '2rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        maxWidth: '600px',
        width: '100%'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: '#e5e7eb',
            margin: '0 auto 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            color: '#6b7280'
          }}>
            👤
          </div>
          <h1 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '0.5rem'
          }}>
            Talha
          </h1>
          <p style={{
            color: '#6b7280',
            fontSize: '1.125rem'
          }}>
            Web Developer
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '1rem',
            borderBottom: '1px solid #e5e7eb',
            paddingBottom: '0.5rem'
          }}>
            About Me
          </h2>
          <p style={{
            color: '#4b5563',
            lineHeight: '1.625'
          }}>
            Passionate web developer with experience in building modern web applications using React, Node.js, and other modern web technologies.
          </p>
        </div>

        <div>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '1rem',
            borderBottom: '1px solid #e5e7eb',
            paddingBottom: '0.5rem'
          }}>
            Contact Information
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: '500', color: '#4b5563' }}>Email: </span>
              <span style={{ color: '#3b82f6' }}>talha@example.com</span>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: '500', color: '#4b5563' }}>Phone: </span>
              <span>+92 300 1234567</span>
            </li>
            <li>
              <span style={{ fontWeight: '500', color: '#4b5563' }}>Location: </span>
              <span>Karachi, Pakistan</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
