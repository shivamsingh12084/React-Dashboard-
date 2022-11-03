import React from 'react'
import { 
  GridComponent, ColumnDirective,
  ColumnsDirective, Page, Search, Inject,
  Toolbar

} from '@syncfusion/ej2-react-grids'

import {contextMenuItems, ordersGrid, employeesData, employeesGrid } from '../data/dummy'
import Header from '../components/Header'

export default function Employees() {
  return (
    <div className='m-2 md:m-10 mt-24 bg-white p-2 md:p-10 rounded-3xl'>
      <Header category="Page" title="Employe" />
      <GridComponent
        id='gridcomp'
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar ]} />
      </GridComponent>
    </div>
  )
}
