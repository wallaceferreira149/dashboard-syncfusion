import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockEditorProps } from './Editor.mocks';
import Editor, { EditorProps } from './page';

export default {
  title: 'page/Editor',
  component: Editor,
  args: {},
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => <Editor {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockEditorProps.base,
} as EditorProps;
