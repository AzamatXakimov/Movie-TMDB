import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Logo, SerchIcon } from "../../assets/images/icons/icons"
import { Container } from "../../styles/globalStyles"
import { StyledHeader, StyledHeaderForm, StyledHeaderInner, StyledHeaderInput, StyledHeaderLogoLink, StyledHeaderSearchBtn, StyledHeaderUserAvatar, StyledHeaderUserBox, StyledHeaderUserName } from "./header.style"

export const HeaderComponent = () => {
    // const [searchValue, SetSearchValue] = useState("")
    let SearchInput = useRef();
    const navigate = useNavigate();


    function debounce(callback, delay) {
        let timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(callback, delay)
        }
    }

    function check() {
        // SetSearchValue(SearchInput.current.value)
        if(SearchInput.current.value === ""){
            navigate("/")
        }
        else{
            navigate(`/Search/${SearchInput.current.value}`)
        }
        // setPage(1)
    }
    return <>
        <StyledHeader>
            <Container>
                <StyledHeaderInner>
                    <StyledHeaderLogoLink to={"/"}>
                        <Logo/>
                    </StyledHeaderLogoLink>

                    <StyledHeaderForm>
                        <StyledHeaderInput type="search" onInput={debounce(check, 1000)} ref={SearchInput} aria-label="Search Movie" placeholder="Find Your Love Movies"></StyledHeaderInput>
                        <StyledHeaderSearchBtn>
                            <SerchIcon/>
                        </StyledHeaderSearchBtn>
                    </StyledHeaderForm>

                    <StyledHeaderUserBox>
                        <StyledHeaderUserName>User</StyledHeaderUserName>
                        <StyledHeaderUserAvatar></StyledHeaderUserAvatar>
                    </StyledHeaderUserBox>
                </StyledHeaderInner>
            </Container>
        </StyledHeader>
    </>
}