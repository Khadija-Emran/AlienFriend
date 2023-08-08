import Card from '../components/Card';
import '../css/cardItems.css';
const CardItems = (props) =>{
    return(
     <div className='continar'>
        {
            props.aliens.map(item => {
                return <Card 
                key={item.id} 
                id={item.id} 
                name={item.name} 
                email={item.email}
                />
            })
            }
        </div>
    )
}
export default CardItems;