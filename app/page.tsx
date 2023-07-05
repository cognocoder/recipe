import { v4 as uuid } from 'uuid';
import Ingredients from '@/components/Ingredients';

import { Ingredient as IngredientModel } from "@/app/models/Ingredient"
import Recipe from '@/components/Recipe';
import { Recipe as RecipeModel } from './models/Recipe';

const ingredients: IngredientModel[] = [
  { heading: 'Arthur', uuid: uuid() },
  { heading: 'Breno', uuid: uuid() },
  { heading: 'Higor', uuid: uuid() },
]

const recipes: RecipeModel[] = [
  { heading: 'Arthur', uuid: uuid() },
  { heading: 'Breno', uuid: uuid() },
  { heading: 'Higor', uuid: uuid() },
]

export default function Home() {
  return (
    <>
      <Ingredients ingredients={ ingredients }></Ingredients>
      {recipes.map(recipe => {
        return <Recipe heading={recipe.heading} key={recipe.uuid} uuid={recipe.uuid}></Recipe>
      })}
    </>
  )
}
