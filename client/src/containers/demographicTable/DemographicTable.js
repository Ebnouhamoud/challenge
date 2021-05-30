import React, { useEffect, useState } from 'react';

import DropDownMenu from '../../components/dropDownMenu/DropDownMenu';
import ErrorFallback from '../../components/errorFallback/ErrorFallback';
import Table from '../../components/table/Table';
import apiService from '../../services/apiService';

export default function DemographicTable() {
  const headerList = ['Age','Count'];
  const [items,setItems] = useState([]);
  const [demographic, setDemographic] = useState([]);
  const [selectedItem,setSelectedItem] = useState(null);
  const [errorState, setErrorState] = useState(null);

  useEffect(()=> {
    apiService.getItems(setItems, setErrorState);
  },[]);
  
  useEffect(() => {
    apiService.getDemographic(selectedItem, setDemographic, setErrorState);
  },[selectedItem]);

  if(errorState) {
    return <ErrorFallback error={errorState} />
  };
  
  return (
    <div>
      <h2>Age Demographic of Users With ___</h2>
      <DropDownMenu selectItem={setSelectedItem} itemsList={items}/>
      <Table headerList={headerList}  bodyData={demographic}/>
    </div>
  );
};
