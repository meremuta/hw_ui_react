import styles from "./index.module.css"


export const Fieldset = ({textIns, inpID, type}) => {

    let styleinp = null
    let stylef = null

    if (textIns=="Username") {
        styleinp = styles.usernameinp
        stylef = styles.usernameF
    } else if (textIns=="Email address") {
        styleinp = styles.emailinp
        stylef = styles.emailF
    } else if (textIns=="Password") {
        styleinp = styles.passwordinp
        stylef = styles.passwordF
    }

  return (  
    <fieldset id={stylef}>
        <legend>{textIns}</legend>
        <input className = {styleinp} placeholder={textIns} type={type} id = {inpID}/>
    </fieldset>

)
  }
  