let userName = prompt('What is your name?')
let userQuest = prompt('What is your mission?')
let userVillain = prompt('Whose the villain you will be going up against?')
let userSuperpower = prompt('What is your special superpower?')
console.log(userName)

let myStory = `<p> Hello ${userName}. Your goal is to ${userQuest}. </p>

<p> You will be going up against the all mighty ${userVillain}. Your advantage over them is that you have ${userSuperpower}.</p> `
console.log(myStory)

document.getElementById('story').innerHTML = myStory