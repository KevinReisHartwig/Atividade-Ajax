//  Sem jquery
// document.addEventListener('DOMContentLoaded', function(){
//     const nameElement = document.querySelector('#name');
//     const usernameElement = document.querySelector('#username');
//     const avatarElement = document.querySelector('#avatar');
//     const reposElement = document.querySelector('#repos');
//     const followersElement = document.querySelector('#followers');
//     const followingElement = document.querySelector('#following');
//     const linkElement = document.querySelector('#link');

//     fetch('https://api.github.com/users/KevinReisHartwig')
//         .then(function(res){
//             return res.json();
//         })
//         .then(function(json){
//             nameElement.innerHTML = json.name;
//             usernameElement.innerHTML = json.login;
//             avatarElement.src = json.avatar_url;
//             followingElement.innerHTML = json.following;
//             followersElement.innerHTML = json.followers;
//             reposElement.innerText = json.public_repos;
//             linkElement.href = json.html_url;
//         })
// })

$(document).ready(function(){
    const nameElement = $('#name');
    const usernameElement = $('#username');
    const avatarElement = $('#avatar');
    const reposElement = $('#repos');
    const followersElement = $('#followers');
    const followingElement = $('#following');
    const linkElement = $('#link');

    fetch('https://api.github.com/users/KevinReisHartwig')
        .then(function(res) {
            if (!res.ok) {
                throw new Error('Erro ao fazer requisição: ' + res.statusText);
            }
            return res.json();
        })
        .then(function(json) {
            nameElement.html(json.name);
            usernameElement.html(json.login);
            avatarElement.attr('src', json.avatar_url);
            followingElement.html(json.following);
            followersElement.html(json.followers);
            reposElement.text(json.public_repos);
            linkElement.attr('href', json.html_url);
        })
        .catch(function(error) {
            console.error('Erro:', error);
        });
});