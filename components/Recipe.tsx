'use client'

import { useEffect, useState } from 'react'
//importacao de hook

import { Recipe as RecipeModel } from "@/app/models/Recipe"
//importacao da interface de Recipe
import { RecipeItem, RecipeHeading, RecipeUuid, RecipeImage } from "./Recipe.styled"
//importacao do estilo de ingrediend 

export default function Recipe(props: RecipeModel): JSX.Element {
   
  const [selected, setSelected] = useState(false) //não faço ideia
  const [hovered, setHovered] = useState(false) //não faço ideia

  const [hydrated, setHydrated] = useState(false) 
  useEffect(() => {
    setHydrated(true)
  }, []);
  if (!hydrated) {
    return <></>
  }
  //não faço ideia
  function handleClick(event: React.MouseEvent<HTMLElement>): void {
    console.log(event)
    setSelected(!selected)
    event.stopPropagation() 
  }
//entendi mas usei 100% da minha capacidade cerebral. selected é a variavel que sabe se está selecionado ou não e setSelect a funcão que seleciona.

  function handleMouseEnter(event: React.MouseEvent<HTMLElement>): void {
    console.log(event)
    setHovered(true) //acho que de alguma forma, essas funções são para o comportameto do mouse do usuario refletir no hover ou select do elemento.
  }

  function handleMouseLeave(event: React.MouseEvent<HTMLElement>): void {
    console.log(event)
    setHovered(false)
  }

  return (
    <RecipeItem $selected={selected} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <RecipeImage $color={ props.color || '#C42' } />
      <RecipeHeading>{props.heading}</RecipeHeading>
      <RecipeUuid $hovered={hovered}>{props.uuid}</RecipeUuid>
    </RecipeItem>
  )
}