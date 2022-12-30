import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockColorMappingProps } from './ColorMapping.mocks';
import ColorMapping, { ColorMappingProps } from './page';

export default {
  title: 'page/ColorMapping',
  component: ColorMapping,
  args: {},
} as ComponentMeta<typeof ColorMapping>;

const Template: ComponentStory<typeof ColorMapping> = (args) => (
  <ColorMapping {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockColorMappingProps.base,
} as ColorMappingProps;
