
async  function getDetails(){
    document.getElementById('output').style.display="block";
    const name=document.getElementById('username').value;
    if (!name) {
     alert("Please Enter The user  Name: ");
   return;
  }


const fetchData = await fetch(
    `https://api.github.com/users/${name}`
);

const data = await fetchData.json();

console.log(data);
       document.getElementById('name').innerHTML=data.name;
        document.getElementById('bio').innerHTML=data.bio;
        document.getElementById('profile').innerHTML=`<img src="${data.avatar_url}"/>`
        document.getElementById('repo').innerHTML="repo "+data.public_repos;
        document.getElementById('followers').innerHTML=data.followers +" Followers";
        document.getElementById('following').innerHTML=data.following + " Following";


   
}