import React from 'react'
import { 
  GridComponent, ColumnDirective,
  ColumnsDirective, Page, Selection, Edit, Sort,
  Search, Inject, Filter,
  Toolbar

} from '@syncfusion/ej2-react-grids'

import {customersData, customersGrid } from '../data/dummy'
import Header from '../components/Header'

export default function Customers() {
  return (
    <div className='m-2 md:m-10 bg-white p-2 md:p-10 rounded-3xl'>
      <Header category="Page" title="Customers" />
      <GridComponent
        id='gridcomp'
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{ allowDeleting: true, allowEditing: true}}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Sort, Filter, Edit ]} />
      </GridComponent>
    </div>
  )
}
