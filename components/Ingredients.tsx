'use client'

import { Ingredient as IngredientModel } from "@/app/models/Ingredient"
import Ingredient from "./Ingredient";
import { IngredientList } from "./Ingredients.styled";

export default function Ingredients(props: { ingredients: IngredientModel[] }): JSX.Element {
	return (
		<>
			<IngredientList>{
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