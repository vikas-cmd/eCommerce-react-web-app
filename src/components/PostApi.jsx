import axios from "axios";
import { json } from "react-router-dom";

const PostApi = () => {


    const jwt = () => {
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
  
          username: 'kminchelle',
          password: '0lelplR',
          // expiresInMins: 60, // optional
        })
      })
  .then(res=>res.json())
        .then(res=>console.log("post",res));
    }
    return <>
      <button onClick={jwt}>submit</button>
    </>
  }
  export default PostApi;