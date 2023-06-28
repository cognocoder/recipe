import { v4 as uuid } from 'uuid';
import Ingredients from '@/components/Ingredients';

import { Ingredient as IngredientModel } from "@/app/models/Ingredient"

const ingredients: IngredientModel[] = [
  { heading: 'Arthur', uuid: uuid() },
  { heading: 'Breno', uuid: uuid() },
  { heading: 'Higor', uuid: uuid() },
]

export default function Home() {
  return (
    <>
      <Ingredients ingredients={ ingredients }></Ingredients>
    </>
  )
}
