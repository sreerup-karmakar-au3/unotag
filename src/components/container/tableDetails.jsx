import React from 'react'
import Pdf from "react-to-pdf"
import ReactExcel from "react-html-table-to-excel"

import '../styles/table.css'

const ref = React.createRef();

function TableDetails({ details, tableID, tableName, name }) {
    return (
        <div>
            <div className="d-flex justify-content-between mb-1">
                <div id="title">{tableName} Record</div>
                <div>
                    {
                        (details.length > 0) ? (
                            <>
                                <ReactExcel className="btn btn-warning btn-sm" table={tableID} filename={`${name}_report`} sheet="sheet1" buttonText="export Excel"/>
                                &nbsp;
                                <Pdf targetRef={ref} filename={`${name}_report.pdf`}>
                                    {({ toPdf }) => <button className="btn btn-warning btn-sm" onClick={toPdf}>Export PDF</button>}
                                </Pdf>
                            </>
                        ) : ("")
                    }
                </div>
            </div>
            <div ref={ref}>
                <table className="table table-hover" id={tableID}>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Month</th>
                            <th scope="col">Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            details.map((item, indx) => (
                                <tr key={indx}>
                                    <td>{item.month}</td>
                                    <td>{item.date}</td>
                                    <td>₹{item.amount}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableDetails;