import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockCustomersProps } from './Customers.mocks';
import Customers, { CustomersProps } from './page';

export default {
  title: 'page/Customers',
  component: Customers,
  args: {},
} as ComponentMeta<typeof Customers>;

const Template: ComponentStory<typeof Customers> = (args) => (
  <Customers {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockCustomersProps.base,
} as CustomersProps;
