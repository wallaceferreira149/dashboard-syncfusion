import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Notification, NotificationProps } from './Notification';
import { mockNotificationProps } from './Notification.mocks';

export default {
  title: 'common/Notification',
  component: Notification,
  args: {},
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args}></Notification>
);

export const Base = Template.bind({});

Base.args = {
  ...mockNotificationProps.base,
} as NotificationProps;
