import React, { useEffect,useState } from 'react'
import DemographicTable from './demographicTable/DemographicTable.js'

import UsersTable from './usersTable/UsersTable.js'
import './Main.scss'

export default function Main() {
  console.log('hello ')
  return (
    <div className="Main">
      <UsersTable/>
      <DemographicTable/>
    </div>
  );
};
