import React from "react";
import PropTypes from "prop-types";

const DialogDelete = ({ open, title, handleDelete, handleCancel }) => (
  <div>
    <div>Хотите удалить запись</div>
    <div>
      <button onCLick={handleDelete} />
      <button onCLick={handleCancel} />
    </div>
  </div>
);

DialogDelete.propTypes = {
  open: PropTypes.boolean
};

DialogDelete.defaultProps = {
  open: false
};

export default DialogDelete;
