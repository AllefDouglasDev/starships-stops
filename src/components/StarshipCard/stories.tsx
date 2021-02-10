import { Story, Meta } from '@storybook/react/types-6-0'
import { withKnobs } from '@storybook/addon-knobs'

import { StarshipCard } from '.'

export default {
  title: 'StarshipCard',
  component: StarshipCard,
  decorators: [withKnobs],
} as Meta

export const Basic: Story = () => (
  <StarshipCard
    starship={{
      name: 'Some Starship',
      MGLT: 100,
    }}
    distance={278937}
  />
)
