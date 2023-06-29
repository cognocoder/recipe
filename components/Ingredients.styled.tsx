import { styled } from "styled-components";

export const IngredientListHeader = styled.section`
	& header {
		align-items: center;
		border-radius: 1ex;
		cursor: pointer;
		display: flex;
		gap: 2ex;
		margin: 1ex;
		padding: 1ex;
		user-select: none;

		&:hover {
			background-color: #eef;
			box-shadow: 0px 3px 6px #4446;
		}

		& h2 {
			margin: 0;
		}
	}

	border-radius: 1ex;
	box-sizing: border-box;
`

export const IngredientList = styled.ul<{ $collapse: boolean }>`
	display: ${ props => props.$collapse ? 'none' : 'flex' };
	flex-direction: column;
	gap: 2ex;
	margin-block: 0;
	margin-inline: 1ex;
	padding: 0;
`