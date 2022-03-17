import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const contacts = [
  {
    id: 1,
    firstName: "Bill",
    lastName: "Gates",
    email: "bill@mail.ru",
    phone: "+79995554411",
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@mail.ru",
    phone: "+79214784515",
  },
  {
    id: 3,
    firstName: "Jackie",
    lastName: "Chan",
    email: "jackie@mail.ru",
    phone: "+79745141421",
  },
  {
    id: 4,
    firstName: "Arnold",
    lastName: "Schwarzenegger",
    email: "arni@mail.ru",
    phone: "+79693517491",
  },
];

export const ContactsPage = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((item) =>
            isEditing ? (
              <TableRow key={item.id}>
                <TableCell>
                  <TextField defaultValue={item.firstName} size="small" />
                </TableCell>
                <TableCell>
                  <TextField defaultValue={item.lastName} size="small" />
                </TableCell>
                <TableCell>
                  <TextField defaultValue={item.email} size="small" />
                </TableCell>
                <TableCell>
                  <TextField defaultValue={item.phone} size="small" />
                </TableCell>
                <TableCell>
                  <DeleteIcon sx={{ color: "#ef5a5a" }} />
                  <EditIcon
                    onClick={() => setIsEditing(!isEditing)}
                    sx={{ color: "#1976d2", cursor: "pointer" }}
                  />
                </TableCell>
              </TableRow>
            ) : (
              <TableRow key={item.id}>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>
                  <DeleteIcon sx={{ color: "#ef5a5a" }} />
                  <EditIcon
                    onClick={() => setIsEditing(!isEditing)}
                    sx={{ color: "#1976d2", cursor: "pointer" }}
                  />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
