import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChartsHeader, IChartsHeader } from './ChartsHeader';
import { mockChartsHeaderProps } from './ChartsHeader.mocks';

export default {
  title: 'charts/ChartsHeader',
  component: ChartsHeader,
  args: {},
} as ComponentMeta<typeof ChartsHeader>;

const Template: ComponentStory<typeof ChartsHeader> = (args) => (
  <ChartsHeader {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockChartsHeaderProps.base,
} as IChartsHeader;
