import React, { useState, useEffect } from 'react';
import ProjectRow from "../../components/project/ProjectRow";


const ComponentGroup = (props) => {
  const [componentData, setComponentData] = useState([
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
  ]);

  const [totalHours, setTotalHours] = useState(0);
  const [rowCount, setRowCount] = useState(0);

  useEffect(() => {
    // Calculate the initial total hours
    const initialTotalHours = componentData.reduce((total, data) => total + data.component_hours, 0);
    setTotalHours(initialTotalHours);
    setRowCount(componentData.length);
  }, [componentData]);


  const updateTotalHours = (oldValue, newValue) => {
    const difference = newValue - oldValue;
    setTotalHours(totalHours + difference);
  };

  const handleAddNewRow = () => {
    const newRow = {
      id: componentData.length + 1,
      component_name: "",
      component_hours: 0,
    };

    setComponentData([...componentData, newRow]);
  };

  const handleDeleteRow = (rowId) => {
    const updatedData = componentData.filter((data) => data.id !== rowId);
    setComponentData(updatedData);
  };


  return (
    <div className="component-group">
      <table className="component-table">
        <tfoot>
          <tr>
            <td className="cell-compress"></td>
            <td>Component Total: {rowCount}</td>
            <td className="cell-compres align-right">{totalHours} Hours</td>
            <td className="table-row-actions"></td>
          </tr>
        </tfoot>
        <tbody>
          {componentData.map((data) => (
            <ProjectRow
              key={data.id}
              component_name={data.component_name}
              component_hours={data.component_hours}
              updateTotalHours={updateTotalHours}
              onDelete={() => handleDeleteRow(data.id)}
            />
          ))}
          <tr>
            <td colSpan="4" className="add-new-row" onClick={handleAddNewRow}>
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
