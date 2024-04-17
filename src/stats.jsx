/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Button from '@mui/material/Button';
import "./App.css";

const ToggleTableButton = () => {
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTable = () => {
    setIsTableVisible(!isTableVisible);
  };

  return (
    <div>
    {/* <button id="stats" onClick={toggleTable} style={{ padding: '8px 16px', margin: '8px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
      Model Stats
    </button> */}
    <Button variant="contained" color="success" onClick={toggleTable}>Model Stats</Button>
   
    {isTableVisible && (
      <table style={{ margin: '8px' }}>
      <tbody>
        <tr>
          <th>Height</th>
          <td>6'0 / 180cm</td>
        </tr>
        <tr>
          <th>Waist</th>
          <td>32" / 80cm</td>
        </tr>
        <tr>
          <th>Inseam</th>
          <td>32" / 80cm</td>
        </tr>
        <tr>
          <th>Shoe</th>
          <td>12 / 46EU</td>
        </tr>
        <tr>
          <th>Suit</th>
          <td>40L / 50EU</td>
        </tr>
        <tr>
          <th>Shirt</th>
          <td>15.5 34-35 / 48EU</td>
        </tr>
        <tr>
          <th>Eyes</th>
          <td>Brown</td>
        </tr>
        <tr>
          <th>Hair</th>
          <td>Brown</td>
        </tr>
      </tbody>
    </table>
    )}
  </div>
);
};

export default ToggleTableButton;
