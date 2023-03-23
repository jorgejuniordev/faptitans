function post(method, args, times = 1) {
    method = 'data={"method":"' + method + '","args":{' + args.replace(/\b[a-zA-Z_][a-zA-Z0-9_]+\b/g, '"$&"') + '},"uniqueSid":"' + uniqueSid + '"}';
    for (var index = 0; index < times; index++) {
        var poster = new XMLHttpRequest();
        poster.open('POST', 'https://faptitans.com/api/', false);
        poster.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        poster.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        poster.setRequestHeader('X-CSRFToken', document.cookie.split('csrftoken=')[1].split(';')[0]);
        poster.send(method); console.log(method); console.log(poster.responseText); 
    }
}

for(let i=110687;i<=110737;i++) {
  post("heroes.buy",`_id:${i},level:1`);
  await new Promise(r => setTimeout(r, 300));
}
