import Cours from "./Cours"
const bodyTable = ({crenauId, crenau, onAddClick}) => {
  return (
    crenau.cours.map((cours, index) => {
      return (
        <td key={index} style={{ textAlign: "center" }} className={`tdCours`} >
          <Cours crenauheureId={crenauId} coursId={cours.id}  cours={cours} onAddClick={onAddClick} />
        </td>
      )
    })
  )
}

export default bodyTable
