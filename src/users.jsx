import axios from 'axios'
import { useEffect, useState } from 'react'

function Users() {
  const [user, setUser] = useState(null)
  const url = 'http://localhost:9191/curd/userData'
  useEffect(() => {
      axios.get(url)
      .then(response => {
              console.log(response.data)
              setUser(response.data)
      })
  }, [])

  return (
    
    user ? (
      <div>
        <h1>Users</h1>
        {user.map(user => (
          <div key={user.userId}>
            <h2>{user.userName}</h2>
          </div>
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    )
  )
}

export default users;
