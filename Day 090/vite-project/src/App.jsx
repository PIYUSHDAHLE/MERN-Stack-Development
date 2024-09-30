import React from 'react'


const App = () => {

let title = "home page";
let pageno = 1;
let subject = ['wow','osm',3,4,5]
const detail = {
  name: "Piyush", age: 24, city: "Bhopal",
}
let tags = [  <h2>jai mata di</h2>, <h3>jai shree ram</h3>]

// String and Number are visible and rest are not visible like boolean, null, or undefined

const user =[
  {name: "Alice", age: 25, city: "London"},
  {name: "Bob", age: 30, city: "Paris"},
  {name: "Charlie", age: 28, city: "Berlin"}
]

const userlist = user.map((user,index) =>
  {
    return (
      
      <div key={index} className='border p-2 my-2 flex bg-green-500 justify-center items-center '>
    <h2>{user.name}</h2>
    <p>{user.age} years old</p>
    <p>{user.city}</p>
  </div>
  )
} 
)

// number and string only visible
  return (
    <>
    <div className='flex justify-center items-center'>

    <nav className='w-[80%] h-10 bg-red-500  flex justify-center items-center'  >
      <h1>{title} | {pageno} | {subject}</h1>
      {tags}
    </nav> 

 
    </div>
    
    {userlist}
    </>
  )
}

export default App