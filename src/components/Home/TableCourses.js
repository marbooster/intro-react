import Table from 'react-bootstrap/Table';
import TableEntete from "./enteteTable";
import TableBody from "./bodyTable";

const TableCourses = ({days, hours, onClickAdd}) => {
  return (
    <Table bordered hover>
          <thead>
            <tr className="tableLine">
              <th className="tableHeader" style={{ textAlign: "center" }}>Horaires</th>
              <>
                {days.map((day, index) => (
                  <TableEntete key={index} Jour={day} />
                ))}
              </>
            </tr>
          </thead>
          <tbody>
            {
              hours.map((crenau) => {
                return (
                  <tr key={crenau.id}>
                    <td className="heureCss">{crenau.heure}</td>
                    <TableBody crenauId={crenau.id} crenau={crenau} onAddClick={onClickAdd} />
                  </tr>
                )
              })
            }

          </tbody>
        </Table>
  )
}

export default TableCourses
