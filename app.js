let friends = [];

function addFriend() {
    let friend = document.querySelector('#amigo').value;
    if (friend === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    
    friends.push(friend);
    document.querySelector('#amigo').value = '';
    //console.log(friends);
    showFriends();
    
}
list = document.getElementById('listaAmigos');
result = document.getElementById('resultado');
function showFriends() {

    
    list.innerHTML = "";
    friends.forEach(friend => {
        //console.log("Amigo: " + friend)
        let li = document.createElement('li');
        li.textContent = friend;
        list.appendChild(li);
    });
}


function sortFriend() {

    if (friends.length == 0) {
        alert('La lista esta vacia');
        return;
    }
    let generateNumber = Math.floor(Math.random()*friends.length);
    
    list.innerHTML = "";
    result.textContent = "El amigo sorteado es: " + friends[generateNumber];

    document.getElementById('addButton').setAttribute('disabled', 'true');
    document.getElementById('sortButton').setAttribute('disabled', 'true');
}

