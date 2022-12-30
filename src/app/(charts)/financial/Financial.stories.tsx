import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockFinancialProps } from './Financial.mocks';
import Financial, { FinancialProps } from './page';

export default {
  title: 'page/Financial',
  component: Financial,
  args: {},
} as ComponentMeta<typeof Financial>;

const Template: ComponentStory<typeof Financial> = (args) => (
  <Financial {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockFinancialProps.base,
} as FinancialProps;
