import { styled } from "styled-components";

export const IngredientItem = styled.li<{ $selected?: boolean, $uuid?: string }>`
	align-items: center;
	background-color: ${ props => props.$selected ? "#eee" : "#fff" };
	border-radius: 1ex;
	box-shadow: 0px 2px 2px #4448;
	box-sizing: border-box;
	cursor: pointer;
	display: flex;
	gap: 1ex;
	padding-inline: 2ex;
	width: 100%;
	
	&:hover {
		background-color: #eef;
		box-shadow: 0px 3px 6px #4446;
	}
`

export const IngredientHeading = styled.h3`
	display: inline-block;
	margin-right: 1ex;
`

export const IngredientUuid = styled.span<{ $hovered?: boolean }>`
	color: #888;
	font-size: smaller;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: ${ props => props.$hovered ? 'unset' : 'none' };
`

export const IngredientImage = styled.div<{ $color?: string }>`
	background-color: ${ props => props.$color || "#4444" };
	border-radius: 4px;
	height: 1rem;
	min-width: 1rem;
`