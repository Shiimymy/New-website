function userInformationHTML(user) {
    return `
        <h6>${user.name}
            <span class="small-name">
                (@<a href="${user.html_url}" target="_blank">${user.login}</a>)
            </span>
        </h6>
        <div class="gh-content">
            <div class="gh-avatar">
                <a href="${user.html_url}" target="_blank">
                    <img src="${user.avatar_url}" width="80" height="80" alt="${user.login}" />
                </a>
            </div>
            <p>Repos: ${user.public_repos}</p>
        </div>`;
}

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

     $.when(
        $.getJSON(`https://api.github.com/users/${username}`)
    ).then(
        function(response) {
            var userData = response;
            $("#gh-user-data").html(userInformationHTML(userData));
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#gh-user-data").html(
                    `<p>No info found for user ${username}</p>`);
            } else {
                console.log(errorResponse);
                $("#gh-user-data").html(
                    `<p>Error: ${errorResponse.responseJSON.message}</p>`);
            }
        });
}