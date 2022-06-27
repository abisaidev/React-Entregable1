import React, { useState } from 'react';
import Quotes from './Quotes';
import quotes from '../quotes.json'

const QuoteBox = () => {

    const colors = [ 'red', 'blue', 'green', 'violet', 'pink', 'orange' ]
    const [ randomColor, setRandomColor ] = useState(colors[Math.floor(Math.random() * colors.length)]);

    const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));

    const nextQuote = () => {
        setIndex(Math.floor(Math.random() * quotes.length))
        setRandomColor(colors[Math.floor(Math.random() * colors.length)])
    }

    return (
        <div className='quote-card'>
            <h1 style={{color: randomColor}}>quotes-app</h1>
            <Quotes
                randomColor={randomColor}
                index={index}
                nextQuote={nextQuote}
            />
        </div>
    );
};

export default QuoteBox;