import react from 'react';
const api = {
  key: 'eba173833f513760c10257b15b322db4',
  base: 'https://api.openweathermap.org/data/2.5/'
}




function App() {
  return (
    <div className='app'>
      <main>
        <div className="search-box">
            <input type="text" className='search-bar' placeholder='Search...'/>
        </div>
       </main>
    </div>
  );
}

export default App;
