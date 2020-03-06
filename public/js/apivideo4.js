var htmlString3 = "";
var apiKey = 'AIzaSyDt1CJ7dBM-Xv3DD1gj5Xt17SswygwoKgk'; //https://console.developers.google.com
var channelID = 'UCaE_2DjKurJTmC5tHlrMqNw';
var maxResults = 999;

$.getJSON('https://www.googleapis.com/youtube/v3/search?key=' + apiKey + '&channelId=' + channelID + '&part=snippet,id&order=date&maxResults=' + (maxResults > 1 ? 1 : maxResults), function(data) {
    $.each(data.items, function(i, item) {
        var videoID = item['id']['videoId'];
        var title = item['snippet']['title'];
        var videoEmbed = "https://www.youtube.com/embed/" + videoID;
        htmlString3 += '<div class="resp-container2"><div class="justify-content-center"><h2 class="text-muted1" style="font-size: 2.1em">'+title+'</h2></div><iframe width="640px" height="360px" src="' + videoEmbed + '" frameborder="0" allowfullscreen></iframe></div>';
    });
    $('.video4').html(htmlString3);
});
