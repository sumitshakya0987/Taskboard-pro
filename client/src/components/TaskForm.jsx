import { useState } from 'react'
import api from '../services/api'

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await api.post('/tasks', { title, description })
    setTitle('')
    setDescription('')
    onTaskAdded()
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-3 bg-white shadow-sm rounded">
  <h5 className="mb-3">📝 Add New Task</h5>
  <input className="form-control mb-2" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
  <textarea className="form-control mb-2" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
  <button className="btn btn-primary w-100">Add Task</button>
</form>

  )
}
