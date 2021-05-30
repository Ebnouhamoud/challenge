import React, { useEffect, useState } from 'react';
import ErrorFallback from '../../components/errorFallback/ErrorFallback.js';
import Table from '../../components/table/Table.js';
import apiService from '../../services/apiService.js';


export default function UsersTable() {
  const headerList = ['Username','Age'];
  const [usersList, setUsersList] = useState([]);
  const [errorState, setErrorState] = useState(null);

  useEffect(()=> {
    apiService.getUsers(setUsersList, setErrorState)
  },[]);

  if(errorState) return <ErrorFallback error = {errorState}/>
  
  return (
    <div className="UsersTable">
      <h2>All Users</h2>
      <h3>Users and their age</h3>
      <Table headerList={headerList}  bodyData={usersList}/>
    </div>
  );
};
