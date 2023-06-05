// import React, { useState, useEffect } from 'react';
// import { PieChart } from 'react-minimal-pie-chart';

// const TableComponent = ({ fileContent }) => {
//   const [tableData, setTableData] = useState([]);
//   const [totals, setTotals] = useState({
//     field3: 0,
//     field4: 0,
//     field5: 0,
//     field6: 0
//   });

//   useEffect(() => {
//     parseFileData(fileContent);
//   }, [fileContent]);

//   useEffect(() => {
//     calculateTotals();
//   }, [tableData]);

//   const parseFileData = (data) => {
//     const lines = data.trim().split('\n');
//     const nonEmptyLines = lines.filter(line => line.trim() !== ''); // Filter out empty lines
//     const parsedData = nonEmptyLines.map((line) => {
//       const fields = line.split('|');
//       return {
//         field1: fields[0],
//         field2: fields[1],
//         field3: parseInt(fields[2]),
//         field4: parseInt(fields[3]),
//         field5: parseInt(fields[4]),
//         field6: parseInt(fields[5])
//       };
//     });
//     setTableData(parsedData);
//   };

//   const calculateTotals = () => {
//     const newTotals = {
//       field3: 0,
//       field4: 0,
//       field5: 0,
//       field6: 0
//     };

//     tableData.forEach((item) => {
//       newTotals.field3 += item.field3;
//       newTotals.field4 += item.field4;
//       newTotals.field5 += item.field5;
//       newTotals.field6 += item.field6;
//     });

//     setTotals(newTotals);
//   };

//   const pieChartData = [
//     { title: 'Closed', value: totals.field3, color: '#FF6384' },
//     { title: 'Junked', value: totals.field4, color: '#36A2EB' },
//     { title: 'Unreproducible', value: totals.field5, color: '#FFCE56' },
//     { title: 'Duplicate', value: totals.field6, color: '#4BC0C0' }
//   ];

//   const Legend = () => (
//     <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
//       {pieChartData.map((data, index) => (
//         <li key={index}>
//           <span
//             style={{
//               display: 'inline-block',
//               width: '12px',
//               height: '12px',
//               backgroundColor: data.color,
//               marginRight: '5px'
//             }}
//           ></span>
//           {data.title}: {data.value}
//         </li>
//       ))}
//     </ul>
//   );

//   return (
//     <div>
//       <h2>The Complete Bug Report</h2>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <div style={{ width: '250px', margin: '20px' }}>
//           <PieChart
//             data={pieChartData}
//             lineWidth={30}
//             label={() => null}
//           />
//         </div>
//         <div style={{ marginLeft: '20px', textAlign: 'right' }}>
//           <Legend />
//         </div>
//       </div>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Manager ID</th>
//             <th>Employee ID</th>
//             <th>Closed</th>
//             <th>Junked</th>
//             <th>Unreproducible</th>
//             <th>Duplicate</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((item, index) => (
//             <tr key={index}>
//               <td>{item.field1}</td>
//               <td>{item.field2}</td>
//               <td>{item.field3}</td>
//               <td>{item.field4}</td>
//               <td>{item.field5}</td>
//               <td>{item.field6}</td>
//             </tr>
//           ))}
//           <tr>
//             <td></td>
//             <td></td>
//             <td><strong>Total: {totals.field3}</strong></td>
//             <td><strong>Total: {totals.field4}</strong></td>
//             <td><strong>Total: {totals.field5}</strong></td>
//             <td><strong>Total: {totals.field6}</strong></td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableComponent;






// import React, { useState, useEffect } from 'react';
// import { PieChart } from 'react-minimal-pie-chart';

// const TableComponent = ({ fileContent }) => {
//   const [tableData, setTableData] = useState([]);
//   const [totals, setTotals] = useState({
//     field3: 0,
//     field4: 0,
//     field5: 0,
//     field6: 0
//   });

//   // useEffect(() => {
//   //   parseFileData(fileContent);
//   // }, [fileContent]);

//   // useEffect(() => {
//   //   calculateTotals();
//   // }, [tableData]);

