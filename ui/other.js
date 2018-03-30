function loadRegisterForm () {
    var registerHtml = `
          <h4>Sign up</h4>
		  <p>Your Name</p>
		  <center>
		  <input id="name" type="text" name="name">
		  </center>
		  <p>Mobile Number</p>
		  <center>
		  <input type="text" id="mnumber" name="mobilenumber" placeholder="Mobile number">
		  </center>
		  <p>Email Address(Optional)</p>
		  <center>
		  <input type="text" name="email" id ="username">
		  </center>
		  <p>Password</p>
		  <center>
		  <input type="password" id="password" name="password" placeholder="At least 6 characters">
		  </center>
		  <br>
		  <center>
		  <input type="submit" id="register_btn" class="register" value="Register">
		  </center>
		  <br>
		  <h2>Already have an account?<a class ="backlink" href="./signin.html">Sign in</a></h2>
        `;
    document.getElementById('register_area').innerHTML = registerHtml;
    
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
                    } 
                    else {
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

loadRegisterForm();