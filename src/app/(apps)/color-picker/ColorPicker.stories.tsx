import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockColorPickerProps } from './ColorPicker.mocks';
import ColorPicker, { ColorPickerProps } from './page';

export default {
  title: 'page/ColorPicker',
  component: ColorPicker,
  args: {},
} as ComponentMeta<typeof ColorPicker>;

const Template: ComponentStory<typeof ColorPicker> = (args) => (
  <ColorPicker {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockColorPickerProps.base,
} as ColorPickerProps;
