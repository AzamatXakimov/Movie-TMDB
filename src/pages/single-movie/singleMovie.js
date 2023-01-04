import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { api, BASE_IMG_URL } from "../../api/API";
import { EptyStar, FullStar, HalfStar } from "../../assets/images/icons/icons";
import { SwiperCasts } from "../../components/SwiperCasts/SwiperCasts";
import { Container } from "../../styles/globalStyles";
import { SingleMovieBtn, SingleMovieCompanyImg, SingleMovieCompanyItem, SingleMovieCompanyList, SingleMovieDesc, SingleMovieImg, SingleMovieImgBox, SingleMovieInfoBox, SingleMovieInner, SingleMovieRatingItem, SingleMovieRatingList, SingleMovieReliseCompanys, SingleMoviesWrapperOverlay, SingleMovieTitle, SingleMovieVotes, SingleMovieWrapper, StyledCastsDesc, StyledCastsImg, StyledCastsIngobox, StyledCastsItems, StyledCastsTitle, StyledMovieGatresBox, StyledMovieGatresItem, StyledMovieGatresList, StyledMovieGatresTitle, StyledMovieStatus } from "./singleMovie.style";


export const SingleMovie = () => {
    const {movieId} =  useParams();
    const [casts, setCasts] = useState({
        cast: [],
        crew: [],
    });
    const [singleMovies, setSingleMovies] = useState({
        isLoading: true,
        data: {},
        isError: false,
    });

    const getSingleMovies = async () => {
        const data = await api.getSingleMovie(movieId);
        console.log(data);
        if(data.data){
            setSingleMovies({
                isLoading: false,
                data: data.data,
                isError: false,
            })
        }
        else{
            setSingleMovies({
                isLoading: false,
                data: {},
                isError: true,
            })
        }
    }
    
    const getSingleMoviesCasts = async () => {
        const data = await api.getSingleMovieCasts(movieId);
        console.log(data);
        if(data.data){
            setCasts({
                cast: data.data.cast,
                crew: data.data.crew,
            })
        }
        else{
            setCasts({
                cast: [],
                crew: [],
            })
        }
    }

    useEffect( () => {
        getSingleMovies()
        getSingleMoviesCasts()
    }, [movieId]);


    const backroundUrl = singleMovies.data.backdrop_path;
    const ratingStar = []
    for (let i = 1; i <= 9; i++) {
        if (singleMovies.data.vote_average > i) {
            ratingStar.push(<FullStar w={37} h={36}/>)
        }
        
        else if(singleMovies.data.vote_average > i-0.5){
            ratingStar.push(<HalfStar w={37} h={36}/>)
        }
        else{
            ratingStar.push(<EptyStar w={37} h={36}/>)
        }
    }

    const CastsStyle = [];
    
    casts.cast.forEach(item => {
        CastsStyle.push(<>
            <StyledCastsItems>
                <StyledCastsImg src={`${BASE_IMG_URL}${item.profile_path}`}></StyledCastsImg>
                <StyledCastsIngobox>
                    <StyledCastsTitle>
                        {item.character}
                    </StyledCastsTitle>
                    <StyledCastsDesc>
                        {item.name}
                    </StyledCastsDesc>
                </StyledCastsIngobox>
            </StyledCastsItems>
        </>)
    })


    return<>
        <SingleMovieWrapper style={{backgroundImage: `url("${BASE_IMG_URL}${backroundUrl}")`}}>
            <SingleMoviesWrapperOverlay>
                <Container>
                    <SingleMovieInner>
                        <SingleMovieInfoBox>
                            <SingleMovieTitle>
                                {singleMovies.data.title}
                            </SingleMovieTitle>
                            <SingleMovieRatingList>
                                {ratingStar.map(item => (
                                    <SingleMovieRatingItem>
                                        {item}
                                    </SingleMovieRatingItem>
                                ))}
                            </SingleMovieRatingList>
                            <SingleMovieVotes>{singleMovies.data.vote_count} votes</SingleMovieVotes>

                            <StyledMovieGatresBox>
                                <StyledMovieGatresTitle>Ganres: </StyledMovieGatresTitle>
                                <StyledMovieGatresList>
                                    {singleMovies.data.genres?.map(item => (
                                        <StyledMovieGatresItem>
                                            {item.name}
                                        </StyledMovieGatresItem>
                                    ))}
                                </StyledMovieGatresList>
                            </StyledMovieGatresBox>

                            <SingleMovieReliseCompanys>
                                Production Companies: 
                            </SingleMovieReliseCompanys>
                            <SingleMovieCompanyList>
                                {singleMovies.data.production_companies?.map(item => (
                                    <SingleMovieCompanyItem>
                                        <SingleMovieCompanyImg src={`${BASE_IMG_URL}${item.logo_path}`}>
                                        </SingleMovieCompanyImg>
                                    </SingleMovieCompanyItem>
                                ))}
                            </SingleMovieCompanyList>

                            <SingleMovieDesc>
                                {singleMovies.data.overview}
                            </SingleMovieDesc>

                            <SingleMovieBtn>Watch trailer</SingleMovieBtn>
                        </SingleMovieInfoBox>
                        <SingleMovieImgBox>
                            <SingleMovieImg src={`${BASE_IMG_URL}${singleMovies.data.poster_path}`}></SingleMovieImg>
                            <StyledMovieStatus>{singleMovies.data.status}</StyledMovieStatus>
                        </SingleMovieImgBox>
                    </SingleMovieInner>
                </Container>
            </SingleMoviesWrapperOverlay>
        </SingleMovieWrapper>

        <Container> 
            <SwiperCasts list={CastsStyle}/>
        </Container>
    </>
}

