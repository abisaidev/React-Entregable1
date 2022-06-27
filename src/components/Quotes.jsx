import quotes from '../quotes.json'

const Quotes = ({ randomColor, index, nextQuote }) => {

    document.body.style = `background-color: ${randomColor}`;
   // document.querySelector( 'h1' ).style = `color: ${randomColor}`;

    return (
        <div className='text-btn'>
            <div className="quote-text">
                <p style={{color: randomColor}}>{quotes[index].quote}</p>
                <div className="quote-author">
                    <p style={{color: randomColor}}>{quotes[index].author}</p>
                </div>
            </div>
            <div className='button-container'>
                <button onClick={nextQuote} style={{backgroundColor: randomColor}}>
                    <i className="fa-solid fa-shuffle"></i>
                </button>
            </div>
        </div>
    );
};

export default Quotes;