import { ComponentMeta, ComponentStory } from '@storybook/react';
import Stacked, { StackedProps } from './page';
import { mockStackedProps } from './Stacked.mocks';

export default {
  title: 'page/Stacked',
  component: Stacked,
  args: {},
} as ComponentMeta<typeof Stacked>;

const Template: ComponentStory<typeof Stacked> = (args) => (
  <Stacked {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockStackedProps.base,
} as StackedProps;
