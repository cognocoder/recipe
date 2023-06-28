import { styled } from "styled-components";

export const IngredientItem = styled.li<{ $selected?: boolean }>`
	align-items: center;
	background-color: ${ props => props.$selected ? "#eee" : "#fff" };
	border-radius: 1ex;
	box-shadow: 0px 2px 2px #4448;
	box-sizing: border-box;
	cursor: pointer;
	display: flex;
	gap: 1ex;
	padding-inline: 1ex;
	width: 100%;
	
	&:hover {
		background-color: #eef;
		box-shadow: 0px 3px 6px #4446;
	}
`

export const IngredientHeading = styled.h3`
`

export const IngredientUuid = styled.span`
	color: #888;
	font-size: smaller;
`

export const IngredientImage = styled.div<{ $color?: string }>`
	background-color: ${ props => props.$color || "#4444" };
	border-radius: 4px;
	height: 1rem;
	margin-left: 2ex;
	width: 1rem;
`