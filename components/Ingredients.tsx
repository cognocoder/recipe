'use client'

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import { Ingredient as IngredientModel } from "@/app/models/Ingredient"
import Ingredient from "./Ingredient";
import { IngredientList, IngredientListHeader } from "./Ingredients.styled";

export default function Ingredients(props: { ingredients: IngredientModel[] }): JSX.Element {

	const [collapseIngredientList, setCollapseIngredientList] = useState(false)

	const ingredientListIcon = collapseIngredientList
		? <FaAngleDown size={18}/>
		: <FaAngleUp size={18}/>

	function handleClick(event: React.MouseEvent<HTMLElement>): void {
		console.log(event)
		setCollapseIngredientList(!collapseIngredientList)
	}

	return (
		<>
			<IngredientListHeader onClick={handleClick}>
				{ingredientListIcon} <h2>Ingredients</h2>
			</IngredientListHeader>
			<IngredientList $collapse={ collapseIngredientList }>{
				props.ingredients.map(ingredient => {
					return <Ingredient
						key={ingredient.uuid}
						heading={ingredient.heading}
						uuid={ingredient.uuid}/>
				})
			}</IngredientList>
		</>
	)
}