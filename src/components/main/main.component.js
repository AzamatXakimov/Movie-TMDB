import { Route, Routes } from "react-router-dom"
import { Home } from "../../pages/home/home"
import { SingleMovie } from "../../pages/single-movie/singleMovie"
import { StyledMain } from "./main.style"
export const MainComponent = () => {
    return<>
        <StyledMain className="site-main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movie-single-page/:movieId" element={<SingleMovie/>}/>
                {/* <Route path="/casts-single-page/:castsId" element={</>}/> */}
            </Routes>
        </StyledMain>
    </>
}