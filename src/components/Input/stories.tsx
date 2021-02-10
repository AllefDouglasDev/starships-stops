import { Story, Meta } from '@storybook/react/types-6-0'
import { withKnobs } from '@storybook/addon-knobs'

import { Input } from '.'

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
} as Meta

export const Basic: Story = () => <Input placeholder="type here..." />
