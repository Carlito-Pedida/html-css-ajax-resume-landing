const cardText = document.querySelector('.card-text');

function getAdvice() {

    fetch('https://api.adviceslip.com/advice').then(response =>
    {
        return response.json();
    }).then(adviceData => {
        const adviceObj = adviceData.slip
        // console.log(adviceObj);
        //let cardtext = adviceObj.advice
        // console.log(cardtext);
        cardText.innerHTML = adviceObj.advice;
    })
}getAdvice()

function scaleUp(obj, size) {
    obj.style.fontSize = size
}