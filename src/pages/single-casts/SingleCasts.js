import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api, BASE_IMG_URL } from "../../api/API";
import { MovieCard } from "../../components/movieCard/movieCard.component";
import { Container } from "../../styles/globalStyles";
import { StyledHomeList } from "../home/home.style";
import { StyledSingleMovieText } from "../single-movie/singleMovie.style";
import { CastsBornInfo, CastsBornText, CastsDesc,  CastsImg, CastsInfoBox, CastsInfoBoxBorn, CastsInner, CastsName, CastsWrapper } from "./SingleCastsStyle";

export const SingleCasts = () => {
    const {castsId} =  useParams();
    const [person, setPerson] = useState({});
    const [personMovie, setPersonMovie] = useState([]);


    const getPerson = async () => {
        const data = await api.getPeopleInfo(castsId);
        console.log(data);

        if(data.data){
            setPerson(data.data)
        }
        else{
            setPerson({})
        }
    }

    const getPersonMovie = async () => {
        const data = await api.getPeopleMovies(castsId);
        console.log(data);

        if(data.data.cast){
            setPersonMovie(data.data.cast)
        }
        else if(data.data.crew){
            setPersonMovie(data.data.crew)
        }
        else{
            setPersonMovie([])
        }
    }

    useEffect(() =>{
        getPerson();
        getPersonMovie()
    }, [castsId])
    return <>
        <CastsWrapper>
            <Container>
                <CastsInner>
                    <CastsImg src={`${BASE_IMG_URL}${person.profile_path}`}></CastsImg>

                    <CastsInfoBox>
                        <CastsName>
                            {person.name}
                        </CastsName>

                        <CastsInfoBoxBorn>
                            <CastsBornText>Born:</CastsBornText> <CastsBornInfo>{person.birthday}</CastsBornInfo>
                        </CastsInfoBoxBorn>
                        <CastsInfoBox>
                            <CastsBornText>Place of birth:</CastsBornText> <CastsBornInfo>{person.place_of_birth}</CastsBornInfo>
                        </CastsInfoBox>

                        <CastsDesc>
                            {person.biography}
                        </CastsDesc>
                    </CastsInfoBox>
                </CastsInner>

                <StyledSingleMovieText>This person was involved in</StyledSingleMovieText>
                {personMovie.length ? (
                    <>
                        <StyledHomeList>
                            {personMovie?.map(item => <MovieCard obj={item} />)}
                        </StyledHomeList>   
                    </>
                ) : <></>}
            </Container>
        </CastsWrapper>
    </>
}