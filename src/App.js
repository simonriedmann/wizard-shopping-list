import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';




import DeleteButton from './DeleteButton'
import Header from'./Header';
import Form from './Form';
import ShoppingItem from './ShoppingItems';
import OpenTask from './OpenTask';

import loadFromLocal from './lib/loadFromLocal'
import saveToLocal from './lib/saveToLocal'

import './App.css';


function App() {
  const LOCAL_STORAGE_KEY = 'hogwartsShoppingList'
  const [shoppingItems, setShoppingItems] = useState(loadFromLocal(LOCAL_STORAGE_KEY) ?? []
  );
  
  const [openItems, setOpenItems] = useState([]);

  useEffect(()=> {saveToLocal(LOCAL_STORAGE_KEY, shoppingItems)
  }, [shoppingItems]);

  function addShoppingItem(item) {
    const newShoppingItem = { title: item, isDone: false, id: uuidv4() };
    console.log(newShoppingItem)
    setShoppingItems([...shoppingItems, newShoppingItem])
  }


  function toggleCheckbox(idToToggle) {
    const newItems = shoppingItems.map((item) => {
      if (item.id === idToToggle) {
        item.isDone = !item.isDone;
      }
      return item;
    });

       setShoppingItems(newItems);
  }

  function deleteItem(titleToLookFor) {
    const allRemainingItems = shoppingItems.filter((item) => {
    if (item.title !== titleToLookFor) {
      return true;
    }
      return false;
    })
    setShoppingItems(allRemainingItems);
  }

  function deleteAllItems() {
    setShoppingItems([])
  }

  function showOpenTasks() {
    const openTasks = shoppingItems.filter((item) => {
      if (item.isDone === false) return true
    })
    setOpenItems(openTasks)
  }

  function showAllItems() {
    setOpenItems([])
  }

  const itemsToShow = openItems.length > 0 ? openItems : shoppingItems;

  return (
    <div className="App">
      <Header title="Harry's Shopping List"/>
      <Form onCreateShoppingItem= {addShoppingItem} />

      <button onClick={showOpenTasks}>Show open tasks</button>
      <button onClick={showAllItems}>Show all items</button>


      <DeleteButton 
        deleteFunction= {deleteAllItems}
      />

      {itemsToShow.map((item) => (<ShoppingItem
       key={item.id}
       title={item.title} 
       isDone={item.isDone}
       onToggleItem={() => toggleCheckbox(item.id)}
       onDeleteIcon={() => deleteItem(item.title)}
        />))}
    </div>
  );
} 

export default App;


