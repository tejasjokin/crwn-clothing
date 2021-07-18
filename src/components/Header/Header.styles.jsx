import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
	box-shadow: 0px 2px 2px 2px #ccc;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding-bottom: 10px;
	padding-right: 10px;
	padding-left: 25px;
	padding-top: 13px;
`;

export const OptionsContainer = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
	padding: 10px 20px;
	font-size: 22px;
	text-decoration: none;
	color: black;
	cursor: pointer;
`;