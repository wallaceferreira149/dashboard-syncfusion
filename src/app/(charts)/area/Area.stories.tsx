import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockAreaProps } from './Area.mocks';
import Area, { AreaProps } from './page';

export default {
  title: 'page/Area',
  component: Area,
  args: {},
} as ComponentMeta<typeof Area>;

const Template: ComponentStory<typeof Area> = (args) => <Area {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockAreaProps.base,
} as AreaProps;
