import { useEffect, useState } from 'react'
import api from '../services/api'
import TaskCard from '../components/TaskCard'
import TaskForm from '../components/TaskForm'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

export default function Dashboard() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('All')

  const loadTasks = async () => {
    const res = await api.get('/tasks')
    setTasks(res.data)
  }

  useEffect(() => {
    loadTasks()
  }, [])

  const handleDragEnd = async (result) => {
    if (!result.destination) return
    const reordered = Array.from(tasks)
    const [removed] = reordered.splice(result.source.index, 1)
    reordered.splice(result.destination.index, 0, removed)
    setTasks(reordered)
    // Optional: Call API to save order
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true
    return task.status === filter
  })

  return (
   <div className="container mt-4">
  <div className="d-flex justify-content-between align-items-center mb-3">
    <h3 className="fw-bold">📌 My Tasks</h3>
    <div>
      <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => setFilter('All')}>All</button>
      <button className="btn btn-outline-success btn-sm me-2" onClick={() => setFilter('Completed')}>Completed</button>
      <button className="btn btn-outline-warning btn-sm" onClick={() => setFilter('Pending')}>Pending</button>
    </div>
  </div>

  <TaskForm onTaskAdded={loadTasks} />

  <DragDropContext onDragEnd={handleDragEnd}>
    <Droppable droppableId="taskList">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {filteredTasks.map((task, index) => (
            <TaskCard key={task._id} task={task} index={index} onChange={loadTasks} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
</div>

  )
}