//   useEffect(() => {
//     fetch('http://localhost:3001/file')
//       .then((response) => response.text())
//       .then((data) => parseFileData(data))
//       .catch((error) => console.log(error));
//   }, []);

//   const parseFileData = (data) => {
//     const lines = data.trim().split('\n');
//     const nonEmptyLines = lines.filter(line => line.trim() !== ''); // Filter out empty lines
//     const parsedData = nonEmptyLines.map((line) => {
//       const fields = line.split('|');
//       return {
//         field1: fields[0],
//         field2: fields[1],
//         field3: parseInt(fields[2]),
//         field4: parseInt(fields[3]),
//         field5: parseInt(fields[4]),
//         field6: parseInt(fields[5])
//       };
//     });
//     setTableData(parsedData);
//   };

//   useEffect(() => {
//     calculateTotals();
//   }, [tableData]);


//   const calculateTotals = () => {
//     const newTotals = {
//       field3: 0,
//       field4: 0,
//       field5: 0,
//       field6: 0
//     };

//     tableData.forEach((item) => {
//       newTotals.field3 += item.field3;
//       newTotals.field4 += item.field4;
//       newTotals.field5 += item.field5;
//       newTotals.field6 += item.field6;
//     });

//     setTotals(newTotals);
//   };

//   const pieChartData = [
//     { title: 'RMV123', value: totals.field3, color: '#FF6384' },
//     { title: 'CJUD', value: totals.field4, color: '#36A2EB' },
//     { title: 'FW', value: totals.field5, color: '#FFCE56' },
//     { title: 'REVIEW', value: totals.field6, color: '#4BC0C0' }
//   ];

//   const Legend = () => (
//     <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
//       {pieChartData.map((data, index) => (
//         <li key={index}>
//           <span
//             style={{
//               display: 'inline-block',
//               width: '12px',
//               height: '12px',
//               backgroundColor: data.color,
//               marginRight: '5px'
//             }}
//           ></span>
//           {data.title}: {data.value}
//         </li>
//       ))}
//     </ul>
//   );

//   return (
//     <div>
//       <h2>The Complete Bug Report</h2>
//       <div className="row">
//         <div className="col-md-6 d-flex justify-content-center align-items-center">
//           <div style={{ width: '250px', marginRight: '20px'}}>
//             <PieChart
//               data={pieChartData}
//               lineWidth={30}
//               label={() => null}
//             />
//           </div>
//           <div className="text-right">
//             <Legend />
//           </div>
//         </div>
//         <div className="col-md-2">
          
//         </div>
//       </div>
//       <div className="mt-5">
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Manager ID</th>
//               <th>Employee ID</th>
//               <th>RMV123</th>
//               <th>CJUD</th>
//               <th>FW</th>
//               <th>REVIEW</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.field1}</td>
//                 <td>{item.field2}</td>
//                 <td>{item.field3}</td>
//                 <td>{item.field4}</td>
//                 <td>{item.field5}</td>
//                 <td>{item.field6}</td>
//               </tr>
//             ))}
//             <tr>
//               <td></td>
//               <td></td>
//               <td><strong>Total: {totals.field3}</strong></td>
//               <td><strong>Total: {totals.field4}</strong></td>
//               <td><strong>Total: {totals.field5}</strong></td>
//               <td><strong>Total: {totals.field6}</strong></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TableComponent;








// import React, { useState, useEffect } from 'react';
// import { PieChart } from 'react-minimal-pie-chart';

// const TableComponent = ({ fileContent }) => {
//   const [tableData, setTableData] = useState([]);
//   const [totals, setTotals] = useState({
//     field3: 0,
//     field4: 0,
//     field5: 0,
//     field6: 0
//   });
//   const [sortColumn, setSortColumn] = useState(null);
//   const [sortOrder, setSortOrder] = useState('asc');

//   useEffect(() => {
//     parseFileData(fileContent);
//   }, [fileContent]);

//   useEffect(() => {
//     calculateTotals();
//   }, [tableData]);

