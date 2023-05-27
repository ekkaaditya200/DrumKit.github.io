
//Catch the presses key and add playsound
window.addEventListener("keydown",playsound);



//Sound addition to window
function playsound(e)
{
        // console.log(e) we will get all details of key
        // console.log(e.key)  //we will get name key
        // console.log(e.keyCode)  //we will get code of key
    
        // Now select the audio according to pressed key 
        const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`); //Attibute selector
        // console.log(audio);
    
        // if(!audio) return; //Stop the function from running all together - if press multiple key at once then only one will be plyed

        audio.play(); //If we hit fastly over and over again it will take some time to play again
    
        // We can solve it by setting currentTime to 0
    
        audio.currentTime = 0; //Now it will start again whenever pressed key 
    
        // Lets animate key
        const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
        // console.log(key);
    
        //Now give extra property to button whenever it is clicked
    
        // key.setAttribute("class","playing");
        // key.addClass("class","playing"); //Vanilla JS
    
        key.classList.add("playing");
        
                                //Remove the animation  -  2 ways using stop timer or by using transition end event 
    
                                    // this.setTimeout(()=>{
                                    //     key.classList.remove("playing");
                                    // },100)
}
//by using transition end event


//Remove the animation after key is pressed

function removeTransition(e)
{
    if(e.propertyName !== 'transform') return; //skip if it is not transform property 
    // console.log(e.propertyName); //We will get all property ..  Now we will get only transform property

    //Now remove the transform property 
    this.classList.remove("playing"); //now transition will remove in 0.07s

}

const keys = document.querySelectorAll('.key');
// console.log(key) // we will get key status

keys.forEach(key => key.addEventListener('transitionend',removeTransition));