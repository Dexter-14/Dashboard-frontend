import React, { useState, useEffect } from 'react';

const LocMetrics = () => {
  const [locData, setLocData] = useState('');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    fetch('http://bgl-ads-6382:3001/loc-metrics')
      .then((response) => response.text())
      .then((data) => setLocData(data))
      .catch((error) => console.log(error));
  }, []);

  const parseLocData = (data) => {
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
    const parsedData = lines.map((line) => {
      const fields = line.split('|');
      return {
        employee: fields[0],
        metric: parseInt(fields[1]) || 0, // Handle NaN values and set them to 0
      };
    });
    return parsedData;
  };

  const tableData = parseLocData(locData);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredTableData = tableData.filter((item) =>
    item.employee.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      <h2>Loc Metrics</h2>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Filter by Employee"
          value={filterValue}
          onChange={handleFilterChange}
        />
      </div>
      {filteredTableData.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Metric</th>
            </tr>
          </thead>
          <tbody>
            {filteredTableData.map((item, index) => (
              <tr key={index}>
                <td>{item.employee}</td>
                <td>{item.metric}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default LocMetrics;
