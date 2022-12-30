import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockBarProps } from './Bar.mocks';
import Bar, { BarProps } from './page';

export default {
  title: 'page/Bar',
  component: Bar,
  args: {},
} as ComponentMeta<typeof Bar>;

const Template: ComponentStory<typeof Bar> = (args) => <Bar {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockBarProps.base,
} as BarProps;
