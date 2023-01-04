import styled from "styled-components";
import WatchIcon from "../../assets/images/vatch-icon.svg"
export const SingleMovieWrapper = styled.div`
    background-position: center;
    /* background-attachment: fixed; */
    background-size: cover;
    background-repeat: no-repeat;
`;

export const SingleMoviesWrapperOverlay = styled.div`
    padding-top: 138px;
    /* padding-bottom: 70px; */
    padding-bottom: 346px;
    background-color: rgba(0, 0, 0, 0.53);
    box-shadow: inset 0px 4px 218px rgba(0, 0, 0, 0.75);
    /* backdrop-filter: blur(34px); */
`
export const SingleMovieInner = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;
export const SingleMovieInfoBox = styled.div`
    max-width: 1204px;
    width: 100%;
    margin-right: 120px;
`;

export const SingleMovieImgBox = styled.div`
    position: relative;
`
export const SingleMovieImg = styled.img`
    width: 500px;
`
export const SingleMovieTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 50px;
    font-weight: 700;
    font-size: 50px;
    line-height: 40px;

    color: #fff;
`
export const SingleMovieRatingList = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 20px;
    padding-left: 0;
    list-style: none;
`
export const SingleMovieRatingItem = styled.li`
    &:not(:last-child){
        margin-right: 8px;
    }
`
export const SingleMovieVotes = styled.span`
    display: inline-block;
    font-size: 30px;
    line-height: 39px;
    color: #fff;
`
export const SingleMovieReliseCompanys = styled.h3`
    margin-bottom: 10px;
    font-size: 30px;
    line-height: 39px;
    color: #fff;
`
export const SingleMovieCompanyList = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 50px;
    padding-left: 0;
    list-style: none;
`
export const SingleMovieCompanyItem = styled.li`
    padding: 25px;
    background-color: rgba(255, 243, 243, 0.1);
    backdrop-filter: blur(30px);
    &:not(:last-child){
        margin-right: 50px;
    }
    border-radius: 20px;
`
export const SingleMovieCompanyImg = styled.img`
    width: 200px;
    height: auto;
`
export const SingleMovieDesc = styled.p`
    margin-top: 0;
    margin-bottom: 67px;
    font-size: 30px;
    line-height: 30px;
    color: #fff;
`
export const SingleMovieBtn = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    max-width: 376px;
    width: 100%;
    padding: 14px;
    font-weight: 700;
    font-size: 31.1111px;
    line-height: 53px;
    text-transform: uppercase;
    color: #fff;
    background: linear-gradient(270deg, #FF6B59 0.81%, rgba(255, 107, 89, 0) 100%), #BE123C;
    border-radius: 5.33px;
    border: none;

    &::before{
        display: inline-block;
        width: 36px;
        height: 36px;
        margin-right: 22px;
        /* background-image: url("../../assets/images/vatch-icon.svg"); */
        background-image: url(${WatchIcon});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        content: "";
    }
`;

export const StyledMovieGatresBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
`
export const StyledMovieGatresTitle = styled.strong`
    display: inline-block;
    margin-right: 20px;
    font-size: 30px;
    line-height: 39px;
    color: #fff;
`
export const StyledMovieGatresList = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
`
export const StyledMovieGatresItem = styled.li`
    padding: 15px;
    font-size: 25px;
    line-height: 15px;
    color: #fff;
    background-color: #ff6b59;
    border-radius: 15px;
    &:not(:last-child){
        margin-right: 20px;
    }
`
export const StyledMovieStatus = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    padding: 10px;
    font-size: 20.24px;
    line-height: 29px;
    color: #fff;
    background-color: #ff6b59;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 0px 5px;
`;


// export const StyledSingleMovieModal = styled.div`

// `


export const StyledCastsItems = styled.div`
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
`;

export const  StyledCastsImg = styled.img`
    display: inline-block;
    width: 215px;
    height: 280px;
`;

export const StyledCastsIngobox = styled.div`
    padding: 15px;
`;

export const StyledCastsTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 11px;
    font-weight: 700;
    font-size: 20px;
    /* color: #fff; */
`
export const StyledCastsDesc = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 10px;
    /* color: #fff; */
`