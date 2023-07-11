import React, { useState } from 'react';

const ComponentRow = (props) => {
  const [componentName, setComponentName] = useState(props.component_name);
  const [componentHours, setComponentHours] = useState(props.component_hours);

  const handleNameChange = (event) => {
    const changedValue = event.target.value;
    setComponentName(changedValue);
  };

  const handleHoursChange = (event) => {
    const changedValue = event.target.value;
    props.updateTotalHours(componentHours, changedValue);
    setComponentHours(changedValue);
  };

  const handleDelete = () => {
    props.onDelete();
  };

  return (
    <tr key={props.componentId}>
      <td className="cell-compress move-row">
        <i className="icon-drag_indicator"></i>
      </td>
      <td>
        <input
          type="text"
          placeholder="Component Name"
          value={componentName}
          onChange={handleNameChange}
        />
      </td>
      <td className="cell-compress align-right">
        <input
          type="number"
          placeholder="0"
          className="component-amount-input"
          value={componentHours}
          onChange={handleHoursChange}
        />
        Hours
      </td>
      <td className="table-row-actions">
        <div className="delete" onClick={handleDelete}>
          <i className="icon-delete"></i>
        </div>
      </td>
    </tr>
  );
};

export default ComponentRow;