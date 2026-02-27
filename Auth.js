async function handleSignup(event) {
    event.preventDefault();
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    const messageDiv=document.getElementById('message');
    try{
        const response=await fetch('http://localhost:5001/api/signup', {
            method:'POST',
            headers:{'content-Type':'application/json'},
            body: JSON.stringify({username,password})
        });
        const data=await response.json();
        if(response.ok){
            messageDiv.textContent="signup Success! Redirecting...";
            messageDiv.style.color="green";
            setTimeout(()=>window.location.href='login.html',2000);

        }
        else{
            messageDiv.textContent=data.error || "signup failed";
            messageDiv.style.color="red";
        }
    }catch(error) {
        messageDiv.textContent="Error connecting to server";
        messageDiv.style.color="red";
    }
    
}
async function handleLogin(event) {
    event.preventDefault();
    const username=document.getElementById('username').value
    const password=document.getElementById('password').value;
    const messageDiv=document.getElementById('message');
     try{
        const response=await fetch('http://localhost:5001/api/login', {
            method:'POST',
            headers:{'content-Type':'application/json'},
            body: JSON.stringify({username,password})
        });
        if(response.ok){
            messageDiv.textContent="Login Success! (Status 200 OK)";
            messageDiv.style.color="green";
            window.location.href="index.html"
        }
        else{
            const data=await response.json()
            messageDiv.textContent=data.error || "Login failed";
            messageDiv.style.color="red";
        }
    }catch(error) {
        messageDiv.textContent="Error connecting to server";
        messageDiv.style.color="red";
    }
}