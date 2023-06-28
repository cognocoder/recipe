'use client'

import { useEffect, useState } from 'react'

import { Ingredient as IngredientModel } from "@/app/models/Ingredient"
import { IngredientItem, IngredientHeading, IngredientImage, IngredientUuid } from "./Ingredient.styled"

export default function Ingredient(props: IngredientModel): JSX.Element {
  
  const [selected, setSelected] = useState(false)
  const [hovered, setHovered] = useState(false)

  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, []);
  if (!hydrated) {
    return <></>
  }
  
  function handleClick(event: React.MouseEvent<HTMLElement>): void {
    console.log(event)
    setSelected(!selected)
  }

  function handleMouseEnter(event: React.MouseEvent<HTMLElement>): void {
    console.log(event)
    setHovered(true)
  }

  function handleMouseLeave(event: React.MouseEvent<HTMLElement>): void {
    console.log(event)
    setHovered(false)
  }

  return (
      <IngredientItem $selected={ selected } onClick={ handleClick } onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
        <IngredientImage $color={ props.color || '#C42' } />
        <IngredientHeading>{ props.heading }</IngredientHeading>
        <IngredientUuid $hovered={ hovered }>{ props.uuid }</IngredientUuid>
      </IngredientItem>
    )
}