import { useState } from 'react';

function App() {
  const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana']);

  function handleAddFood() {
    const newFood = document.querySelector('#foodInput').value;
    document.querySelector('#foodInput').value = '';

    if (newFood !== '') {
      setFoods((f) => [...f, newFood]);
    }
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div className='p-5'>
      <h2 className='font-bold text-2xl'>List of food</h2>
      <ul>
        {foods.map((food, index) => (
          <li
            className='list-disc list-inside'
            key={index}
            onClick={() => handleRemoveFood(index)}
          >
            {food}
          </li>
        ))}
      </ul>
      <input
        className='border border-teal-500'
        type='text'
        id='foodInput'
        placeholder='Enter food name'
      />
      <br />
      <button
        className='bg-teal-800 text-white mt-2 px-4 py-2 rounded'
        onClick={handleAddFood}
      >
        Add Food
      </button>
    </div>
  );
}

export default App;
