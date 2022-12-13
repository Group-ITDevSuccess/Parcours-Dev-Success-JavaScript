var value1 = encodeURIComponent(value1),
    value2 = encodeURIComponent(value2);

xhr.open('GET', 'https://mon_site_web.com/ajax.php?param1='+value1+'&param2='+value2);