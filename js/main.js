const inputValue = document.getElementById('user');
const username = document.getElementById('username');
const name = document.getElementById('name');
const repo = document.getElementById('repo');
const follower = document.getElementById('follower');
const profile = document.getElementById('profile');
const image = document.getElementById('image');

const searchBtn = document.getElementById('button');


const client_ID = ""; //enter your client id here
const client_secret = ""; //enter your client secret key here

const getUser = async (user) => {
    const api_Call = await fetch(`https://api.github.com/users/${user}?client_id=${client_ID}&client_secret=${client_secret}`);

    const data = await api_Call.json();
    return { data }
};

const showUser = () => {
    getUser(inputValue.value).then((res) => {

        console.log(res);

        username.innerHTML = `<h4 class="prop2 modal-title" id="username">${res.data.login}</h4>`;

        name.innerHTML = `<h4 class="property prop1 key1" id="name">${res.data.name}</h4>`;

        repo.innerHTML = `<h4 class="property prop3" id="repo">${res.data.public_repos}</h4>`;

        follower.innerHTML = `<h4 class="property prop4" id="follower">${res.data.followers}</h4>`;

        profile.innerHTML = `<a target="_blank" href="${res.data.html_url}" style="text-decoration:none;"><h4 class="property prop5" id="profile">${res.data.html_url}</h4></a>`;

        image.innerHTML = `<img class="rounded img-fluid mx-auto d-block" src="${res.data.avatar_url}"></img>`;
    })
};



searchBtn.addEventListener('click',() => {
    showUser();
})