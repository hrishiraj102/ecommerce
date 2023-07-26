import { useEffect, useState } from "react";

function LoginPage() {

    const [loginStatus, setLoginStatus] = useState("");
    const [username, setUsername] = useState(``);
    const [password, setPassword] = useState(``);
    const [submitBtn, setSubmitBtn] = useState(0);

    useEffect(() => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: `${username}`,
                password: `${password}`,
                //expiresInMins: 1, // optional
            })
        })

            .then(res => res.json())
            .then(console.log);



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