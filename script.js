$(document).ready(function () {
  $(".image").click(function () {
    var getId = this.id;
    console.log(getId);

    if (getId === "weather") {
      window.location.href = "weather.html";
    } else if (getId === "jobSearch") {
      window.location.href = "jobSearch.html";
    } else if(getId === "dailyEvent"){
      window.location.href = "dailyScheduler.html";
    }
    else{
      window.location.href = "burgerApp.html";
    }
  });
});
