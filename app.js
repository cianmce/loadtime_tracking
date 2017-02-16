$(function(){
  var url = "https://fb.com";
  url = 'https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://facebook.com/login.php?next=https://www.facebook.com/search/top/?q=people%20in%20ireland%20';
  $('#check').click(function(){
    time_to_load(url)
  });
});


function time_to_load(base_url, callback, timeout){
  if(!timeout){
    timeout = 15*1000;
  }
  var start_time = new Date().getTime();
  var url = base_url + '?' + start_time;

  var $img=$("<img />",{
    "src": url,
    "style": "display:none;"
  }).on('error', res)
    .appendTo(document.body);

  function res(e){
    var time_taken = new Date().getTime() - start_time;
    $img.remove();
    console.log('time_taken: '+time_taken);
    // callback(start_time, img)
  }
  // var img = $(img_html).on('error', res).

}
