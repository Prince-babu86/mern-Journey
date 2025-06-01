//

let usernameInput = document.getElementById("usernameInput");
let searchBtn = document.getElementById("searchBtn");
let loader = document.getElementById("loader");

function getProfileData(username) {
  return fetch(`https://api.github.com/users/${username}`).then((res) => {
    if (!res.ok) throw new Error("user not found");
    return res.json();
  });
}

function getRepos(username) {
  return fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`
  ).then((res) => {
    if (!res.ok) throw new Error("user not found");
    return res.json();
  });
}

function details(detail) {
  console.log(detail);
  let data = `<div class="flex flex-col sm:flex-row items-center gap-6">
        <img id="avatar" src=${detail.avatar_url} class="w-24 h-24 rounded-full border-2 border-gray-300 dark:border-gray-500 object-cover" />
        <div class="text-left space-y-1">
          <h2 class="text-xl font-semibold" id="name">${detail.login}</h2>
           <h2 class="text-xl font-semibold" id="name">${detail.name}</h2>
          <p id="bio" class="italic text-sm">${detail.bio ? detail.bio : ""}</p>
          <p> <span id="location">${detail.location ? detail.location : ""}</span></p>
          <p>👥 <strong id="followers">${detail.followers}</strong> followers | <strong id="following">${detail.following}</strong> following</p>
          <p>📦 Public Repos: <strong id="repos">${detail.public_repos}</strong></p>
          <a id="profileLink" href=${detail.html_url} target="_blank" class="text-blue-500 hover:underline block mt-2">View GitHub Profile →</a>
        </div>
      </div>`;

  document.getElementById("result").innerHTML = data;
}

searchBtn.addEventListener("click", (e) => {
  let username = usernameInput.value.trim();

  if (username.length > 0) {
    getProfileData(username)
    .then((data) => {
      details(data);
      loader.style.display = "none"
    }).catch((err)=>{
       loader.style.display = "block"
    })
  } else {
    alert("Please Enter something");
  }
});
