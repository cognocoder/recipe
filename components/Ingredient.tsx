'use client'

import { useEffect, useState } from 'react'

import { Ingredient as IngredientModel } from "@/app/models/Ingredient"
import { IngredientItem, IngredientHeading, IngredientImage, IngredientUuid } from "./Ingredient.styled"

export default function Ingredient(props: IngredientModel): JSX.Element {
  
  const [selected, setSelected] = useState(false)

  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, []);
  if (!hydrated) {
    return <></>
  }
  
  function handleClick(event: React.MouseEvent<HTMLLIElement>): void {
    console.log(event)
    setSelected(!selected)
  }

  return (
      <IngredientItem onClick={handleClick} $selected={ selected } >
        <IngredientImage $color={ props.color || '#C42' } />
        <IngredientHeading>{ props.heading }</IngredientHeading>
        <IngredientUuid>{ props.uuid }</IngredientUuid>
      </IngredientItem>
    )
}