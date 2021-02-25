$('.carousel').carousel({
    interval:500
  })


  //create account 

  var objPeople = [
    {
      username:"Smith John",
      password:"IamJohn",
    },
    {
      username:"Connor Jane",
      password:"codify",
    },
    {
      username:"Jackson Tom",
      password:"shopping",
    }
  ]

  function getLogin () {
    var username =document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i=0;i<objPeople.length;i++){
       if (username == objPeople[i].fullname && password == objPeople[i].password){
         console.log(username + "are logged in :)")
         return
       }
      }
    console.log("Incorrect username or password")
  }

