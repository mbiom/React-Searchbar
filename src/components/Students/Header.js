import React from 'react';

import addIcon from 'assets/icons/add-circle-outline.svg';

const Header = ({ onAddStudentClick, onAssignClick, onAddRoomClick }) => (
  <div className="Students__header">
    <div className="Students__header-title">
      Students
    </div>

    <div className="Students__header-add-student" onClick={onAssignClick}>
      <img className="Students__header-add-student-icon" src={addIcon} title="Assign the room" />
      <span>Assign the room</span>
    </div>

    <div className="Students__header-add-student" onClick={onAddStudentClick}>
      <img className="Students__header-add-student-icon" src={addIcon} title="Add student" />
      <span>Add student</span>
    </div>

    <div className="Students__header-add-student" onClick={onAddRoomClick}>
      <img className="Students__header-add-student-icon" src={addIcon} title="Add room" />
      <span>Add room</span>
    </div>
  </div>
);

export default Header;
