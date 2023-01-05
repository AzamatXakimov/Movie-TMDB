import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom"
import { api, BASE_IMG_URL } from "../../api/API";
import { CloseIcon, EptyStar, FullStar, HalfStar } from "../../assets/images/icons/icons";
import { MovieCard } from "../../components/movieCard/movieCard.component";
import { Container } from "../../styles/globalStyles";
import { StyledHomeList, StyledPaginationBox } from "../home/home.style";
import { CloseModalBtn, ModalBody, ModalBodyInner, SingleMovieBtn, SingleMovieCompanyImg, SingleMovieCompanyItem, SingleMovieCompanyList, SingleMovieDesc, SingleMovieImg, SingleMovieImgBox, SingleMovieInfoBox, SingleMovieInner, SingleMovieRatingItem, SingleMovieRatingList, SingleMovieReliseCompanys, SingleMoviesInnerBox, SingleMoviesWrapperOverlay, SingleMovieTitle, SingleMovieVotes, SingleMovieWrapper, StyledCastsDesc, StyledCastsImg, StyledCastsIngobox, StyledCastsItems, StyledCastsLink, StyledCastsList, StyledCastsTitle, StyledMovieGatresBox, StyledMovieGatresItem, StyledMovieGatresList, StyledMovieGatresTitle, StyledMovieStatus, StyledSingleMovieText } from "./singleMovie.style";


export const SingleMovie = () => {
    const [iframeShow, SetIframeShow] = useState(false)
    const {movieId} =  useParams();
    const [page, setPage] = useState(1)
    const [casts, setCasts] = useState({
        cast: [],
        crew: [],
    });
    const [similarMovies, setSimilar] = useState({});
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
    const getSingleMoviesSimilars = async () => {
        const data = await api.getSingleMoviesSimilar(movieId, page);
        console.log(data);
        if(data.data){
            setSimilar(data.data)
        }
        else{
            setSimilar([])
        }
    }

    const [MovieVideo, SetMovieVideo] = useState({})
    const getSingleMoviesVideo = async () => {
        const data = await api.getMovieVideo(movieId);
        console.log(data);
        if(data.data){
            SetMovieVideo(data.data.results[0])
        }
        else{
            SetMovieVideo({})
        }
    }

    useEffect( () => {
        getSingleMovies();
        getSingleMoviesVideo();
        getSingleMoviesCasts();
        getSingleMoviesSimilars()
    }, [movieId]);
    useEffect( () => {
        getSingleMoviesSimilars()
    }, [page]);


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

    return<>
        <SingleMovieWrapper style={{backgroundImage: `url("${BASE_IMG_URL}${backroundUrl}")`}}>
            <SingleMoviesWrapperOverlay>
                <Container>
                    <SingleMoviesInnerBox>
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

                                <SingleMovieBtn onClick={() => {
                                    SetIframeShow(true)
                                }}>Watch trailer</SingleMovieBtn>
                            </SingleMovieInfoBox>
                            <SingleMovieImgBox>
                                <SingleMovieImg src={`${BASE_IMG_URL}${singleMovies.data.poster_path}`}></SingleMovieImg>
                                <StyledMovieStatus>{singleMovies.data.status}</StyledMovieStatus>
                            </SingleMovieImgBox>
                        </SingleMovieInner>
                        <ModalBody style={{
                            display: iframeShow ? "flex" : "none"
                        }}>
                            <ModalBodyInner>
                                <iframe width="900" height="450" src={`https://www.youtube.com/embed/${MovieVideo.key}`} title={MovieVideo.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <CloseModalBtn onClick={() => {
                                    SetIframeShow(false)
                                }}>
                                    <CloseIcon></CloseIcon>
                                </CloseModalBtn>
                            </ModalBodyInner>
                        </ModalBody>
                    </SingleMoviesInnerBox>
                </Container>
            </SingleMoviesWrapperOverlay>
        </SingleMovieWrapper>

        <Container> 
            <StyledSingleMovieText>Casts</StyledSingleMovieText>
            <StyledCastsList>
                {casts.cast.map(item => (
                    <StyledCastsItems>
                        <StyledCastsLink to={`/casts-single-page/${item.id}`}>
                            <StyledCastsImg src={`${BASE_IMG_URL}${item.profile_path}`} alt={item.name}></StyledCastsImg>
                            <StyledCastsIngobox>
                                <StyledCastsTitle>
                                    {item.character}
                                </StyledCastsTitle>
                                <StyledCastsDesc>
                                    {item.name}
                                </StyledCastsDesc>
                            </StyledCastsIngobox>
                        </StyledCastsLink>
                    </StyledCastsItems>
                ))}
            </StyledCastsList>
            <StyledSingleMovieText>Crew</StyledSingleMovieText>
            <StyledCastsList>
                {casts.crew.map(item => (
                    <StyledCastsItems>
                        <StyledCastsLink to={`/casts-single-page/${item.id}`}>
                            <StyledCastsImg src={`${BASE_IMG_URL}${item.profile_path}`} alt={item.name}></StyledCastsImg>
                            <StyledCastsIngobox>
                                <StyledCastsTitle>
                                    {item.name}
                                </StyledCastsTitle>
                            </StyledCastsIngobox>
                        </StyledCastsLink>
                    </StyledCastsItems>
                ))}
            </StyledCastsList>

            <StyledSingleMovieText>Similar Movies</StyledSingleMovieText>
            {similarMovies.results?.length ? (
                <>
                    <StyledHomeList>
                        {similarMovies.results?.map(item => <MovieCard obj={item} />)}
                    </StyledHomeList>   
                    <StyledPaginationBox>
                        <ReactPaginate 
                            pageCount={similarMovies.total_pages}
                            className="pagination-list"
                            activeLinkClassName="pagination-page-active"
                            onPageChange={(activePage) => {
                                setPage(activePage.selected + 1)
                            }}
                            forcePage={page === 1 ? 0 : page - 1} 
                            breakLinkClassName = "pagination-break"
                            pageLinkClassName="pagination-pages"
                            previousLinkClassName="pagination-previous"
                            nextLinkClassName="pagination-previous"
                        />
                    
                    </StyledPaginationBox>
                </>
            ) : <></>}
        </Container>
    </>
}

