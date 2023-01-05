import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import { api } from "../../api/API";
import { MovieCard } from "../../components/movieCard/movieCard.component";
import { Container } from "../../styles/globalStyles";
import { StatusText, StyledHomeList, StyledHomeTitle, StyledPaginationBox } from "../home/home.style";

export const Search = () => {
    const [searchMovies, setSerachMovies] = useState({
        isLoading: true,
        data: [],
        isError: false,
    })
    const [page, setPage] = useState(1)

    const SearchValue = useParams();

    const getMovies = async () => {
        const data = await api.getSearchMovies(page, SearchValue.serachValue);
        console.log(data);
        if(data.data){
            setSerachMovies({
                isLoading: false,
                data: data.data,
                isError: false,
            })
        }
        else{
            setSerachMovies({
                isLoading: false,
                data: [],
                isError: true,
            })
        }
    }
    
    useEffect( () => {
        getMovies()
    }, [page, SearchValue])

    
    console.log(searchMovies);    
    return <>
        <Container>
            {searchMovies.isLoading && <StatusText>Loading . . .</StatusText>}
            {searchMovies.isError && <StatusText>Error . . .</StatusText>}

            {searchMovies.data.results?.length ? (
                <>
                    <StyledHomeTitle>Movies</StyledHomeTitle>
                    <StyledHomeList>
                        {searchMovies.data.results.map(item => <MovieCard obj={item} />)}
                    </StyledHomeList>

                    <StyledPaginationBox>
                        <ReactPaginate 
                            pageCount={searchMovies.data.total_pages}
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