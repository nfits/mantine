import React from 'react';
import { BarChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      withLegend
      legendProps={{
        formatter: (value) => {
          switch (value) {
            case 'Smartphones':
              return <>📱</>;
            case 'Laptops':
              return <>💻</>;
            case 'Tablets':
              return <>🖥️</>;
            default:
              return <>{value}</>;
          }
        },
      }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      withLegend
      legendProps={{
        formatter: (value) => {
          switch (value) {
            case 'Smartphones':
              return <>📱</>;
            case 'Laptops':
              return <>💻</>;
            case 'Tablets':
              return <>🖥️</>;
            default:
              return <>{value}</>;
          }
        },
      }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

export const legendFormatter: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
