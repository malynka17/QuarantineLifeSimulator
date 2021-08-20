// elements to control
const money_indicator = document.getElementById("money");
const lp_indicator = document.getElementById("learnPoints");
const skills_indicator = document.getElementById("skills");
const buyLp_button = document.getElementById("buyLp_button");
const learnNewSkill_button = document.getElementById("learnNewSkill_button"); 
const startStream_button = document.getElementById("startStream_button");
const freelance_button = document.getElementById("freelance_button");
const sendResume_button = document.getElementById("sendResume_button");
const room_button = document.getElementById("room_button");

//activities
const lpShop = document.getElementById("lpShop");
const learnSkillShop = document.getElementById("learnSkillShop");
const streamScreen = document.getElementById("streamScreen");
const freelance = document.getElementById("freelance");
const sendResume = document.getElementById("sendResume");
const room = document.getElementById("room");

const startCapital = 1000;

var money = 0;
var lp = 0; // learning points
var firstSkillOptions = ["driving", "web dev", "waiter", "streamer", "managing"];
var skills = [];

//functions
function changeActivity(roomState, lpShopState, learnSkillShopState, streamScreenState, freelanceState, sendResumeState){
    room.style.display = roomState;
    lpShop.style.display = lpShopState;
    learnSkillShop.style.display = learnSkillShopState;
    streamScreen.style.display = streamScreenState;
    freelance.style.display = freelanceState;
    sendResume.style.display = sendResumeState;
}


//ajustments before game. 
let n = Math.floor(Math.random() * firstSkillOptions.length);
skills[0] = firstSkillOptions[n];
console.log("Your start skill is " + skills[0]);
money = startCapital;
money_indicator.innerHTML = money;
lp_indicator.innerHTML = lp;
skills_indicator.innerHTML = skills;
learnNewSkill_button.style.visibility = "hidden";
room_button.style.visibility = "hidden";

if(skills.includes(firstSkillOptions[3])){
    startStream_button.style.visibility = "show";
} else{
    startStream_button.style.visibility = "hidden";
}
if(skills.includes(firstSkillOptions[1])){
    freelance_button.style.visibility = "show";
    sendResume_button.style.visibility = "show";
} else{
    freelance_button.style.visibility = "hidden";
    sendResume_button.style.visibility = "hidden";
}

changeActivity("block","none","none","none","none","none");

buyLp_button.onclick = function () {
    changeActivity("none","block","none","none","none","none"); 
    room_button.style.visibility ="visible"; 
};

room_button.onclick = function() {
    changeActivity("block","none","none","none","none","none"); 
    room_button.style.visibility ="hidden"; 
}