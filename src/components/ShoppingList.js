import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState('')

  const [formCategory, setFormCategory] = useState('Produce')
  const [formName, setFormName] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(event) {
    setSearchTerm(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter(item => {
    if (searchTerm === '') {
      return true
    } else {
      return (item.name.includes(searchTerm))
    }
  })

  return (
    <div className="ShoppingList">
      <ItemForm formName={formName} formNameChange={setFormName} formCategory={formCategory} formCategoryChange={setFormCategory} handleNewItem={handleNewItem}/>
      <Filter onCategoryChange={handleCategoryChange} search={searchTerm} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
