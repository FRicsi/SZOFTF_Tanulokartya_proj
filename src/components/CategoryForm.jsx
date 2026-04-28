import { useState } from 'react'

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16']

export default function CategoryForm({ category, onSave, onCancel }) {
  const [name, setName] = useState(category?.name || '')
  const [color, setColor] = useState(category?.color || COLORS[0])

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) return
    onSave({ ...(category || {}), name: name.trim(), color })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>{category ? 'Kategória szerkesztése' : 'Új kategória létrehozása'}</h2>

      <div className="form-group">
        <label htmlFor="catName">Kategória neve</label>
        <input
          id="catName"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="pl. Történelem, Biológia..."
          required
        />
      </div>

      <div className="form-group">
        <label>Szín</label>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {COLORS.map(c => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c)}
              style={{
                width: 36, height: 36, borderRadius: 8, background: c, border: color === c ? '3px solid var(--text)' : '3px solid transparent',
                cursor: 'pointer', transition: 'border 0.15s',
              }}
              aria-label={`Szín: ${c}`}
            />
          ))}
        </div>
      </div>

      <div className="form-buttons">
        <button type="submit" className="btn btn-primary">
          {category ? 'Mentés' : 'Létrehozás'}
        </button>
        <button type="button" className="btn" onClick={onCancel}>Mégse</button>
      </div>
    </form>
  )
}
