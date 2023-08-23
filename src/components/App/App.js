import  { useState, 
  // useEffect 
} from 'react';
import './App.css';
import Ideas from '../Ideas/Ideas';
//import Form from '../Form/Form';


function App(){
  const dummyIdeas = [
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
    ]
  const [ideas, setIdeas] = useState(dummyIdeas)
  console.log(ideas)
  console.log(setIdeas)

  return(
    <main className='App'>
      <h1>IdeaBox</h1>
      <Ideas ideas={ideas} />
    </main>
  )

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
}

export default App;