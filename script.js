let userName = prompt('What is your name?')
let userVillain = prompt('Whose the villain you will be going up against?')
let userSuperpower = prompt('What is your special superpower?')
let userAdjective = prompt('enter an adjective')
let userFriendName = prompt('What is your friends name?')
let userCity = prompt('What is a name of a city?')
let userQuest = prompt('What is the name of a historical building?')
let userTime = prompt('What time is it?')
let userTimeSecond = prompt('What time is it 30 minutes previous from the other time?')
let userVehicle = prompt('What is your mode of transportation?')
console.log(userName)

let myStory = `

<p> Hello <b>${userName}</b>. You will be going up against the all mighty <b>${userVillain}</b>. Your advantage over them is that you have <b>${userSuperpower}</b> and that you have your <b>${userAdjective}</b> sidekick <b>${userFriendName}.</b> </p>

<p>Together, <b>${userName}</b> and <b>${userFriendName}</b> save the city of <b>${userCity}</b>. <b>${userVillain}</b> is looking to take over the <b>${userQuest}</b> at <b>${userTime}</b>, you and <b>${userFriendName}</b> will leave at <b>${userTimeSecond}</b> to head to the street by <b>${userQuest}</b> </p> 

<p> Your mode of transportation will be in a <b>${userVehicle}</b> which will help you both get there quicker. You and <b>${userFriendName}</b> get to the <b>${userQuest}</b> before <b>${userVillain}</b> and keep close look out to see when he arrives. </p>

<p> Eventually, <b>${userVillain}</b> arrives at the <b>${userQuest}</b> but before <b>${userVillain}</b> can do anything, you and <b>${userFriendName}</b> spring into action to help protect the <b>${userQuest}</b> and more importantly, the <b>${userCity}</b>. </p>

<p> In the end, you and <b>${userFriendName}</b> take down <b>${userVillain}</b> by suprising him and using your <b>${userSuperpower}</b> to get him on the ground and sucessfully capture <b>${userVillain}</b>. The police arrive on scene and put <b>${userVillain}</b> in handcuffs. </p>

<p> Congrats on saving the day! You and <b>${userFriendName}</b> are known all around <b>${userCity}</b> once again and recieve praise by the civilians for your work! 
<p> `

console.log(myStory)

document.getElementById('story').innerHTML = myStory 