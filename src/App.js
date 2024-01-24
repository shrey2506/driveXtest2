import { Suspense, useEffect, useState } from 'react';
import './App.css';
import data from './data/data'

function App() {
  //To do adding filters for the and displaying lists on those categories. Didn't complete it due to time constraints
   const [filteredProducts,setFiltereedProducts]=useState(data.products.data.items)
   const [selectedCategory,setSelectedCategory]=useState('')
   const [subCategories,setSubCategories]=useState([])


   //extracting categories and subcategories and storing these in an object
   let categories=data.products.data.items.reduce((acc,item)=>{
    acc[item.category]=[...(acc[item.category ] || []) , item.subcategory]
    return acc
   },{})


   const handleCategoryClick=(category)=>{
     setSelectedCategory(category)
     setSubCategories([...new Set(categories[category])])
   }


  return (
    <div className="App">
      <div style={{
        display: 'flex'
      }}>
        <div style={{
          flex: 1,
          padding: '10px',
        }}>

          <h2>Categories</h2>
          <ul>
          {Object.keys(categories).map((category,index)=>(
            <li onClick={()=>handleCategoryClick(category)} key={index}>{category}</li>
          ))}
          </ul>
        </div>
        <div style={{
          flex: 1,
          padding: '10px',
        }}>

          <h2>Sub Categories</h2>

          <ul>
        {subCategories.map((subCategory,index)=>(
            <li key={index}>{subCategory}</li>
        )
        )}
       </ul>

        </div>

      </div>
     
  </div>
       
    
  );
}

export default App;
