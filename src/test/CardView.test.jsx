import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CardView from '../components/CardView'

describe('CardView', () => {
const categories = [
    {
        id: 'cat-1',
        name: 'Programozás',
        color: '#6366f1',
    },
    ]

  const cards = [
    {
      id: '1',
      question: 'Mi a React?',
      answer: 'JavaScript könyvtár felhasználói felületek építéséhez.',
      categoryId: 'cat-1',
    },
    {
      id: '2',
      question: 'Mi a Vite?',
      answer: 'Gyors frontend build eszköz.',
      categoryId: 'cat-1',
    },
  ]

  it('TC-02 - kártya kattintásra megfordul', async () => {
    const user = userEvent.setup()

    render(
      <CardView
        cards={cards}
        categories={categories}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
      />
    )

    expect(screen.getByText('Mi a React?')).toBeInTheDocument()

    await user.click(screen.getByText('Mi a React?'))

    expect(
      screen.getByText('JavaScript könyvtár felhasználói felületek építéséhez.')
    ).toBeInTheDocument()
  })

  it('TC-03 - következő kártyára lehet lépni', async () => {
    const user = userEvent.setup()

    render(
      <CardView
        cards={cards}
        categories={categories}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
      />
    )

    expect(screen.getByText('Mi a React?')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /következő/i }))

    expect(screen.getByText('Mi a Vite?')).toBeInTheDocument()
  })
})