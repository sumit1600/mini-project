import {useState} from 'react';
import './App.css';

function App() {
  const [currentLink, setCurrentLink] = useState('C++');
  const [currentPage, setCurrentPage] = useState();
  
  const data = {
    'C++' : ['Tree', 'LinkedList', 'Graph'],
    'HTML' : ['Elements', 'Tags', 'ViewPort'],
    'DSA' : ['Array', 'Object', 'Algo', 'Searching', 'Sorting'],
  };

  // const handleLink = (val) => {
  //   setCurrentLink(val);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'>
          Space for Name
        </div>
        <nav className="nav">
          {
            Object.keys(data).map((el, index) => (
              <ul className="list" key={index} onClick={() => {setCurrentLink(el); setCurrentPage('')}}>{el}</ul>
            ))
          }        
        </nav>
      </header>
      <main>
        <div className='sidebar'>
            {
              data[currentLink].map((el, index) => (
                <ul key={index} className='sidebarList' onClick={() => setCurrentPage(el)}>{el}</ul>
              )) 
            }
        </div>
        <div className='main-page'>
          <div>{currentPage}</div>
        </div>
      </main>
      <footer>@copyright Sumit</footer>
    </div>
  );
}

export default App;
