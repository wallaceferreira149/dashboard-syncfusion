import { ComponentMeta, ComponentStory } from '@storybook/react';
import { INotification, Notification } from './Notification';
import { mockNotificationProps } from './Notification.mocks';

export default {
  title: 'layout/Notification',
  component: Notification,
  args: {},
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockNotificationProps.base,
} as INotification;
