import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IPie, Pie } from './Pie';
import { mockPieProps } from './Pie.mocks';

export default {
  title: 'charts/Pie',
  component: Pie,
  args: {},
} as ComponentMeta<typeof Pie>;

const Template: ComponentStory<typeof Pie> = (args) => <Pie {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockPieProps.base,
} as IPie;
