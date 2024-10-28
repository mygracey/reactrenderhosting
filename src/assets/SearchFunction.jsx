
import { data } from "../data"
import { useState } from "react"

function SeachFunction(){
  const[search,setSearch]=useState("")
  return(
    <div className="search">
      <h1>Contact Keepers</h1>

      <form>
        <input type="text" placeholder="Search for People You Know" onChange={(event)=>{setSearch(event.target.value)}}/>
      </form>

      <table border={1}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {data.filter((item)=>{
            return search.toLowerCase()==""?item:item.firstname.toLowerCase().includes(search)
          }).map((item)=>{
            return(
              <tr key={item.id}>
                <td>{item.firstname}</td>
                <td>{item.age}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default SeachFunction