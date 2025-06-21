import { useEffect, useState } from 'react'
import api from '../services/api'

export default function AdminDashboard() {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const res = await api.get('/admin/users')
    setUsers(res.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="container mt-4">
      <h3>All Users & Their Tasks</h3>
      {users.map(user => (
        <div key={user._id} className="mb-3 p-2 border">
          <h5>{user.email}</h5>
          <ul>
            {user.tasks.map(task => (
              <li key={task._id}>{task.title} - {task.status}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
