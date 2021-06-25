import React,{useState} from 'react'
import TableInput from './TableInput'

const TableRow = ({currencyRow}) => {
    return (
        <tr>
            <td>{currencyRow.ccy}/{currencyRow.base_ccy}</td>
            <td>
                <TableInput value={currencyRow.buy}/>
            </td>
            <td>
                <TableInput value={currencyRow.sale}/>
            </td>
            {/* <img src={closeIcon} alt="" /> */}
        </tr>
    )
}

export default TableRow
