import { useState } from 'react'

export default function CardForm({ card, categories, defaultCategoryId, onSave, onCancel }) {
  const [question, setQuestion] = useState(card?.question || '')
  const [answer, setAnswer] = useState(card?.answer || '')
  const [categoryId, setCategoryId] = useState(card?.categoryId || defaultCategoryId || categories[0]?.id || '')

  function handleSubmit(e) {
    e.preventDefault()
    if (!question.trim() || !answer.trim()) return
    onSave({
      ...(card || {}),
      question: question.trim(),
      answer: answer.trim(),
      categoryId,
    })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>{card ? 'Kártya szerkesztése' : 'Új kártya létrehozása'}</h2>

      <div className="form-group">
        <label htmlFor="category">Kategória</label>
        <select id="category" value={categoryId} onChange={e => setCategoryId(e.target.value)} required>
          {categories.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="question">Kérdés</label>
        <textarea
          id="question"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Írd be a kérdést..."
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="answer">Válasz</label>
        <textarea
          id="answer"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          placeholder="Írd be a választ..."
          required
        />
      </div>

      <div className="form-buttons">
        <button type="submit" className="btn btn-primary">
          {card ? 'Mentés' : 'Létrehozás'}
        </button>
        <button type="button" className="btn" onClick={onCancel}>Mégse</button>
      </div>
    </form>
  )
}
