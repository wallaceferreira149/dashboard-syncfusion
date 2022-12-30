import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockOrdersProps } from './Orders.mocks';
import Orders, { OrdersProps } from './page';

export default {
  title: 'page/Orders',
  component: Orders,
  args: {},
} as ComponentMeta<typeof Orders>;

const Template: ComponentStory<typeof Orders> = (args) => <Orders {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockOrdersProps.base,
} as OrdersProps;
