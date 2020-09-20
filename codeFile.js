// Assumption:
// 1.we have an array of tweets .
// 2.we have an array of obscene words to compare each word of the tweet with.
// 3.we will call the function degreeOfProfanity for each tweet.

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
