let obsceneWords=[];

let checkIfObscene=(word)=>{
if(obsceneWords.include(word)
   return 1;
return 0;
}

degreeOfProfanity=(tweet, obsceneWords)=>{

let degreeOfProfanity=0;
let words=tweet.split(" ");
words.forEach(async function(word) {
 degree+= await checkObscene(word);
})

return degree;
}

let profanity=tweets.map(tweet=>degreeOfProfanity(tweet,obsceneWords)

)
