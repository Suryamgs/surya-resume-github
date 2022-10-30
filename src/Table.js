import React from 'react';

function Table(){
  return(
    <div className="container">
    <table className="table table-bordered table-responsive">
    <thead className="table-danger">
    <tr>
    <th>Course</th>
    <th>Institution</th>
    <th>Board/University</th>
    <th>Year of Passing</th>
    <th>Percentage/CGPA</th>
    </tr>
    </thead>
    <tbody>

    <tr className="table table-primary">
    <td>BE(ECE)</td>
    <td>RVS College of Engineerig and Technology,Coimbatore</td>
    <td>Anna University</td>
    <td>2020</td>
    <td>7.07</td>
    </tr>
    <tr className="table table-warning">
    <td>HSC</td>
    <td>Sri Vidya Mandir Matric Hr Sec School,Palacode</td>
    <td>Tamilnadu state board</td>
    <td>2016</td>
    <td>84.25</td>
    </tr>
    <tr className="table table-info">
    <td>SSLC</td>
    <td>Sri Bharathi Vidyalaya Academy Matric Hr Sec School,Marandahalli</td>
    <td>Tamilnadu state board</td>
    <td>2014</td>
    <td>92.8</td>
    </tr>
    </tbody>
    </table>
    </div>
  )
}
export default Table;
