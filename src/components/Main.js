import '../App.css';
import bruschetta from '../restauranfood.jpg'

function Main() {
    return (
        <main>
            <div className='heroSection'>
                <div className='heroText'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </div>
                <div className='heroImage'>
                    <img src={bruschetta} alt="Restaurant Food"/>
                </div>
            </div>
        </main>
    )
}

export default Main