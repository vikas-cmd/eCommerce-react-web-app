const postApi=()=>{


const jwt=()=>{
    axios.post('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: 'kminchelle',
          password: '0lelplR',
          // expiresInMins: 60, // optional
        })
      })
      
      .then(console.log);
    }
return<>
<button onClick={jwt}>submit</button>
</>
}
export default jwt;