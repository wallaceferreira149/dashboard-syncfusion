import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, IButton } from './Button';
import { mockButtonProps } from './Button.mocks';

export default {
  title: 'common/Button',
  component: Button,
  args: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockButtonProps.base,
} as IButton;
