$(document).ready(function () {
  $(".image").click(function () {
    var getId = this.id;
    console.log(getId);

    if (getId === "weather") {
      window.location.href = "weather.html";
    } else if (getId === "jobSearch") {
      window.location.href = "jobSearch.html";
    } else {
      window.location.href = "dailyscheduler.html";
    }
  });
});
