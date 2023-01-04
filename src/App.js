import { HeaderComponent } from "./components/header/header.component"
import { MainComponent } from "./components/main/main.component"
import { GlobalStyle } from "./styles/globalStyles"
import "./styles/pagination.css"
export const App = () => {
    return <>
        <HeaderComponent/>
        <MainComponent/>
        <GlobalStyle/>
    </>
}