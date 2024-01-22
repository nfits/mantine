import React from 'react';
import { AreaChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
      tooltipProps={{
        formatter: (value, name) => {
          switch (name) {
            case 'Apples':
              return [value, <>🍏</>];
            case 'Oranges':
              return [value, <>🍊</>];
            case 'Tomatoes':
              return [value, <>🍅</>];
            default:
              return [value, <>{name}</>];
          }
        },
      }}
    />
  );
}
`;

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
      tooltipProps={{
        formatter: (value, name) => {
          switch (name) {
            case 'Apples':
              return [value, <>🍏</>];
            case 'Oranges':
              return [value, <>🍊</>];
            case 'Tomatoes':
              return [value, <>🍅</>];
            default:
              return [value, <>{name}</>];
          }
        },
      }}
    />
  );
}

export const tooltipFormatter: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
