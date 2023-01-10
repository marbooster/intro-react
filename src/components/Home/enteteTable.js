const enteteTable = ({Jour}) => {
  return (
      <th className="tableHeader" style={{ textAlign: "center" }}>{Jour.libelle}</th>
  )
}

export default enteteTable
