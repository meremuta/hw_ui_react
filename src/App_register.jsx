import {Label} from "./components/Label";
import {Button} from "./components/Button";
import {Fieldset} from "./components/Fieldset";

export const App = () => {
  return (  
    <div className="main-content">
        <div className="reg-form-full">
            <div className="T4 h56"><Label textIns={"Create an Account."}></Label></div>
            <div className="reg-form-bottom">
                <div className="reg-form">
                    <Fieldset textIns = {"Username"} inpID ={"usernameinp"} type ={"text"}></Fieldset>
                    <Fieldset textIns = {"Email address"} inpID ={"logininp"} type ={"text"}></Fieldset>
                    <Fieldset textIns = {"Password"} inpID ={"passwordinp"} type ={"password"}></Fieldset>
                    <Button textIns = {"Create Account"} pageHere ={'register'}></Button>
                </div>
            </div>
        </div>

    </div>

  )

}

