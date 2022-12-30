import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ILineChart, LineChart } from './LineChart';
import { mockLineChartProps } from './LineChart.mocks';

export default {
  title: 'charts/LineChart',
  component: LineChart,
  args: {},
} as ComponentMeta<typeof LineChart>;

const Template: ComponentStory<typeof LineChart> = (args) => (
  <LineChart {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockLineChartProps.base,
} as ILineChart;
