import { render, screen } from '@testing-library/react'

import { StarshipCard } from '.'

describe('<StarshipCard />', () => {
  it('should render the starship name', () => {
    render(<StarshipCard starship={{ name: 'Starship', MGLT: 10 }} />)

    expect(
      screen.getByRole('heading', { name: /starship/i })
    ).toBeInTheDocument()
  })
})
