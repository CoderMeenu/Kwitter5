
//YOUR FIREBASE LINKS//

const firebaseConfig = {
  apiKey: "AIzaSyCLpbC2CfX2voq4gRg1wTG5CeDS2dwOvQw",
  authDomain: "kwitter-cc4ee.firebaseapp.com",
  databaseURL: "https://kwitter-cc4ee-default-rtdb.firebaseio.com",
  projectId: "kwitter-cc4ee",
  storageBucket: "kwitter-cc4ee.appspot.com",
  messagingSenderId: "493699530344",
  appId: "1:493699530344:web:162c55fb03709f12ac05dd",
  measurementId: "G-4RBEQEQ3QP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// storing UN and RN //

  user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

//discuss in C97//
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

//discuss in C97//

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}































