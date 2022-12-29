import { ComponentMeta, ComponentStory } from '@storybook/react';
import { INavbar, Navbar } from './Navbar';
import { mockNavbarProps } from './Navbar.mocks';

export default {
  title: 'layout/Navbar',
  component: Navbar,
  args: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockNavbarProps.base,
} as INavbar;
