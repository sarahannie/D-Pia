import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PageLayout() {
  return (
    <div className='pt-4 border-2'>
      <Outlet />
    </div>
  );
}
