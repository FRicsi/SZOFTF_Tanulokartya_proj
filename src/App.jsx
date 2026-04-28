import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import CardView from './components/CardView'
import CardForm from './components/CardForm'
import CategoryForm from './components/CategoryForm'
import './App.css'

const STORAGE_KEY = 'flashcards-data'

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch { /* ignore */ }
  return {
    categories: [
      { id: '1', name: 'Általános tudás', color: '#6366f1' },
      { id: '2', name: 'Programozás', color: '#10b981' },
    ],
    cards: [
      { id: '1', categoryId: '1', question: 'Mi a fotoszintézis?', answer: 'A növények fényenergiát alakítanak kémiai energiává.' },
      { id: '2', categoryId: '1', question: 'Melyik a legnagyobb óceán?', answer: 'A Csendes-óceán.' },
      { id: '3', categoryId: '2', question: 'Mi az a változó?', answer: 'Egy elnevezett memóriaterület, amely értéket tárol.' },
      { id: '4', categoryId: '2', question: 'Mit jelent a HTML rövidítés?', answer: 'HyperText Markup Language' },
    ],
  }
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

export default function App() {
  const [data, setData] = useState(loadData)
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const [view, setView] = useState('cards') // cards | addCard | editCard | addCategory | editCategory
  const [editItem, setEditItem] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [data])

  const filteredCards = selectedCategoryId
    ? data.cards.filter(c => c.categoryId === selectedCategoryId)
    : data.cards

  const selectedCategory = data.categories.find(c => c.id === selectedCategoryId)

  // Card CRUD
  function addCard(card) {
    setData(d => ({ ...d, cards: [...d.cards, { ...card, id: uid() }] }))
    setView('cards')
  }

  function updateCard(card) {
    setData(d => ({ ...d, cards: d.cards.map(c => c.id === card.id ? card : c) }))
    setView('cards')
    setEditItem(null)
  }

  function deleteCard(id) {
    setData(d => ({ ...d, cards: d.cards.filter(c => c.id !== id) }))
  }

  // Category CRUD
  function addCategory(cat) {
    const newCat = { ...cat, id: uid() }
    setData(d => ({ ...d, categories: [...d.categories, newCat] }))
    setSelectedCategoryId(newCat.id)
    setView('cards')
  }

  function updateCategory(cat) {
    setData(d => ({ ...d, categories: d.categories.map(c => c.id === cat.id ? cat : c) }))
    setView('cards')
    setEditItem(null)
  }

  function deleteCategory(id) {
    setData(d => ({
      categories: d.categories.filter(c => c.id !== id),
      cards: d.cards.filter(c => c.categoryId !== id),
    }))
    if (selectedCategoryId === id) setSelectedCategoryId(null)
  }

  function startEditCard(card) {
    setEditItem(card)
    setView('editCard')
  }

  function startEditCategory(cat) {
    setEditItem(cat)
    setView('editCategory')
  }

  return (
    <div className="app">
      <Sidebar
        categories={data.categories}
        selectedCategoryId={selectedCategoryId}
        onSelect={(id) => { setSelectedCategoryId(id); setView('cards'); setSidebarOpen(false) }}
        onAddCategory={() => { setView('addCategory'); setSidebarOpen(false) }}
        onEditCategory={startEditCategory}
        onDeleteCategory={deleteCategory}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="main">
        <header className="topbar">
          <button className="menu-btn" onClick={() => setSidebarOpen(true)} aria-label="Menü megnyitása">
            ☰
          </button>
          <h1 className="topbar-title">
            {selectedCategory ? selectedCategory.name : 'Összes kártya'}
          </h1>
          {view === 'cards' && (
            <button className="btn btn-primary" onClick={() => setView('addCard')}>
              + Új kártya
            </button>
          )}
        </header>

        <div className="content">
          {view === 'cards' && (
            <CardView
              cards={filteredCards}
              categories={data.categories}
              onEdit={startEditCard}
              onDelete={deleteCard}
            />
          )}
          {(view === 'addCard' || view === 'editCard') && (
            <CardForm
              card={view === 'editCard' ? editItem : null}
              categories={data.categories}
              defaultCategoryId={selectedCategoryId}
              onSave={view === 'editCard' ? updateCard : addCard}
              onCancel={() => { setView('cards'); setEditItem(null) }}
            />
          )}
          {(view === 'addCategory' || view === 'editCategory') && (
            <CategoryForm
              category={view === 'editCategory' ? editItem : null}
              onSave={view === 'editCategory' ? updateCategory : addCategory}
              onCancel={() => { setView('cards'); setEditItem(null) }}
            />
          )}
        </div>
      </main>
    </div>
  )
}
