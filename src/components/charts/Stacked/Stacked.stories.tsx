import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IStacked, Stacked } from './Stacked';
import { mockStackedProps } from './Stacked.mocks';

export default {
  title: 'charts/Stacked',
  component: Stacked,
  args: {},
} as ComponentMeta<typeof Stacked>;

const Template: ComponentStory<typeof Stacked> = (args) => (
  <Stacked {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockStackedProps.base,
} as IStacked;
