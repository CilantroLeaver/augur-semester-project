function changeTheme() {
    var buttonText = document.getElementById("theme-button");
    if (buttonText.value == "Light Theme") {
        buttonText.value = "Dark Theme";
        document.getElementById("background-dark").id = "background-light";
        document.getElementById("header-dark").id = "header-light";
        document.getElementById("projects-dark").id = "projects-light";
    } else {
        buttonText.value = "Light Theme";
        document.getElementById("background-light").id = "background-dark";
        document.getElementById("header-light").id = "header-dark";
        document.getElementById("projects-light").id = "projects-dark";
    }
}

function changeHeader() {
    var buttonText = document.getElementById("theme-button");
    var newHeader = prompt("New List Title?");
    if (!newHeader) {
        alert("List title cannot be empty!");
        return;
    }

    if (buttonText.value == "Light Theme") {
        document.getElementById("header-dark").innerHTML = newHeader;
    } else {
        document.getElementById("header-light").innerHTML = newHeader;
    }
}

function getRepoContributors(){
    var request = new XMLHttpRequest();

    request.onreadystatechange = function(){

        if(request.readyState == 4 && request.status == 200){
            var repoContributorsJSON = request.responseText;
            var repoContributorsParsed = JSON.parse(repoContributorsJSON);

            var table = document.getElementById("table-body");
            var length = Object.keys(repoContributorsParsed).length;

            for(var i = 0; i < length; i++){

                var row = document.createElement("tr");
                table.appendChild(row);

                var data1 = document.createElement("td");
                var data2 = document.createElement("td");
                var data3 = document.createElement("td");
                var data4 = document.createElement("td");
                var data5 = document.createElement("td");

                data1.innerHTML = repoContributorsParsed[i].repo_name;
                data2.innerHTML = repoContributorsParsed[i].user_id;
                data3.innerHTML = repoContributorsParsed[i].total;
                data4.innerHTML = repoContributorsParsed[i].issues;
                data5.innerHTML = repoContributorsParsed[i].issue_comments;

                row.appendChild(data1);
                row.appendChild(data2);
                row.appendChild(data3);
                row.appendChild(data4);
                row.appendChild(data5);
            }
        }
    };

    request.open("GET", "http://vmware.osshealth.io:5033/api/unstable/repo-groups/25177/contributors", true);

    request.send();
}