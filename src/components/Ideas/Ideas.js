import './Ideas.css';
import Card from '../Card/Card';

function Ideas({ ideas, deleteIdea }){

  const ideaCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        deleteIdea={deleteIdea}
      />
    )
  })

  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}
export default Ideas;


// function Ideas(props){
//   const { name } = props;

//   return (
//     <div className='ideas-container'>
//       <Card />
//       <Card />
//       <Card />
//     </div>
//   )
// }

// export default Ideas;

// function Ideas(props){
//   return (
//     <h2>Hello, {props.name}!</h2>
//     // <h2>Hello, {props.potato}!</h2>
//   )
// }

// function Ideas(props){

//   // We can even destructure the props object, because it’s just a regular object!
//   const { name } = props; 

//   return (
//     <h2>Hello, {name}!</h2>
//   )
// }


// And here’s YET ANOTHER super-fancy way to destructure: We can destructure props ON THE WAY IN. Whoa! 

// function Ideas({ name }){
//   return (
//     <h2>Hello, {name}!</h2>
//   )
//   }

// export default Ideas;