import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import ProviderPlanDropdown from './ProviderPlanDropdown';
import ChartComponent from './ChartComponent';
import BasicTable from "./Table";
import './BarChart.css';

const BarChart: React.FC = () => {
  const [dataA, setDataA] = useState<object>({});
  const [dataB, setDataB] = useState<object>({});
  const [providerA, setProviderA] = useState<string>('');
  const [providerB, setProviderB] = useState<string>('');
  const [planA, setPlanA] = useState<string>('');
  const [planB, setPlanB] = useState<string>('');
  const [showGraphs, setShowGraphs] = useState<boolean>(false);

  useEffect(() => {
    fetch('./planA.json')
      .then(response => response.json())
      .then(data => setDataA(data))
      .catch(error => console.error('Error fetching data A:', error));

    fetch('./planB.json')
      .then(response => response.json())
      .then(data => setDataB(data))
      .catch(error => console.error('Error fetching data B:', error));
  }, []);

  const handleCalculateClick = () => {
    setShowGraphs(true);
  };

  return (
    <>
      <div className="container">
        <div className="dropdown-container">
          <ProviderPlanDropdown
            title="Plan A"
            data={dataA}
            provider={providerA}
            plan={planA}
            handleProviderChange={setProviderA}
            handlePlanChange={setPlanA}
          />
        </div>
        <h1 className="vs">VS</h1>
        <div className="dropdown-container">
          <ProviderPlanDropdown
            title="Plan B"
            data={dataB}
            provider={providerB}
            plan={planB}
            handleProviderChange={setProviderB}
            handlePlanChange={setPlanB}
          />
        </div>
      </div>
      <BasicTable />
      <h1>Compare an estimated bill with specific usage</h1>
      
      <div className='btn-container'>
        <div className='usage'>
          Usage
        </div>
      <Button className="btn" variant="contained" onClick={handleCalculateClick} style={{ backgroundColor: '#2b8759', borderRadius: '50px' }}>Calculate</Button>
      </div>
      <ChartComponent
        providerA={providerA}
        planA={planA}
        providerB={providerB}
        planB={planB}
        dataA={dataA}
        dataB={dataB}
        showGraphs={showGraphs}
      />
    </>
  );
};

export default BarChart;
