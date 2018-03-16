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


var submit_btn = document.getElementById("submit_btn");
submit_btn.onclick = function() {
   
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                console.log('user logged in');
                alert('loggedin successsfuly');
            }
            else if(request.status === 403){
                alert('username/password is incorrect.');
            }
            else if(request.status === 500){
                alert('something went wrong on server');
            }
        }
    };
};
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    request.open('POST','http://pratikmmaniya244.imad.hasura-app.io/login',true);
    request.setRequestHeader('content-type','application/json');
    request.send(JSON.stringify({username: username, password: password}));

    
console.log("loaded");