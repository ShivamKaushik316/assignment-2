import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import "./table.css";

interface EnergyData {
  year: string;
  electricity: string;
  gas: string;
  water: string;
}

const BasicTable = () => {
  const [energyData1, setEnergyData1] = useState<EnergyData[]>([]);
  const [energyData2, setEnergyData2] = useState<EnergyData[]>([]);

  useEffect(() => {
    fetch('./planA.json')
      .then(response => response.json())
      .then(data => setEnergyData1(data.data))
      .catch(error => console.error('Error fetching energy consumption data 1:', error));

    fetch('./planB.json')
      .then(response => response.json())
      .then(data => setEnergyData2(data.data))
      .catch(error => console.error('Error fetching energy consumption data 2:', error));
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="energy consumption table" className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={4} align="center"><b>Plan A</b></TableCell>
              <TableCell colSpan={3} align="center"><b>Plan B</b></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b>Year</b></TableCell>
              <TableCell><b>Electricity</b></TableCell>
              <TableCell><b>Gas</b></TableCell>
              <TableCell><b>Water</b></TableCell>
              <TableCell><b>Electricity</b></TableCell>
              <TableCell><b>Gas</b></TableCell>
              <TableCell><b>Water</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {energyData1.map((entry, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell>{entry.year}</TableCell>
                  <TableCell>{entry.electricity}</TableCell>
                  <TableCell>{entry.gas}</TableCell>
                  <TableCell>{entry.water}</TableCell>
                  <TableCell>{energyData2[index]?.electricity}</TableCell>
                  <TableCell>{energyData2[index]?.gas}</TableCell>
                  <TableCell>{energyData2[index]?.water}</TableCell>
                </TableRow>
               
                {index === energyData1.length - 1 && (
                  <TableRow>
                    <TableCell colSpan={7} style={{ borderBottom: '2px solid #000' }}></TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BasicTable;
