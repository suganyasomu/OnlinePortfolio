$(document).ready(function () {
  $(".caption-text").click(function () {
    var getId = this.id;
    console.log(getId);
switch(getId){
  case 'weather':
     window.location.href = "weather.html";
  break;
  case 'jobSearch': 
  window.location.href = "jobSearch.html";
  break;
  case 'dailyEvent': 
  window.location.href = "dailyScheduler.html";
  break;
  case 'burger': 
  window.location.href = "burgerApp.html";
  break;
 default:
  window.location.href = "foodReview.html";
 };
  });
});
