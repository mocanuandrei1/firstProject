const badJokes = ['Why did the deer go to the dentist? It had buck teeth.', 'Why did the computer get glasses? It wanted to improve its website.', 'Did you hear about the medieval lamp? Its a knight light.', 
'Where do learn how to make ice cream? At sundae school.'];

const randomJoke = jokesArray => {
    randomNumber = Math.floor(Math.random() * jokesArray.length);

    return jokesArray[randomNumber];
}

console.log(randomJoke(badJokes));