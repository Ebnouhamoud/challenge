import React from 'react';
import DemographicTable from './demographicTable/DemographicTable.js';

import UsersTable from './usersTable/UsersTable.js';

export default function Main() {
  return (
    <div className="Main">
      <UsersTable/>
      <DemographicTable/>
    </div>
  );
};
