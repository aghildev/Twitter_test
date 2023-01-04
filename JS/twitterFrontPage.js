const tweetPostText = document.querySelector(".tweet_post_text");
const postBoxEveryoneBtn = document.querySelector(".post_box_everyone_btn");
const midContainer = document.querySelector(".mid_container");
const rightSearchText = document.querySelector(".right_search_text");
const rightSideSearch = document.querySelector(".rightside_search");
const mainContainer = document.querySelector(".main_container");
const magnifyGlass = document.querySelector(".fa-magnifying-glass");
const userProfile = document.querySelector(".user_profile");
const logoutDtetails = document.querySelector(".logout_details");
const labelChange=document.querySelector(".label_change");
const body=document.querySelector("body");
const settingsContainer=document.querySelector(".settings");
const moreContainer=document.querySelector(".more_container");


//A
const tweetsContainer = document.querySelector("#tweet-body");
const tweetPostBtn = document.querySelector(".tweet_post_btn");





let data;

async function getTweets() {
    try {
      const response = await fetch("../tweets.json");
       data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }

    showTweets(data)
  }

  

  const showTweets = async(tweets)=>{
    tweets.forEach((tweet)=>{
      const template = `
      <div class="tweet">
        <div class="tweet-header">
        <img src="${tweet.user.avatar_url}" alt="${tweet.user.name}" />
          <h3>${tweet.user.name}</h3>
          <p>@${tweet.user.username}</p>
        </div>
        <div class="tweet-body">
          <p>${tweet.text}</p>
         <img src="${tweet.text_img}" alt="${tweet.user.name}" />
        </div>
        <div class="tweet-footer">
          <p>${tweet.created_at}</p>
          <p>${tweet.retweet_count} Retweets</p>
          <p>${tweet.view_count} views</p>
          <p>${tweet.favorite_count} Likes</p>
        </div>
      </div>
    `;
    tweetsContainer.innerHTML += template;
    })

  }

 
  window.addEventListener('scroll', () => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;

    // console.log(scrollTop, scrollHeight, clientHeight);

    if((scrollTop + clientHeight) >= (scrollHeight - 20)) {
      getTweets();
    }
})
  
  
  
  
//--------------------------------



tweetPostText.addEventListener("click",(e)=>{
    e.stopPropagation();
postBoxEveryoneBtn.classList.add("display_block");
})

midContainer.addEventListener("click",()=>{
    postBoxEveryoneBtn.classList.remove("display_block");
})

rightSideSearch.addEventListener("click",(e)=>{
    e.stopPropagation();
  rightSideSearch.style.backgroundColor="white";
  rightSideSearch.style.border="1px solid rgb(29, 161, 242)"
  rightSearchText.style.backgroundColor="white";
  magnifyGlass.style.color="rgb(29, 161, 242)";
})

mainContainer.addEventListener("click",()=>{
    rightSideSearch.style.backgroundColor="rgb(243, 244, 245)";
  rightSideSearch.style.border="none"
  rightSearchText.style.backgroundColor="rgb(243, 244, 245)";
  magnifyGlass.style.color="gray";
  logoutDtetails.classList.remove("display_flex");
  settingsContainer.classList.remove("display_block");
})

userProfile.addEventListener("click",(e)=>{
 e.stopPropagation();
  logoutDtetails.classList.add("display_flex");
})

labelChange.addEventListener("click",()=>{
  labelChange.classList.toggle("active");
  body.classList.toggle("dark");
  settingsContainer.style.color="black";
})

moreContainer.addEventListener("click",(e)=>{
  e.stopPropagation();
  settingsContainer.classList.add("display_block");
})


//A
tweetPostBtn.addEventListener("click",(e)=>{
  //console.log(tweetPostText.value)
  const currentDate = new Date();
  let formattedDate = currentDate.toLocaleDateString('en-IN', {day: '2-digit', month: '2-digit', year: 'numeric'});

  const template = `
      <div class="tweet">
        <div class="tweet-header">
        <img src="https://i.ibb.co/XxvNnM3/Whats-App-Image-2023-01-03-at-16-50-27.jpg" alt="aghil" />
          <h3>Aghil P Wilson</h3>
          <p>aghil_wilson</p>
        </div>
        <div class="tweet-body">
          <p>${tweetPostText.value}</p>
         
        </div>
        <div class="tweet-footer">
          <p>${formattedDate}</p>
          <p>5 Retweets</p>
        </div>
      </div>
    `;
    //tweetsContainer.innerHTML += template;
    tweetsContainer.insertAdjacentHTML('afterbegin', template);
    tweetPostText.value =""
})





window.addEventListener("DOMContentLoaded", () => getTweets())