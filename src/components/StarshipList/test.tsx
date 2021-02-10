import { render, screen } from '@testing-library/react'

import { StarshipList } from '.'

describe('<StarshipList />', () => {
  it('should render the starship name', () => {
    render(<StarshipList starships={[{ name: 'Starship', MGLT: 10 }]} />)

    expect(
      screen.getByRole('heading', { name: /starship/i })
    ).toBeInTheDocument()
  })
})
