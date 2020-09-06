$(document).ready(function () {


    $('.image').click(function () {

        var getId = this.id;
        console.log(getId);

        if (getId === "weather") {
            window.location.href = "projectDetails.html";
            console.log("if condition is called");
            // $("#jobSearchProj").css("display", "none");
            // $("#eventProj").css("display", "none");
            $("#weatherDisplay").css("display", "block");


        } else if (getId === "jobSearch") {

            $("#jobSearchProj").css("display", "inline-block");

            // $("#eventProj").css("display", "none");
            // $("#weatherDisplay").css("display", "none");

        } else {

            // $("#jobSearchProj").css("display", "none");
            $("#eventProj").css("display", "inline-block");
            // $("#weatherDisplay").css("display", "none");

        }

    });
});