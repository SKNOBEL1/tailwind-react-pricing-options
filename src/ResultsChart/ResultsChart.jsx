
import React from 'react';
import { Line, LineChart } from 'recharts';

const resultData = [
    {
      "student_id": 1,
      "name": "Arun",
      "physics": 88,
      "chemistry": 85,
      "mathematics": 90
    },
    {
      "student_id": 2,
      "name": "Rajesh",
      "physics": 92,
      "chemistry": 89,
      "mathematics": 95
    },
    {
      "student_id": 3,
      "name": "Moorthy",
      "physics": 78,
      "chemistry": 80,
      "mathematics": 85
    },
    {
      "student_id": 4,
      "name": "Raja",
      "physics": 65,
      "chemistry": 70,
      "mathematics": 68
    },
    {
      "student_id": 5,
      "name": "Usha",
      "physics": 85,
      "chemistry": 88,
      "mathematics": 90
    },
    {
      "student_id": 6,
      "name": "Priya",
      "physics": 90,
      "chemistry": 92,
      "mathematics": 95
    },
    {
      "student_id": 7,
      "name": "Kiran",
      "physics": 75,
      "chemistry": 78,
      "mathematics": 80
    },
    {
      "student_id": 8,
      "name": "Anita",
      "physics": 88,
      "chemistry": 85,
      "mathematics": 90
    },
    {
      "student_id": 9,
      "name": "Vikram",
      "physics": 70,
      "chemistry": 72,
      "mathematics": 75
    },
    {
      "student_id": 10,
      "name": "Sneha",
      "physics": 95,
      "chemistry": 98,
      "mathematics": 100
    }
  ]
  

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
             <Line dataKey="mathematics"></Line>
             <Line dataKey="chemistry" stroke='red'></Line>

            </LineChart>
            
        </div>
    );
};

export default ResultsChart;