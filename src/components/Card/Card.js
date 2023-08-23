import './Card.css';


const Card = ({ title, description, id, deleteIdea }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={()=> deleteIdea(id)}>🗑</button>
    </div>
  )
}
export default Card;

// function Card(){
//   return (
//     <div className='card'>
//       <h3>Card!</h3>
//     </div>
//   )
// }
// export default Card;