const ComponentGroup = () => {
  const componentData = [
    {
      id: 1,
      component_name: "2-362 - Termite Control",
      component_hours: 1,
    },
    {
      id: 2,
      component_name: "11-100 - Mercantile Equipment",
      component_hours: 2,
    },
    {
      id: 3,
      component_name: "1-570 - Temporary Controls",
      component_hours: 5,
    },
    {
      id: 4,
      component_name: "4-500 - Refractories",
      component_hours: 4,
    },
    {
      id: 5,
      component_name: "13 - Special Construction",
      component_hours: 8,
    },
    {
      id: 6,
      component_name: "2-870 - Sculpture/Ornamental",
      component_hours: 7,
    },
  ];

  return (
    <div className="component-group">
      <table className="component-table">
        <tfoot>
          <tr>
            <td className="cell-compress"></td>
            <td>Component Total: 6</td>
            <td className="cell-compres align-right">6 Hours</td>
            <td className="table-row-actions"></td>
          </tr>
        </tfoot>
        <tbody>
          {componentData.map((data) => (
            <tr key={data.id}>
              <td className="cell-compress move-row">
                <i className="icon-drag_indicator"></i>
              </td>
              <td>
                <input type="text" placeholder="Component Name" />
              </td>
              <td className="cell-compress align-right">
                <input
                  type="number"
                  placeholder="0"
                  className="component-amount-input"
                />
                Hours
              </td>
              <td className="table-row-actions">
                <div className="delete">
                  <i className="icon-delete"></i>
                </div>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" className="add-new-row">
              <i className="icon-add add-component"></i>
              &nbsp; Add New Row
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComponentGroup;
