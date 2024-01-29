let userscore = 0;
let compscore = 0;

  console.log("ram")
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msgg");
const play  = document.querySelector(".play");
const usernumber = document.querySelector("#usernumber");
const compnumber = document.querySelector("#compnumber");


const gencompchoice = () => {
    const option = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random()*3);
    return option[randidx];
}

const showwinner = (userwin , userchoice , compchoice) => {
      if(userwin){
        userscore++;
       usernumber.innerText = userscore;
        console.log("you win");
        msg.innerText = 'you win!';
        play.style.backgroundColor = "rgb(37,228,85)";
        
      }
      else{
        compscore++;
        compnumber.innerText = compscore;
        console.log("you lose");
        msg.innerText = "you lose";
         play.style.backgroundColor = "red";
      }
};

choices.forEach((choice) => {
 
    choice.addEventListener("click" , () => {

        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked ", userchoice);
        playgame(userchoice);
      
    });

});

const playgame = (userchoice) => {
    console.log( "userchoice = " , userchoice);

   const compchoice = gencompchoice();
   console.log("computer-choice = " , compchoice);

   if(userchoice === compchoice){
    console.log("match was DRAW");
      msg.innerText = "match was Draw";
      play.style.backgroundColor = "yellow";
      
   }
   else{
      let userwin = true;
      if(userchoice === "rock"){
        //scissor , paper ma se koi ek hoga
        userwin = compchoice === "paper" ? false : true;
      }
      else if(userchoice === "paper"){
        //rock , scissor
        userwin = compchoice === "scissor" ? false : true;
      }
      else {
        userwin = compchoice === "rock" ? false : true;
      }
      showwinner(userwin , userchoice , compchoice);
   }
   
   
}; 