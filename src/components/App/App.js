import {
  useState,
  // useEffect 
} from 'react';
import './App.css';
import Ideas from '../Ideas/Ideas';
import Form from '../Form/Form';


function App() {
  const dummyIdeas = [
    { id: 1, title: 'Wall of Mystery', description: 'A DIY kit to create a section of your wall with random buttons. Each button triggers a surprise like a squirt of water, a funny sound, or a compliment.' },
    { id: 2, title: 'Rogue Roomba', description: 'A Roomba that, instead of cleaning, occasionally dispenses confetti or plays random sound effects.' },
    { id: 3, title: 'SockMate', description: 'A dating app, but for matching all your single socks with their long-lost partners.' },
    { id: 4, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
    { id: 5, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
    { id: 6, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
  ]
  const [ideas, setIdeas] = useState(dummyIdeas)
  // const [ideas, setIdeas] = useState([])
  console.log(ideas)
  console.log(setIdeas)

  function addIdea(newIdea) {
    setIdeas([...ideas, newIdea])
  }

  function deleteIdea(id) {
    console.log(id);
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
  }

  return (
    <main className='App'>
      <h1>IdeaBox</h1>
      <p>Ideas don't grow on trees... or do they? Plant one now! 🌳🌲🌳</p>
      <Form addIdea={addIdea} />
      <Ideas ideas={ideas} deleteIdea={deleteIdea} />
    </main>
  )
}

export default App;

  // return(
  //   <main className='App'>
  //       <h1>IdeaBox</h1>
  //       <p>Hi!</p>
  //       <Ideas name='Travis'/>
  //       {/* <Ideas potato='Parvin'/> */}
  //   </main>
  // )

  // useEffect(() => {
  //   console.log('Component did mount or update');

  //   return () => {
  //     console.log('Component will unmount');
  //   };
  // }, [ideas]);


// export default App;