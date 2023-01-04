import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledMovieItem = styled.li`
    position: relative;
    max-width: 295px;
    width: 100%;
`

export const StyledMovieLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
`;

export const StyledMovieImg = styled.img`
    width: 295px;
    height: 417px;
    margin-bottom: 5px;
`;

export const StyledMovieTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 29.2435px;
    line-height: 29px;
    color: #fff;
    overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;

export const StyledMovieRatingList = styled.ul`
    display: flex;
    align-items: center;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 10px;
    list-style: none;
`;

export const StyledMovieRatingItem = styled.li`
    &:not(:last-child){
        margin-right: 4px;
    }
`

export const StyledMovieDate = styled.span`
    display: inline-block;
    margin-bottom: 3px;
    font-size: 17px;
    line-height: 21px;
    color: #fbfbfb;
`;

export const StyledMovieDesc = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 20.24px;
    line-height: 20px;
    color: #fff;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;


export const StyledMovieRating = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    padding-top: 3px;
    padding-right: 21px;
    padding-bottom: 5px;
    padding-left: 21px;
    font-size: 23px;
    line-height: 30px;
    color: #fff;
    background-color: #ff6b59;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 0px 17px;
`