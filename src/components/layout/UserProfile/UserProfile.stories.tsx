import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IUserProfile, UserProfile } from './UserProfile';
import { mockUserProfileProps } from './UserProfile.mocks';

export default {
  title: 'layout/UserProfile',
  component: UserProfile,
  args: {},
} as ComponentMeta<typeof UserProfile>;

const Template: ComponentStory<typeof UserProfile> = (args) => (
  <UserProfile {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockUserProfileProps.base,
} as IUserProfile;
