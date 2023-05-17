function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  function myFunction2() {
    var dots = document.getElementById("dot");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  function myFunction3() {
    var dots = document.getElementById("dot3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  const firebaseConfig = {
    apiKey: "AIzaSyAB7avDtyJWlOCZd9oMjhj7nKMTO8E7q-o",
    authDomain: "gmpo-26675.firebaseapp.com",
    databaseURL: "https://gmpo-26675-default-rtdb.firebaseio.com",
    projectId: "gmpo-26675",
    storageBucket: "gmpo-26675.appspot.com",
    messagingSenderId: "100068430594",
    appId: "1:100068430594:web:55c1a5a93539295ceca81b"
  };
  
  firebaseConfig.initializeApp(firebaseConfig);
  const detailformDB = firebaseConfig.databaseURL().ref('detailform')