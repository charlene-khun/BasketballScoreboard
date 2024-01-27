let scoreHome = document.getElementById("scoreH")
let scoreGuest = document.getElementById("scoreG")

let scoreG = 0
let scoreH = 0

function addOnePointHome()
{
    scoreH = scoreH + 1
    scoreHome.textContent = scoreH
}

function addTwoPointHome()
{
    scoreH = scoreH + 2
    scoreHome.textContent = scoreH
}

function addThreePointHome()
{
    scoreH = scoreH + 3
    scoreHome.textContent = scoreH
}

function addOnePointGuest()
{
    scoreG = scoreG + 1
    scoreGuest.textContent = scoreG
}

function addTwoPointGuest()
{
    scoreG = scoreG + 2
    scoreGuest.textContent = scoreG
}

function addThreePointGuest()
{
    scoreG = scoreG + 3
    scoreGuest.textContent = scoreG
}