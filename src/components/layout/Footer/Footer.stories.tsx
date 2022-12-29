import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer, IFooter } from './Footer';
import { mockFooterProps } from './Footer.mocks';

export default {
  title: 'layout/Footer',
  component: Footer,
  args: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockFooterProps.base,
} as IFooter;
