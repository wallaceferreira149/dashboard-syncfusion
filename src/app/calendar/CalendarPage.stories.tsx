import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockCalendarProps } from './Calendar.mocks';
import Calendar, { CalendarProps } from './page';

export default {
  title: 'page/Calendar',
  component: Calendar,
  args: {},
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockCalendarProps.base,
} as CalendarProps;
