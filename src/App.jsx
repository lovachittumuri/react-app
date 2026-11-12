import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState(null)
  const url = 'https://fakestoreapi.com/products'
  useEffect(() => {
      axios.get(url)
      .then(response => {
              console.log(response.data)
              setData(response.data)
      })
  }, [])

  return (
    
    data ? (
      <div>
         <table border="1">
        <h1>Posts</h1>
        {data.map(post => (
       
            <tr>
              <th>
              
          <td key={post.id}>
            <h5>{post.title}</h5>
          </td></th>
          </tr>
          
        ))}
        </table>
      </div>
    ) : (
      <p>Loading...</p>
    )
  )
}

export default App;
