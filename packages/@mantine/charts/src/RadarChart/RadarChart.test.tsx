import { patchConsoleWarn, tests } from '@mantine-tests/core';
import { RadarChart, RadarChartProps, RadarChartStylesNames } from './RadarChart';

const defaultProps: RadarChartProps = {
  data: [],
};

describe('@mantine/charts/RadarChart', () => {
  beforeAll(() => {
    patchConsoleWarn();
  });

  afterAll(() => {
    patchConsoleWarn.release();
  });

  tests.itSupportsSystemProps<RadarChartProps, RadarChartStylesNames>({
    component: RadarChart,
    props: defaultProps,
    mod: true,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/charts/RadarChart',
    stylesApiSelectors: ['root'],
  });
});