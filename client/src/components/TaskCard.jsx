import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import api from '../services/api'

export default function TaskCard({ task, index, onChange }) {
  const toggleStatus = async () => {
    const newStatus = task.status === 'Completed' ? 'Pending' : 'Completed'
    await api.patch(`/tasks/${task._id}`, { status: newStatus })
    onChange()
  }

  const handleDelete = async () => {
    await api.delete(`/tasks/${task._id}`)
    onChange()
  }

  return (
    <Draggable draggableId={task._id} index={index}>
  {(provided) => (
    <div
      className={`card mb-3 shadow-sm ${task.status === 'Completed' ? 'border-success' : 'border-warning'}`}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="card-title mb-1">{task.title}</h5>
            <p className="text-muted small">{task.description}</p>
            <span className={`badge ${task.status === 'Completed' ? 'bg-success' : 'bg-warning text-dark'}`}>
              {task.status}
            </span>
          </div>
          <div className="text-end">
            <button className="btn btn-sm btn-outline-info me-2" onClick={toggleStatus}>Toggle</button>
            <button className="btn btn-sm btn-outline-danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )}
</Draggable>

  )
}
