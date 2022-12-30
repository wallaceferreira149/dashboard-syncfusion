import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockKanbanProps } from './Kanban.mocks';
import Kanban, { KanbanProps } from './page';

export default {
  title: 'page/Kanban',
  component: Kanban,
  args: {},
} as ComponentMeta<typeof Kanban>;

const Template: ComponentStory<typeof Kanban> = (args) => <Kanban {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockKanbanProps.base,
} as KanbanProps;
