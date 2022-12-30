import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chat, IChat } from './Chat';
import { mockChatProps } from './Chat.mocks';

export default {
  title: 'main/Chat',
  component: Chat,
  args: {},
} as ComponentMeta<typeof Chat>;

const Template: ComponentStory<typeof Chat> = (args) => <Chat {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockChatProps.base,
} as IChat;
