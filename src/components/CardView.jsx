import { useState } from 'react'

export default function CardView({ cards, categories, onEdit, onDelete }) {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  if (cards.length === 0) {
    return (
      <div className="empty-state">
        <div className="emoji">🃏</div>
        <p>Nincsenek kártyák</p>
        <small>Kattints az „+ Új kártya" gombra a létrehozáshoz!</small>
      </div>
    )
  }

  const safeIndex = Math.min(index, cards.length - 1)
  const card = cards[safeIndex]
  const category = categories.find(c => c.id === card.categoryId)

  function nav(dir) {
    setFlipped(false)
    setIndex(i => {
      const next = i + dir
      if (next < 0) return cards.length - 1
      if (next >= cards.length) return 0
      return next
    })
  }

  return (
    <div className="card-container">
      <div className="card-counter">
        {safeIndex + 1} / {cards.length}
      </div>

      <div className="flashcard-wrapper" onClick={() => setFlipped(f => !f)}>
        <div className={`flashcard ${flipped ? 'flipped' : ''}`}>
          <div className="flashcard-face front">
            <span className="flashcard-label">Kérdés</span>
            {category && (
              <span className="flashcard-category" style={{ background: category.color }}>
                {category.name}
              </span>
            )}
            <p className="flashcard-text">{card.question}</p>
            <span className="flashcard-hint">Kattints a megfordításhoz</span>
          </div>
          <div className="flashcard-face back">
            <span className="flashcard-label">Válasz</span>
            <p className="flashcard-text">{card.answer}</p>
            <span className="flashcard-hint">Kattints a visszafordításhoz</span>
          </div>
        </div>
      </div>

      <div className="card-nav">
        <button onClick={() => nav(-1)} aria-label="Előző kártya">◀</button>

        <div className="progress-dots">
          {cards.map((_, i) => (
            <span key={i} className={`dot ${i === safeIndex ? 'active' : ''}`} />
          ))}
        </div>

        <button onClick={() => nav(1)} aria-label="Következő kártya">▶</button>
      </div>

      <div className="card-actions">
        <button className="btn" onClick={() => onEdit(card)}>✎ Szerkesztés</button>
        <button className="btn btn-danger" onClick={() => {
          if (confirm('Biztosan törlöd ezt a kártyát?')) {
            onDelete(card.id)
            if (safeIndex >= cards.length - 1) setIndex(Math.max(0, safeIndex - 1))
          }
        }}>✕ Törlés</button>
      </div>
    </div>
  )
}
