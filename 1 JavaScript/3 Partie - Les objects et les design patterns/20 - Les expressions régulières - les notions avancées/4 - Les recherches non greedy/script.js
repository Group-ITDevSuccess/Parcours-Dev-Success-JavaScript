var html = '<a href="www.mon-addresse.be"><strong class="web">Mon site</strong></a>';

/<a href="(.+?)">/.exec(html);

alert(RegExp.$1);