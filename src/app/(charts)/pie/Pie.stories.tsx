import { ComponentMeta, ComponentStory } from '@storybook/react';
import Pie, { PieProps } from './page';
import { mockPieProps } from './Pie.mocks';

export default {
  title: 'page/Pie',
  component: Pie,
  args: {},
} as ComponentMeta<typeof Pie>;

const Template: ComponentStory<typeof Pie> = (args) => <Pie {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockPieProps.base,
} as PieProps;
