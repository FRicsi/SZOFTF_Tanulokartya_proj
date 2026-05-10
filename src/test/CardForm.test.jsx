import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CardForm from '../components/CardForm'

const categories = [
  {
    id: 'cat-1',
    name: 'Programozás',
    color: '#6366f1',
  },
]

describe('CardForm', () => {

  it('TC-04 - új kártya létrehozása működik', async () => {
    const user = userEvent.setup()

    const onSave = vi.fn()

    render(
      <CardForm
        categories={categories}
        defaultCategoryId="cat-1"
        onSave={onSave}
        onCancel={vi.fn()}
      />
    )

    await user.type(
      screen.getByLabelText(/kérdés/i),
      'Mi az a React?'
    )

    await user.type(
      screen.getByLabelText(/válasz/i),
      'Frontend JavaScript könyvtár.'
    )

    await user.click(
      screen.getByRole('button', { name: /létrehozás|mentés/i })
    )

    expect(onSave).toHaveBeenCalled()
  })

  it('TC-04 - üres űrlap nem menthető', async () => {
    const user = userEvent.setup()

    const onSave = vi.fn()

    render(
      <CardForm
        categories={categories}
        defaultCategoryId="cat-1"
        onSave={onSave}
        onCancel={vi.fn()}
      />
    )

    await user.click(
      screen.getByRole('button', { name: /létrehozás|mentés/i })
    )

    expect(onSave).not.toHaveBeenCalled()
  })

})