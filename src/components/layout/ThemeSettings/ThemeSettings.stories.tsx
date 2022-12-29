import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IThemeSettings, ThemeSettings } from './ThemeSettings';
import { mockThemeSettingsProps } from './ThemeSettings.mocks';

export default {
  title: 'layout/ThemeSettings',
  component: ThemeSettings,
  args: {},
} as ComponentMeta<typeof ThemeSettings>;

const Template: ComponentStory<typeof ThemeSettings> = (args) => (
  <ThemeSettings {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockThemeSettingsProps.base,
} as IThemeSettings;
