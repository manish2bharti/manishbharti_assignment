import {
  AddCircleOutline as AddCircleOutlineIcon,
  ExitToApp as ExitToAppIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPerson } from "../actions";
import PersonModal from "./PersonModal";

const HomeScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.persons.persons);
  const [openModal, setOpenModal] = useState(false);
  const [newPerson, setNewPerson] = useState({
    name: "",
    age: "",
    profession: "",
  });

  const handleAddPerson = (personData) => {
    dispatch(addPerson(personData));
    setNewPerson({ name: "", age: "", profession: "" });
    setOpenModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    history.push("/login");
  };

  return (
    <Box mt={4}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" gutterBottom>
          Persons List
        </Typography>
        <Tooltip title="Logout">
          <IconButton onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box display="flex" justifyContent="flex-end" mt={2} mb={2}>
        <Button
          onClick={() => setOpenModal(true)}
          variant="contained"
          color="primary"
          size="large"
          startIcon={<AddCircleOutlineIcon />}
        >
          Person
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Profession</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {persons.map((person, index) => (
              <TableRow
                key={index}
                onClick={() => history.push(`/profile/${index}`)}
                style={{ cursor: "pointer" }}
              >
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.age}</TableCell>
                <TableCell>{person.profession}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PersonModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleAddPerson}
      />
    </Box>
  );
};

export default HomeScreen;
