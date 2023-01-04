import { BASE_IMG_URL } from "../../api/API"
import { EptyStar, FullStar, HalfStar } from "../../assets/images/icons/icons"
import { StyledMovieDate, StyledMovieDesc, StyledMovieImg, StyledMovieItem, StyledMovieLink, StyledMovieRating, StyledMovieRatingItem, StyledMovieRatingList, StyledMovieTitle } from "./movieCard.style"

export const MovieCard = ({obj}) => {
    const ratingStar = []
    for (let i = 1; i <= 9; i++) {
        if (obj.vote_average > i) {
            ratingStar.push(<FullStar/>)
        }
        
        else if(obj.vote_average > i-0.5){
            ratingStar.push(<HalfStar/>)
        }
        else{
            ratingStar.push(<EptyStar/>)
        }
    }

    return <>
        <StyledMovieItem>
            <StyledMovieLink to={`/movie-single-page/${obj.id}`}>
                <StyledMovieImg src={BASE_IMG_URL + obj.poster_path} width="295" height="417"></StyledMovieImg>
                <StyledMovieTitle>{obj.title}</StyledMovieTitle>

                <StyledMovieRatingList>
                    {ratingStar.map(item => (
                        <StyledMovieRatingItem>
                            {item}
                        </StyledMovieRatingItem>
                    ))}
                </StyledMovieRatingList>

                <StyledMovieDate>{obj.release_date}</StyledMovieDate>
                <StyledMovieDesc>{obj.overview}</StyledMovieDesc>
                <StyledMovieRating>{obj.vote_average}</StyledMovieRating>
            </StyledMovieLink>
        </StyledMovieItem>
    </>
}