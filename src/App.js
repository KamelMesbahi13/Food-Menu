import React, { useState } from 'react';
import Menu from './Components/Menu';
import Categories from './Components/Categories';
import Data from './Components/Data';


const allCatagories = ['all',...new Set (Data.map((item) => {
  return item.category
}
))] 

function App() {

  const [menuItems, setMenuItems] = useState(Data);
  const [categories, setCategories] = useState(allCatagories);

  const filterItems = (category) => {

    if ( category === 'all') {
      setMenuItems(Data);
      return;
    }

    const newItems = Data.filter((item) => item.category === category );
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
