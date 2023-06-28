import { styled } from "styled-components";

export const IngredientListHeader = styled.section`
	align-items: center;
	cursor: pointer;
	display: flex;
	gap: 2ex;
	margin-inline: 2ex;
	user-select: none;

	& h2 {
		margin-block: 1ex;
	}
`

export const IngredientList = styled.ul<{ $collapse: boolean }>`
	display: ${ props => props.$collapse ? 'none' : 'flex' };
	flex-direction: column;
	gap: 2ex;
	margin-block: 0;
	margin-inline: 1ex;
	padding: 0;
`