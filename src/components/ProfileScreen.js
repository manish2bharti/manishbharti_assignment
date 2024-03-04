import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editPerson } from "../actions";
import PersonModal from "./PersonModal";

const ProfileScreen = () => {
  const { index } = useParams();
  const dispatch = useDispatch();
  const person = useSelector(
    (state) => state.persons.persons[parseInt(index, 10)]
  );
  const [openModal, setOpenModal] = useState(false);
  const [editedPerson, setEditedPerson] = useState(person);

  const handleEditPerson = () => {
    setOpenModal(true);
    setEditedPerson(person);
  };

  const handleSaveEdit = (personData) => {
    dispatch(editPerson(parseInt(index, 10), personData));
    setOpenModal(false);
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Profession: {person.profession}</p>
      <Button
        onClick={handleEditPerson}
        variant="contained"
        color="primary"
        size="large"
        mt={2}
      >
        Edit Person
      </Button>
      {openModal && (
        <PersonModal
          open={!!editedPerson}
          onClose={() => setOpenModal(null)}
          onSave={handleSaveEdit}
          person={editedPerson}
        />
      )}
    </div>
  );
};

export default ProfileScreen;
