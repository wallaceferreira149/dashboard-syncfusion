import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockEcommerceProps } from './Ecommerce.mocks';
import Ecommerce, { EcommerceProps } from './page';

export default {
  title: 'page/Ecommerce',
  component: Ecommerce,
  args: {},
} as ComponentMeta<typeof Ecommerce>;

const Template: ComponentStory<typeof Ecommerce> = (args) => (
  <Ecommerce {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockEcommerceProps.base,
} as EcommerceProps;
