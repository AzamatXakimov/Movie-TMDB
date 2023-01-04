import { useEffect, useState } from "react"
import { api } from "../../api/API"
import ReactPaginate from "react-paginate";
import { StatusText, StyledHomeList, StyledHomeTitle, StyledPaginationBox } from "./home.style";
import { Container } from "../../styles/globalStyles";
import { MovieCard } from "../../components/movieCard/movieCard.component"
export const Home = () => {
    const [popularMovies, setPopularMovies] = useState({
        isLoading: true,
        data: [],
        isError: false,
    })
    const [page, setPage] = useState(1)

    const getMovies = async () => {
        const data = await api.getPopularMovies(page);
        console.log(data);
        if(data.data){
            setPopularMovies({
                isLoading: false,
                data: data.data,
                isError: false,
            })
        }
        else{
            setPopularMovies({
                isLoading: false,
                data: [],
                isError: true,
            })
        }
    }
    
    useEffect( () => {
        getMovies()
    }, [page])
    
    console.log(popularMovies);    
    return <>
        <Container>
            {popularMovies.isLoading && <StatusText>Loading . . .</StatusText>}
            {popularMovies.isError && <StatusText>Error . . .</StatusText>}

            {popularMovies.data.results?.length ? (
                <>
                    <StyledHomeTitle>Movies</StyledHomeTitle>
                    <StyledHomeList>
                        {popularMovies.data.results.map(item => <MovieCard obj={item} />)}
                    </StyledHomeList>

                    <StyledPaginationBox>
                        <ReactPaginate 
                            pageCount={popularMovies.data.total_pages}
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
            ): (
                <StatusText>Not Found</StatusText>
            )}

        </Container>
    </>
}