import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockLineProps } from './Line.mocks';
import Line, { LineProps } from './page';

export default {
  title: 'page/Line',
  component: Line,
  args: {},
} as ComponentMeta<typeof Line>;

const Template: ComponentStory<typeof Line> = (args) => <Line {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockLineProps.base,
} as LineProps;