//   const parseFileData = (data) => {
//     const lines = data.trim().split('\n');
//     const nonEmptyLines = lines.filter(line => line.trim() !== ''); // Filter out empty lines
//     const parsedData = nonEmptyLines.map((line) => {
//       const fields = line.split('|');
//       return {
//         field1: fields[0],
//         field2: fields[1],
//         field3: parseInt(fields[2]),
//         field4: parseInt(fields[3]),
//         field5: parseInt(fields[4]),
//         field6: parseInt(fields[5])
//       };
//     });
//     setTableData(parsedData);
//   };

//   const calculateTotals = () => {
//     const newTotals = {
//       field3: 0,
//       field4: 0,
//       field5: 0,
//       field6: 0
//     };

//     tableData.forEach((item) => {
//       newTotals.field3 += item.field3;
//       newTotals.field4 += item.field4;
//       newTotals.field5 += item.field5;
//       newTotals.field6 += item.field6;
//     });

//     setTotals(newTotals);
//   };

//   const sortTableData = (column) => {
//     if (sortColumn === column) {
//       // If the same column is clicked, reverse the sort order
//       setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//     } else {
//       // If a different column is clicked, set the new column and reset the sort order to ascending
//       setSortColumn(column);
//       setSortOrder('asc');
//     }

//     const sortedData = [...tableData].sort((a, b) => {
//       const aValue = a[column];
//       const bValue = b[column];
//       if (aValue < bValue) {
//         return sortOrder === 'asc' ? -1 : 1;
//       }
//       if (aValue > bValue) {
//         return sortOrder === 'asc' ? 1 : -1;
//       }
//       return 0;
//     });

//     setTableData(sortedData);
//   };

//   const pieChartData = [
//     { title: 'RMV123', value: totals.field3, color: '#FF6384' },
//     { title: 'CJUD', value: totals.field4, color: '#36A2EB' },
//     { title: 'FW', value: totals.field5, color: '#FFCE56' },
//     { title: 'REVIEW', value: totals.field6, color: '#4BC0C0' }
//   ];

//   const Legend = () => (
//     <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
//       {pieChartData.map((data, index) => (
//         <li key={index}>
//           <span
//             style={{
//               display: 'inline-block',
//               width: '12px',
//               height: '12px',
//               backgroundColor: data.color,
//               marginRight: '5px'
//             }}
//           ></span>
//           {data.title}: {data.value}
//         </li>
//       ))}
//     </ul>
//   );

//   return (
//     <div>
//       <h2>The Complete Bug Report</h2>
//       <div className="row">
//         <div className="col-md-6 d-flex justify-content-center align-items-center">
//           <div style={{ width: '250px', marginRight: '20px' }}>
//             <PieChart data={pieChartData} lineWidth={30} label={() => null} />
//           </div>
//           <div className="text-right">
//             <Legend />
//           </div>
//         </div>
//         <div className="col-md-2"></div>
//       </div>
//       <div className="mt-5">
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Manager ID</th>
//               <th>Employee ID</th>
//               <th>
//                 <button
//                   className="sort-button"
//                   onClick={() => sortTableData('field3')}
//                 >
//                   RMV123
//                 </button>
//               </th>
//               <th>
//                 <button
//                   className="sort-button"
//                   onClick={() => sortTableData('field4')}
//                 >
//                   CJUD
//                 </button>
//               </th>
//               <th>
//                 <button
//                   className="sort-button"
//                   onClick={() => sortTableData('field5')}
//                 >
//                   FW
//                 </button>
//               </th>
//               <th>
//                 <button
//                   className="sort-button"
//                   onClick={() => sortTableData('field6')}
//                 >
//                   REVIEW
//                 </button>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.field1}</td>
//                 <td>{item.field2}</td>
//                 <td>{item.field3}</td>
//                 <td>{item.field4}</td>
//                 <td>{item.field5}</td>
//                 <td>{item.field6}</td>
//               </tr>
//             ))}
//             <tr>
//               <td></td>
//               <td></td>
//               <td>
//                 <strong>Total: {totals.field3}</strong>
//               </td>
//               <td>
//                 <strong>Total: {totals.field4}</strong>
//               </td>
//               <td>
//                 <strong>Total: {totals.field5}</strong>
//               </td>
//               <td>
//                 <strong>Total: {totals.field6}</strong>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TableComponent;









