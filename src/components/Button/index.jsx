import styles from "./index.module.css"


export const Button = ({textIns, pageHere}) => {
    const start = async() => {
        location.href = "register.html";
    } 


    const register = async() => {
        const  username  = document.getElementById('usernameinp').value;
        const  login  = document.getElementById('logininp').value;
        const  password  = document.getElementById('passwordinp').value;
        const prms = new URLSearchParams({
            username: username,
            login: login,
            password: password
        })
        const response = await fetch("https://d5drjbclojcqrqtf0nd9.apigw.yandexcloud.net/hi?" + prms, {method : "POST"});
        console.log(response)
        location.href = "profile.html";
    }

    let todo = null
    
    if (pageHere == "index") {
        todo = start
    } else {
        todo = register
    }

    return (  
        <button className={styles.button} onClick={todo}> {textIns} </button>

  
    )
  
  }
  