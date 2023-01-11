import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ToolTip, ToolTipProps } from './ToolTip';
import { mockToolTipProps } from './ToolTip.mocks';

export default {
  title: 'common/ToolTip',
  component: ToolTip,
  args: {},
} as ComponentMeta<typeof ToolTip>;

const Template: ComponentStory<typeof ToolTip> = (args) => (
  <ToolTip {...args}></ToolTip>
);

export const Base = Template.bind({});

Base.args = {
  ...mockToolTipProps.base,
} as ToolTipProps;
