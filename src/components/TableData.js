import React from "react";

function TableData(props) {
      return (
        <table className="container ">
            <thead>
                <tr>
                    <th>Image</th>
                    <th onClick={props.sortByName}>Name</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th>DOB</th>
                </tr>
            </thead>

            <tbody className= "">
                {props.results.map(result => (
                    <tr className="table" key={result.login.uuid}>
                        <td> <img className="
                        "src={result.picture.medium} alt="" /></td>
                        
                        <td>{result.name.first + " " + result.name.last}  </td>

                        <td>{result.cell}</td>
                        <td className="email"><a href={result.email}>{result.email}</a></td>
                        <td>{result.dob.date}</td>

                    </tr>
                ))}
            </tbody>
        </table >
    )

}

export default TableData