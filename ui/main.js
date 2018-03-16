var button = document.getElementById("counter");
var counter = 0;
button.onclick = function() {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();            
            }
        }
    };
    request.open('GET','http://pratikmmaniya244.imad.hasura-app.io/counter',true);
    request.send(null);
};

var submit = document.getElementById("submitbtn");
submit.onclick = function() {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0; i<names.length ;i++){
                    list += '<li>' +names[i]+ '</li>';
                }          
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
    };
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    if(name !== ''){
        request.open('GET','http://pratikmmaniya244.imad.hasura-app.io/submit-name?name='+name,true);
        request.send(null);
    }
};

var register = document.getElementById("register_btn");
register.onclick = function() {
   
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                console.log('user logged in');
                alert('user created successsfuly');
            }
            else if(request.status === 403){
                alert('username/password is incorrect.');
            }
            else if(request.status === 500){
                alert('something went wrong on server');
            }
        }
    };
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    request.open('POST','http://pratikmmaniya244.imad.hasura-app.io/create-user',true);
    request.setRequestHeader('content-type','application/json');
    request.send(JSON.stringify({username: username, password: password}));
};













// The first thing to do is to check if the user is logged in!
loadLogin();

// Now this is something that we could have directly done on the server-side using templating too!
loadArticles();
