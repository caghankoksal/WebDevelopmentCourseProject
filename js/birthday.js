function testAPI() {
    FB.api("/me?fields=name,email,birthday,location", function (response) {
        if (response && !response.error) {
            console.log(response);
            document.getElementById("gender").value = response.gender;
            document.getElementById("email").value = response.email;
            document.getElementById("firstname").value = (response.name.split(" "))[0];
            document.getElementById("lastname").value = (response.name.split(" "))[response.name.split(" ").length - 1];
            
            var mont = response.birthday.split("/")[0];
            var day = response.birthday.split("/")[1];
            var year = response.birthday.split("/")[2];
            //var arr=birthday.split();

            var birthday = year + "-" + mont + "-" + day;
            document.getElementById("birthday").value = birthday;

        }
    })
}
