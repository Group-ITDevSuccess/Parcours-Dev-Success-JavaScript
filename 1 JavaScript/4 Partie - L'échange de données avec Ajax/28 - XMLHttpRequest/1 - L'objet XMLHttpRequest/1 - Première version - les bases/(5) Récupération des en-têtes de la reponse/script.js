var xhr = new XMLHttpRequest();

xhr.open('HEAD', 'https://mon_site_web.com', false);
xhr.send(null);

alert(xhr.getResponseHeader('Content-type'));