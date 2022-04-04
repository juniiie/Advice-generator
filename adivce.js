const adviceArray = [
    'YOLO',
    'Fail early, Fail Often, but always fail forward',
    'Comparing your shortcomings against the strengths of others is a silly thing to do',
    'Take charge of your thoughts',
    'It isn' + "'" + 't what you have, or who you are, or where you are, or what you are doing that makes you happy or unhappy. It is what you think about',
    'You have to think about your past to remind you about what you want for your future',
    'Dreams, without goals are just dreams'
];




//Function Expression to generate random advice
const fncAdvice = function () {
    const randomNumber = Math.floor((Math.random() * adviceArray.length) + 1); //Returns a random number from 0-100
    const randomAdvice = adviceArray[randomNumber];
    
    console.log(randomAdvice);
    console.log(randomNumber);
    return randomAdvice;
    
}

