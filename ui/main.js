function loadLoginForm () {
    var loginHtml = `
          <center>
          <h4>Sign in</h4>
		  </center>
		  <p class="form label">Email or Mobile number</p>
		  <center>
		  <input class="form" type="text" name="userid" id="username">
		  </center>
		  <p class="form label">Password</p>
		  <center>
		  <input class="form" type="password" name="password" id="password">
		  </center>
		  <br>
		  <center>
		  <input type="submit" class="signin" id="login_btn" value="sign in">
		  </center>
        `;
    document.getElementById('login_area').innerHTML = loginHtml;
    
    var submit = document.getElementById('login_btn');
    submit.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('signed in successfully!');
                  submit.value = 'Sucess!';
              } else if (request.status === 403) {
                  submit.value = 'Invalid credentials. Try again?';
              } else if (request.status === 500) {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              } else {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              }
              loadLogin();
          }  
          // Not done yet
        };
        
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        submit.value = 'Logging in...';
        
    };
    
    var registerFH = document.getElementById('registerbtn');
    registerFH.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  registerFH.value = 'Registered!';
              } else {
                  alert('Could not register the user');
                  registerFH.value = 'Register';
              }
          }
        };
        
        // Make the request
        
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
        console.log(username);
        console.log(password);
        request.open('POST', '/create-user-from-home', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        registerFH.value = 'Registering...';
    
    };
    
    // Submit username/password to login
    
    
    var register = document.getElementById('register_btn');
    register.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  register.value = 'Registered!';
              } else {
                  alert('Could not register the user');
                  register.value = 'Register';
              }
          }
        };
        
        // Make the request
        
        var name = document.getElementById('name').value;
        var mnumber = document.getElementById('mnumber').value;
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
        console.log(username);
        console.log(password);
        request.open('POST', '/create-user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({name: name, mobile: mnumber, username: username, password: password}));  
        register.value = 'Registering...';
    };
}

function loadLoggedInUser (username) {
    var loginArea = document.getElementById('login_area');
    loginArea.innerHTML = `
        <h3> Hi <i>${username}</i></h3>
        <a href="/logout">Logout</a>
    `;
}

function loadLogin () {
    // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                loadLoggedInUser(this.responseText);
            } else {
                loadLoginForm();
            }
        }
    };
    
    request.open('GET', '/check-login', true);
    request.send(null);
}

loadLogin();

