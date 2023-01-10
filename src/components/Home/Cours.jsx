import React from 'react'


const dragStart = (e, id) => {
  e.dataTransfert.setData("courId", id)
  console.log("Drag Started")
}

const draggerOver = (e) => {
  e.preventDefault()
}
const draggerDrop = (e) => {
  let transferedCoursId = e.dataTransfert.getData("courId")
  console.log(transferedCoursId)
}

const Cours = ({crenauheureId, coursId, cours, onAddClick}) => {
  return (
    cours.map((cour) => {
        let nom = cour.libelleCours
        return cour.prix === null ? (
          <span droppable="true" onDragOver={(e) => draggerOver(e)} onDrop={(e) =>draggerDrop(e)} key={cour.id}  > {nom} <br /></span>
        ) : (
          <p draggable onDragStart={(e) => dragStart(e, cours.id)} key={cour.id} id={`coursColorCss${cour.id}`} className={`coursCss ${cour.onSelected ? 'coursColorCss' : ''}`} onClick={() => onAddClick(crenauheureId, coursId, cour.id, cour.prix)}>{nom} : {cour.prix} <br /></p>
        )
    })
  )
}

export default Cours
