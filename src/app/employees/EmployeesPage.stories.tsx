import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockEmployeesProps } from './Employees.mocks';
import Employees, { EmployeesProps } from './page';

export default {
  title: 'page/Employees',
  component: Employees,
  args: {},
} as ComponentMeta<typeof Employees>;

const Template: ComponentStory<typeof Employees> = (args) => (
  <Employees {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockEmployeesProps.base,
} as EmployeesProps;
