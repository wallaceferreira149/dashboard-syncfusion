import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header, IHeader } from './Header';
import { mockHeaderProps } from './Header.mocks';

export default {
  title: 'layout/Header',
  component: Header,
  args: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockHeaderProps.base,
} as IHeader;
