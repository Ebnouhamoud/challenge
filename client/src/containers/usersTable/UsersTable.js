import React, { useEffect, useState } from 'react'
import Table from '../../components/table/Table.js'
import apiService from '../../services/apiService.js'


export default function UsersTable() {
  const headerList = ['Username','Age'];
  const [usersList, setUsersList] = useState([]);

  useEffect(()=> {
    apiService.getUsers().then(users => setUsersList(users));
  },[]);

  return (
    <div className="UsersTable">
      <h2>All Users</h2>
      <h3>Users and their age</h3>
      <Table headerList={headerList}  bodyData={usersList}/>
    </div>
  );
};
