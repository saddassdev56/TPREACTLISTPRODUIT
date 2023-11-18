import { Input } from "./components/forms/input"
import { Checkbox } from "./components/forms/chekbox"

const PRODUCTS =  [ 
  {category: "fruit",price:"1$",stocked:true , name:"appe"},
  {category: "fruit",price:"1$",stocked:true , name:"mangue"},
  {category: "fruit",price:"1$",stocked:true , name:"passion"},
  {category: "vegetable",price:"1$",stocked:true , name:"spinac"},
  {category: "vegetable",price:"1$",stocked:true , name:"purpin"},
  {category: "vegetabe",price:"1$",stocked:true , name:"passs"}
]
function App() { 
 return <div className="container my-3 ">
   <SearchBar/>
 </div>
 
}
function SearchBar() {
  
  return <div>
    <div className="mb-3">
      <Input value="" onChange={() => null } placeholder="rechercher"/>
      <Checkbox id="stocked" checked={false} onChange={()=> null} label="n'afficher que les produits en stock"/>
    </div>
  </div>
}

export default App
