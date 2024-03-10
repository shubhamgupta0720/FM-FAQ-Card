function expandTab(questionCard) {
    const ansCard = document.getElementsByClassName("card-answer");
    const fold = document.getElementsByClassName("fold");
    const expand = document.getElementsByClassName("expand");

    for(let i = 0; i < ansCard.length; i++){
        if(i === (questionCard - 1)){
            continue;
        }
        ansCard[i].style.display = "none";
        fold[i].style.display = "none";
        expand[i].style.display = "block";
    }

    if(ansCard[questionCard - 1].style.display === "block"){
        ansCard[questionCard - 1].style.display = "none";
        fold[questionCard - 1].style.display = "none";
        expand[questionCard - 1].style.display = "block";
    }
    else {
        ansCard[questionCard - 1].style.display = "block";
        fold[questionCard - 1].style.display = "block";
        expand[questionCard - 1].style.display = "none";
    }
}