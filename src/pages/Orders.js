import React from 'react'
import { 
  GridComponent, ColumnDirective,
  ColumnsDirective, Resize, 
  Sort, ContextMenu,
  Filter, Page, ExcelExport, 
  PdfExport, Edit, Inject

} from '@syncfusion/ej2-react-grids'

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import Header from '../components/Header'

export default function Orders() {
  return (
    <div className='m-2 md:m-10 bg-white p-2 md:p-10 rounded-3xl'>
      <Header category="Page" title="Orders" />
      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Filter, Page, ExcelExport, PdfExport, ContextMenu, Edit ]} />
      </GridComponent>
    </div>
  )
}
