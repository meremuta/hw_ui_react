import {Label} from "./components/Label";
import {Button} from "./components/Button";

export const App = () => {


  return (  
    <div className="main-content">
      <div className="reg-form-full">
          <div className="T4 h56"><Label textIns={"Start by clicking"}></Label></div>
          <div className="reg-form-bottom">
              <div className="reg-form">
                  <Button textIns = {"Click me to start"} pageHere ={'index'}></Button>
              </div>
          </div>
      </div>
    </div>

  )

}

