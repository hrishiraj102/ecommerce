import { useEffect, useState } from "react";

function LoginPage() {

    const [loginStatus, setLoginStatus] = useState("");
    const [username, setUsername] = useState(``);
    const [password, setPassword] = useState(``);
    const [submitBtn, setSubmitBtn] = useState(0);

    useEffect(() => {

        const handleLogin = async () => {

            try {
               fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({

                        username: `${username}`,
                        password: `${password}`,
                        expiresInMins: 1, // optional
                    })
                })
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data.id);
                        if (data) {
                            sessionStorage.setItem('token', data.token);  //SessionStorage help to store temporary some data HTTP Feature 
                            sessionStorage.setItem('username', data.username);
                            sessionStorage.setItem('id', data.id);
                            setLoginStatus("Logging Successful");
                        }
                        else {
                            setLoginStatus("Invalid Login credential");
                        }
                    });
         
                    //const data = await response.json();
                    
              


            } catch (error) {
                console.error("Error", error);
                setLoginStatus("Error Occur while Loging.")
            }


        }
        if (submitBtn > 0) {
            handleLogin();
        }



    }, [submitBtn]);






    return (
        <>
            <h4>Login-</h4>
            <form >
                <label>Username:</label>
                <input type="text" name="username" id="userID" onChange={(e) => setUsername(e.target.value)} ></input>
                <label>Password:</label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} ></input>
                <button type="button" onClick={() => setSubmitBtn((e) => e + 1)}>Submit</button>

            </form>
            {loginStatus && <p>{loginStatus}</p>}

        </>

    )



}
export default LoginPage;