import { Logo, SerchIcon } from "../../assets/images/icons/icons"
import { Container } from "../../styles/globalStyles"
import { StyledContainer, StyledHeader, StyledHeaderForm, StyledHeaderInner, StyledHeaderInput, StyledHeaderLogoLink, StyledHeaderSearchBtn, StyledHeaderUserAvatar, StyledHeaderUserBox, StyledHeaderUserName } from "./header.style"

export const HeaderComponent = () => {
    return <>
        <StyledHeader>
            <Container>
                <StyledHeaderInner>
                    <StyledHeaderLogoLink to={"/"}>
                        <Logo/>
                    </StyledHeaderLogoLink>

                    <StyledHeaderForm>
                        <StyledHeaderInput aria-label="Search Movie" placeholder="Find Your Love Movies"></StyledHeaderInput>

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