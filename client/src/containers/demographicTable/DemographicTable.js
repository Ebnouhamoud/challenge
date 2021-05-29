import React, { useEffect, useState } from 'react'

import DropDownMenu from '../../components/dropDownMenu/DropDownMenu'
import Table from '../../components/table/Table'
import apiService from '../../services/apiService'

export default function DemographicTable() {
  const headerList = ['Age','Count'];
  const [items,setItems] = useState([]);
  const [demographic, setDemographic] = useState([]);
  const [selectedItem,setSelectedItem] = useState(null);
  
  useEffect(()=> {
    apiService.getItems().then(res => setItems(res));
  },[]);
  
  useEffect(() => {
    apiService.getDemographic(selectedItem).then(users => setDemographic(users));
  },[selectedItem]);

  return (
    <div>
      <h2>Age Demographic of Users With ___</h2>
      <DropDownMenu selectItem={setSelectedItem} itemsList={items}/>
      <Table headerList={headerList}  bodyData={demographic}/>
    </div>
  );
};
