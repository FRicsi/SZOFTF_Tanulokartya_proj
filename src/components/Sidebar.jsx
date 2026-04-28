export default function Sidebar({
  categories, selectedCategoryId, onSelect,
  onAddCategory, onEditCategory, onDeleteCategory,
  isOpen, onClose,
}) {
  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>📚 Tanulókártyák</h2>
          <button className="sidebar-close" onClick={onClose} aria-label="Bezárás">✕</button>
        </div>

        <nav className="sidebar-list">
          <button
            className={`sidebar-item ${selectedCategoryId === null ? 'active' : ''}`}
            onClick={() => onSelect(null)}
          >
            <span className="dot" style={{ background: '#94a3b8' }} />
            <span className="label">Összes kártya</span>
          </button>

          {categories.map(cat => (
            <button
              key={cat.id}
              className={`sidebar-item ${selectedCategoryId === cat.id ? 'active' : ''}`}
              onClick={() => onSelect(cat.id)}
            >
              <span className="dot" style={{ background: cat.color }} />
              <span className="label">{cat.name}</span>
              <span className="actions" onClick={e => e.stopPropagation()}>
                <button onClick={() => onEditCategory(cat)} title="Szerkesztés">✎</button>
                <button className="del" onClick={() => {
                  if (confirm(`Törlöd a "${cat.name}" kategóriát és az összes kártyáját?`)) {
                    onDeleteCategory(cat.id)
                  }
                }} title="Törlés">✕</button>
              </span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="btn btn-primary btn-block" onClick={onAddCategory}>
            + Új kategória
          </button>
        </div>
      </aside>
    </>
  )
}
