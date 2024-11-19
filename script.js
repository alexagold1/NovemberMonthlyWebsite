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

<p> Hello ${userName}. You will be going up against the all mighty ${userVillain}. Your advantage over them is that you have ${userSuperpower} and that you have your ${userAdjective} sidekick ${userFriendName}. </p>

<p>Together, ${userName} and ${userFriendName} save the city of ${userCity}. ${userVillain} is looking to take over the ${userQuest} at ${userTime}, you and ${userFriendName} will leave at ${userTimeSecond} to head to the street by ${userQuest} </p> 

<p> Your mode of transportation will be in a ${userVehicle} which will help you both get there quicker. You and ${userFriendName} get to the ${userQuest} before ${userVillain} and keep close look out to see when he arrives. </p>

<p> Eventually, ${userVillain} arrives at the ${userQuest} but before ${userVillain} can do anything, you and ${userFriendName} spring into action to help protect the ${userQuest} and more importantly, the ${userCity}. </p>

<p> In the end, you and ${userFriendName} take down ${userVillain} by suprising him and using your ${userSuperpower} to get him on the ground and sucessfully capture ${userVillain}. The police arrive on scene and put ${userVillain} in handcuffs. </p>

<p> Congrats on saving the day! You and ${userFriendName} are known all around ${userCity} once again and recieve praise by the civilians for your work! 
<p> `

console.log(myStory)

document.getElementById('story').innerHTML = myStory