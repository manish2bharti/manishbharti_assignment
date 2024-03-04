import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const PersonModal = ({ open, onClose, onSave, person }) => {
  const [formData, setFormData] = useState(
    person || { name: "", age: "", profession: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: 400,
        }}
      >
        <Typography variant="h6" gutterBottom align="center">
          {person ? "Edit Person" : "Add New Person"}
        </Typography>
        <Box>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <Box display="flex" justifyContent="center">
            <Button
              onClick={handleSave}
              variant="contained"
              color="primary"
              size="large"
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default PersonModal;
