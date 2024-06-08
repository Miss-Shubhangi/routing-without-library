import ReactDom from "react-dom/client"
import Home from "./views/Home/home"
import Internship from "./views/Internship/internship"
import Colleges from "./views/Colleges/colleges"
import Spaceship from "./views/Spaceship/spaceship"
import Services from "./views/Services/services"

const root =ReactDom.createRoot(document.getElementById("root"))
    
const path = window.location.pathname

if(path == "/"){
    root.render(<Home />)
}
else if(path == "/internship"){
    root.render(<Internship/>)
}
else if(path == "/colleges"){
    root.render(<Colleges />)
}
else if(path == "/spaceship"){
    root.render(<Spaceship/>)
}
else if(path == "/services"){
    root.render(<Services/>)
}
else{
    root.render(<b>404 Not found</b>)
}
