import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Cart, ICart } from './Cart';
import { mockCartProps } from './Cart.mocks';

export default {
  title: 'main/Cart',
  component: Cart,
  args: {},
} as ComponentMeta<typeof Cart>;

const Template: ComponentStory<typeof Cart> = (args) => <Cart {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockCartProps.base,
} as ICart;
