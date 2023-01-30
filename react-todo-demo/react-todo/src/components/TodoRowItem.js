function TodoRowItem(props) {


  return(
    <tr>
      <th scope='row'>{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
    </tr>
  )
}

//este comando permite que usemos esse componente dentro da nossa aplicação
export default TodoRowItem
