






// import React, { useEffect, useState } from 'react';

// const IndividualEmployeeIssues = () => {
//   const [fileData, setFileData] = useState([]);
//   const [filterValue, setFilterValue] = useState('');
//   const [fileContentFilter, setFileContentFilter] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:3001/files')
//       .then((response) => response.json())
//       .then((data) => setFileData(data))
//       .catch((error) => console.log(error));
//   }, []);

//   const getEmployeeName = (fileName) => {
//     const employeeName = fileName.split('_')[1].replace('.txt', '');
//     return employeeName ? employeeName : '';
//   };

//   const getCategory = (fileName) => {
//     const category = fileName.split('_')[0].toUpperCase();
//     return category ? category : '';
//   };

//   const handleFilterChange = (event) => {
//     setFilterValue(event.target.value);
//   };

//   const handleFileContentFilterChange = (event) => {
//     setFileContentFilter(event.target.value);
//   };

//   const filteredFileData = fileData.filter((file) =>
//     getEmployeeName(file.filename).toLowerCase().includes(filterValue.toLowerCase()) &&
//     file.content.toLowerCase().includes(fileContentFilter.toLowerCase())
//   );

//   return (
//     <div className="container mt-4">
//       <h1 className="mb-4">Individual Employee Issues</h1>
//       <div className="row mb-4">
//         <div className="col-md-6">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Filter by Employee ID"
//             value={filterValue}
//             onChange={handleFilterChange}
//           />
//         </div>
//         <div className="col-md-6">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Filter by File Content"
//             value={fileContentFilter}
//             onChange={handleFileContentFilterChange}
//           />
//         </div>
//       </div>
//       {filteredFileData.length > 0 ? (
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Employee ID</th>
//               <th>Category</th>
//               <th>File Content</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredFileData.map((file, index) => (
//               <tr key={index}>
//                 <td className="px-4">{getEmployeeName(file.filename)}</td>
//                 <td className="px-4">{getCategory(file.filename)}</td>
//                 <td className="px-4">{file.content}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data available.</p>
//       )}
//     </div>
//   );
// };

// export default IndividualEmployeeIssues;











import React, { useEffect, useState } from 'react';

const IndividualEmployeeIssues = () => {
  const [fileData, setFileData] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [fileContentFilter, setFileContentFilter] = useState('');
//   const [categoryFilter, setCategoryFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');

  useEffect(() => {
    fetch('http://localhost:3001/files')
      .then((response) => response.json())
      .then((data) => setFileData(data))
      .catch((error) => console.log(error));
  }, []);

  const getEmployeeName = (fileName) => {
    const employeeName = fileName.split('_')[1].replace('.txt', '');
    return employeeName ? employeeName : '';
  };

  const getCategory = (fileName) => {
    const category = fileName.split('_')[0].toUpperCase();
    return category ? category : '';
  };

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleFileContentFilterChange = (event) => {
    setFileContentFilter(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const filteredFileData = fileData.filter((file) =>
    getEmployeeName(file.filename).toLowerCase().includes(filterValue.toLowerCase()) &&
    file.content.toLowerCase().includes(fileContentFilter.toLowerCase()) &&
    (categoryFilter === 'ALL' || getCategory(file.filename) === categoryFilter)
  );

  const categoryOptions = ['CJUD', 'FW', 'REVIEW', 'RMV123', 'ALL'];

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Individual Employee Stats</h1>
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Employee ID"
            value={filterValue}
            onChange={handleFilterChange}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by File Content"
            value={fileContentFilter}
            onChange={handleFileContentFilterChange}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            value={categoryFilter}
            onChange={handleCategoryFilterChange}
          >
            {categoryOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      {filteredFileData.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Category</th>
              <th>File Content</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* {filteredFileData.map((file, index) => (
              <tr key={index}>
                <td className="px-4">{getEmployeeName(file.filename)}</td>
                <td className="px-4">{getCategory(file.filename)}</td>
                <td className="px-4">{file.content}</td>
              </tr>
            ))} */}
            {filteredFileData.map((file, index) => {
  const fileContentArray = file.content.split('\n');
  const uniqueFileContent = new Set(fileContentArray);
  const total = uniqueFileContent.size -1;

  return (
    <tr key={index}>
      <td className="px-4">{getEmployeeName(file.filename)}</td>
      <td className="px-4">{getCategory(file.filename)}</td>
      <td className="px-4">{file.content}</td>
      <td className="px-4">{total}</td> {/* New column for total */}
    </tr>
  );
})}

          </tbody>
        </table>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default IndividualEmployeeIssues;















// import React, { useEffect, useState } from 'react';

// const IndividualEmployeeIssues = () => {
//   const [fileData, setFileData] = useState([]);
//   const [filterValue, setFilterValue] = useState('');
//   const [fileContentFilter, setFileContentFilter] = useState('');
//   const [categoryFilter, setCategoryFilter] = useState('ALL');

//   useEffect(() => {
//     fetch('http://localhost:3001/files')
//       .then((response) => response.json())
//       .then((data) => setFileData(data))
//       .catch((error) => console.log(error));
//   }, []);

//   const getEmployeeName = (fileName) => {
//     const employeeName = fileName.split('_')[1].replace('.txt', '');
//     return employeeName ? employeeName : '';
//   };

//   const getCategory = (fileName) => {
//     const category = fileName.split('_')[0].toUpperCase();
//     return category ? category : '';
//   };

//   const handleFilterChange = (event) => {
//     setFilterValue(event.target.value);
//   };

//   const handleFileContentFilterChange = (event) => {
//     setFileContentFilter(event.target.value);
//   };

//   const handleCategoryFilterChange = (event) => {
//     setCategoryFilter(event.target.value);
//   };

//   const filteredFileData = fileData.filter(
//     (file) =>
//       getEmployeeName(file.filename).toLowerCase().includes(filterValue.toLowerCase()) &&
//       file.content.toLowerCase().includes(fileContentFilter.toLowerCase()) &&
//       (categoryFilter === 'ALL' || getCategory(file.filename) === categoryFilter)
//   );

//   const categoryOptions = ['CJUD', 'FW', 'REVIEW', 'RMV123', 'ALL'];

//   return (
//     <div className="container mt-4">
//       <h1 className="mb-4">Individual Employee Issues</h1>
//       <div className="row mb-4">
//         <div className="col-md-4">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Filter by Employee ID"
//             value={filterValue}
//             onChange={handleFilterChange}
//           />
//         </div>
//         <div className="col-md-4">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Filter by File Content"
//             value={fileContentFilter}
//             onChange={handleFileContentFilterChange}
//           />
//         </div>
//         <div className="col-md-4">
//           <div className="dropdown">
//             <button
//               className="btn btn-secondary dropdown-toggle"
//               type="button"
//               id="categoryDropdown"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               {categoryFilter} ▼
//             </button>
//             <div className="dropdown-menu" aria-labelledby="categoryDropdown">
//               {categoryOptions.map((option, index) => (
//                 <button
//                   key={index}
//                   className="dropdown-item"
//                   onClick={() => handleCategoryFilterChange({ target: { value: option } })}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {filteredFileData.length > 0 ? (
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Employee ID</th>
//               <th>Category</th>
//               <th>File Content</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredFileData.map((file, index) => (
//               <tr key={index}>
//                 <td className="px-4">{getEmployeeName(file.filename)}</td>
//                 <td className="px-4">{getCategory(file.filename)}</td>
//                 <td className="px-4">{file.content}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data available.</p>
//       )}
//     </div>
//   );
// };

// export default IndividualEmployeeIssues;














