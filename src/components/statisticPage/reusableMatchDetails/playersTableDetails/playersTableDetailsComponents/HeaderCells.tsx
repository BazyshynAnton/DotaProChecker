import TableHeaderCell from "./TableHeaderCell"

export default function HeaderCells() {
  return (
    <>
      <TableHeaderCell str={"PLAYER"} title={""} />
      <TableHeaderCell str={"K"} title={"Hero Kills"} />
      <TableHeaderCell str={"D"} title={"Hero Deaths"} />
      <TableHeaderCell str={"A"} title={"Hero Assists"} />
      <TableHeaderCell str={"LH"} title={"Number of creeps killed by hero"} />
      <TableHeaderCell str={"DN"} title={"Number of creeps denied by hero"} />
      <TableHeaderCell str={"NET"} title={"Net Worth"} />
      <TableHeaderCell str={"GPM"} title={"Gold Per Minute"} />
      <TableHeaderCell str={"XPM"} title={"Experience Per Minute"} />
      <TableHeaderCell str={"HD"} title={"Damage dealt to heroes"} />
      <TableHeaderCell str={"TD"} title={"Damage dealt to buildings"} />
      <TableHeaderCell str={"HH"} title={"Health restored to heroes"} />
      <TableHeaderCell str={"ITEMS"} title={"Items built"} />
    </>
  )
}
