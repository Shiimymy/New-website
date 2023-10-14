function fetchGitHubInformation(event) {

    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<p>Please enter a GitHub username</p>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="images/loader.gif" alt="loading..." />
        </div>`);
}