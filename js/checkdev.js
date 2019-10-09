
$(window).on('load', function () {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        $('body').addClass('ios');
    } else{
        $('body').addClass('web');
    };
    $('body').removeClass('loaded');

    $('.about').addClass('anim');

    DetectTheThing()

});

function DetectTheThing() {
    if( screen.width <= 480 && screen.height <= 812 ) {
        location.href = 'mobil.html';
      }
    else if( screen.width <= 812 && screen.height <= 480 ) {
        location.href = 'mobil.html';
      }
    else {
        location.href = 'index1.html';
    }
    var uagent = navigator.userAgent.toLowerCase();
    if (uagent.search("iphone") > -1 || uagent.search("ipad") > -1
    || uagent.search("android") > -1 || uagent.search("blackberry") > -1
    || uagent.search("webos") > -1)
    window.location.href ="mobil.html";
}
