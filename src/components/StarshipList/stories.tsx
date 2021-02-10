import { Story, Meta } from '@storybook/react/types-6-0'
import { withKnobs } from '@storybook/addon-knobs'

import { StarshipList } from '.'

export default {
  title: 'StarshipList',
  component: StarshipList,
  decorators: [withKnobs],
} as Meta

const starships = [
  {
    name: 'Starship 1',
    MGLT: 287,
  },
  {
    name: 'Starship 2',
    MGLT: 738,
  },
]

export const Basic: Story = () => <StarshipList starships={starships} />
