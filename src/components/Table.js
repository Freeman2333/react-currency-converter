import React from 'react'
import { Table  } from 'react-bootstrap'
import TableRow from './TableRow'
const TableComponent = ({currencyArr}) => {
    return (
        <Table striped bordered hover className="mx-5" style={{width: '70%'}}>
            <thead>
                <tr>
                <th>Currency</th>
                <th>Buy</th>
                <th>Sell</th>
                </tr>
            </thead>
            <tbody>
                {currencyArr.map(row=>{
                    return <TableRow key={row.ccy} currencyRow={row}/>
                })}
            </tbody>
        </Table>
    )
}

export default TableComponent