import React, { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const TableComponent = () => {
  const [tableData, setTableData] = useState([]);
  const [totals, setTotals] = useState({
    field3: 0,
    field4: 0,
    field5: 0,
    field6: 0,
  });
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    fetchFileData();
  }, []);

  const fetchFileData = () => {
    fetch('http://bgl-ads-6382:3001/file')
      .then((response) => response.text())
      .then((data) => {
        parseFileData(data);
      })
      .catch((error) => console.log(error));
  };

  const parseFileData = (data) => {
    const lines = data.trim().split('\n');
    const nonEmptyLines = lines.filter((line) => line.trim() !== '');
    const parsedData = nonEmptyLines.map((line) => {
      const fields = line.split('|');
      return {
        field1: fields[0],
        field2: fields[1],
        field3: parseInt(fields[2]),
        field4: parseInt(fields[3]),
        field5: parseInt(fields[4]),
        field6: parseInt(fields[5]),
      };
    });
    setTableData(parsedData);
    calculateTotals(parsedData);
  };

  const calculateTotals = (data) => {
    const newTotals = {
      field3: 0,
      field4: 0,
      field5: 0,
      field6: 0,
    };

    data.forEach((item) => {
      newTotals.field3 += item.field3;
      newTotals.field4 += item.field4;
      newTotals.field5 += item.field5;
      newTotals.field6 += item.field6;
    });

    setTotals(newTotals);
  };

  const handleSort = (field) => {
    const sortedData = [...tableData];
    sortedData.sort((a, b) => {
      if (sortDirection === 'asc') {
        return a[field] - b[field];
      } else {
        return b[field] - a[field];
      }
    });
    setTableData(sortedData);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  const pieChartData = [
    { title: 'RMV123', value: totals.field3, color: '#FF6384' },
    { title: 'CJUD', value: totals.field4, color: '#36A2EB' },
    { title: 'FW', value: totals.field5, color: '#FFCE56' },
    { title: 'REVIEW', value: totals.field6, color: '#4BC0C0' },
  ];

  const Legend = () => (
    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
      {pieChartData.map((data, index) => (
        <li key={index}>
          <span
            style={{
              display: 'inline-block',
              width: '12px',
              height: '12px',
              backgroundColor: data.color,
              marginRight: '5px',
            }}
          ></span>
          {data.title}: {data.value}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>The Complete Bug Report</h2>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div style={{ width: '250px', marginRight: '20px' }}>
            <PieChart data={pieChartData} lineWidth={30} label={() => null} />
          </div>
          <div className="text-right">
            <Legend />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Manager ID</th>
              <th>Employee ID</th>
              <th>
                RMV123
                <button
                  className="btn btn-link"
                  onClick={() => handleSort('field3')}
                >
                  {sortDirection === 'asc' ? '▲' : '▼'}
                </button>
              </th>
              <th>
                CJUD
                <button
                  className="btn btn-link"
                  onClick={() => handleSort('field4')}
                >
                  {sortDirection === 'asc' ? '▲' : '▼'}
                </button>
              </th>
              <th>
                FW
                <button
                  className="btn btn-link"
                  onClick={() => handleSort('field5')}
                >
                  {sortDirection === 'asc' ? '▲' : '▼'}
                </button>
              </th>
              <th>
                REVIEW
                <button
                  className="btn btn-link"
                  onClick={() => handleSort('field6')}
                >
                  {sortDirection === 'asc' ? '▲' : '▼'}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.field1}</td>
                <td>{item.field2}</td>
                <td>{item.field3}</td>
                <td>{item.field4}</td>
                <td>{item.field5}</td>
                <td>{item.field6}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td>
                <strong>Total: {totals.field3}</strong>
              </td>
              <td>
                <strong>Total: {totals.field4}</strong>
              </td>
              <td>
                <strong>Total: {totals.field5}</strong>
              </td>
              <td>
                <strong>Total: {totals.field6}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
