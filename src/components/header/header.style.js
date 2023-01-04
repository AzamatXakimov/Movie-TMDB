import styled from "styled-components";
import { Link } from "react-router-dom";
import UserAvatar from "../../assets/images/UserImg.png"
export const StyledHeader = styled.header`
    padding: 18px 0;
    background: linear-gradient(180deg, #020202 0%, #01000D 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(11.5px);
`;

export const StyledHeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledHeaderLogoLink = styled(Link)`
    display: inline-block;
    margin-right: 15px;
`;

export const StyledHeaderForm = styled.form`
    display: flex;
    /* align-items: center; */
    max-width: 648px;
    width: 100%;
    margin-right: 15px;
    margin-left: 15px;
`;

export const StyledHeaderInput = styled.input`
    display: inline-block;
    width: 100%;
    padding-top: 7px;
    padding-bottom: 5px;
    padding-left: 29px;
    padding-right: 10px;
    font-size: 15px;
    line-height: 33px;
    color: #fff;
    border: none;
    background-color: #1c1c1c;
    box-shadow: inset 0px 4.00702px 4.00702px rgba(0, 0, 0, 0.25);
    border-top-left-radius: 29.0509px;
    border-bottom-left-radius: 29.0509px;

    &::placeholder{
        font-size: 15px;
        line-height: 33px;
        color: #8e8e8e;
    }
`;

export const StyledHeaderSearchBtn = styled.button`
    display: inline-block;
    padding-top: 10px;
    padding-right: 31px;
    padding-bottom: 11px;
    padding-left: 21px;
    background-color: #151313;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 20px 20px 0px;
    border: none;
    cursor: pointer;
`;

export const StyledHeaderUserBox = styled.div`
    display: flex;
    align-items: center;
`;
export const StyledHeaderUserName = styled.span`
    display: inline-block;
    margin-right: 30px;
    font-size: 30px;
    line-height: 40px;
    color: #fff;
`;
export const StyledHeaderUserAvatar = styled.span`
    display: inline-block;
    width: 50px;
    height: 50px;
    background-image: url(${UserAvatar});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
`;