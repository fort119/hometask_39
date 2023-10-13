import './App.css';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <header className='header'>
          <h2>Header</h2>
        </header>
        <div className='content'>
          <aside className='nav'>
            <ul className='nav__ul'>
              <li>
                <a href = '#'>option</a>
              </li>
              <li>
                <a href = '#'>option</a>
              </li>
              <li>
                <a href = '#'>option</a>
              </li>
              <li>
                <a href = '#'>option</a>
              </li>
            </ul>
          </aside>
          <main className='main'>
            <p>Some text</p>
            <p>Some text</p>
            <p>Some text</p>
            <p>Some text</p>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
