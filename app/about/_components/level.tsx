import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const Skills = () => {
  return (
    <div>
      <PieChart
        colors={[
          '#ff6384', // Red
          '#36a2eb', // Blue
          '#ffce56', // Yellow
          '#4bc0c0', // Teal
          '#9966ff', // Purple
          '#ff9f40', // Orange
          '#ffcd56', // Light Yellow
          '#c9cbcf', // Gray
          '#61c0bf', // Cyan
        ]}
        series={[
          {
            data: [
              { id: 0, value: 80, label: 'JAVASCRIPT' },
              { id: 1, value: 65, label: 'NODEJS' },
              { id: 2, value: 50, label: 'REACTJS' },
              { id: 3, value: 30, label: 'NEXTJS' },
              { id: 4, value: 60, label: 'POSTGRE SQL' },
              { id: 5, value: 50, label: 'MONGO DB' },
              { id: 6, value: 40, label: 'PRISMA' },
              { id: 7, value: 30, label: 'DRIZZLE' },
              { id: 8, value: 20, label: 'TYPESCRIPT' },
            ],
          },
        ]}
        width={900}
        height={600}
      />
    </div>
  );
};

export default Skills;
