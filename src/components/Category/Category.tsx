import React from 'react';
import {Link} from "react-router-dom";

interface Props {
  type: string;
  name: string;
  id: string;
  onDelete: (id: string) => void;
}

const Category : React.FC<Props> = ({type, name, id, onDelete}) => {


  return (
    <div className="d-flex align-items-center justify-content-between p-2 border mt-2">
      <div className="d-flex align-items-center">
        <p className="me-2 m-0">{name}</p>
      </div>
      <div className="d-flex align-items-center">
        <p className="m-0 me-2">{type}</p>
        <Link to={"/edit-category/" + id} className="btn btn-primary me-2">Edit</Link>
        <button className="btn btn-danger" onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Category;