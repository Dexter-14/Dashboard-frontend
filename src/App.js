import React, { useState } from 'react';
import TableComponent from './Table';
import IndividualEmployeeIssues from './IndividualEmployeeIssues';
import LocMetrics from './LocMetrics';

const App = () => {
  // const [fileContent, setFileContent] = useState('');
  const [activeTab, setActiveTab] = useState('summary');
  

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  // useEffect(() => {
  //   fetch('http://localhost:3001/file')
  //     .then((response) => response.text())
  //     .then((data) => setFileContent(data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">  Cisco  </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* <ul className="navbar-nav">
            <li className={`nav-item ${activeTab === 'summary' ? 'active' : ''}`}>
              <a className="nav-link" href="#" onClick={() => handleTabChange('summary')}>Summary</a>
            </li>
            <li className={`nav-item ${activeTab === 'employee-issues' ? 'active' : ''}`}>
              <a className="nav-link" href="#" onClick={() => handleTabChange('employee-issues')}>Individual Employee Stats</a>
            </li>
          </ul> */}
          <ul className="navbar-nav">
            <li className={`nav-item ${activeTab === 'summary' ? 'active' : ''}`}>
              <a className="nav-link" href="#" onClick={() => handleTabChange('summary')}>Summary</a>
            </li>
            <li className={`nav-item ${activeTab === 'employee-issues' ? 'active' : ''}`}>
              <a className="nav-link" href="#" onClick={() => handleTabChange('employee-issues')}>Individual Employee Stats</a>
            </li>
            <li className={`nav-item ${activeTab === 'loc-metrics' ? 'active' : ''}`}>
              <a className="nav-link" href="#" onClick={() => handleTabChange('loc-metrics')}>Loc Metrics</a>
            </li>
          </ul>

        </div>
      </nav>

      <div className="container">
        {activeTab === 'summary' && <TableComponent />}
        {activeTab === 'employee-issues' && <IndividualEmployeeIssues />}
        {activeTab === 'loc-metrics' && <LocMetrics />}
      </div>

    </div>
  );
};

export default App;
