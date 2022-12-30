import { ComponentMeta, ComponentStory } from '@storybook/react';
import Pyramid, { PyramidProps } from './page';
import { mockPyramidProps } from './Pyramid.mocks';

export default {
  title: 'page/Pyramid',
  component: Pyramid,
  args: {},
} as ComponentMeta<typeof Pyramid>;

const Template: ComponentStory<typeof Pyramid> = (args) => (
  <Pyramid {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockPyramidProps.base,
} as PyramidProps;
