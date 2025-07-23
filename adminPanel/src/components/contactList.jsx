import React, { useEffect, useState } from "react";
import axios from "../axiosInstance";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import moment from "moment";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");

  // Fetch all beats from backend
  const fetchContact = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/contacts");
      setContacts(res.data);
    } catch (err) {
      console.error("Failed to fetch contact", err);
      setError(err);
    }
  };

  // Delete a beat by ID
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;
    try {
      await axios.delete(`http://localhost:4000/api/contacts/${id}`);
      // Remove deleted beat from UI
      setContacts((prev) => prev.filter((contact) => contact._id !== id));
      console.log("Contact deleted successfully");
    } catch (err) {
      console.error("Delete failed", err);
    }
  };
  //fetches contact logic onload
  useEffect(() => {
    fetchContact();
  }, []);

  return (
    <div className="container py-5">
      {/* Back link to admin dashboard */}
      <div className="mb-4">
        <Link to="/admin" className="btn btn-outline-dark">
          <FaArrowLeft className="me-2" />
          Back to Home
        </Link>
      </div>

      <h2 className="mb-4">All Contact sent</h2>
      {error ? (
        <div
          style={{
            backgroundColor: error ? "red" : "green",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}>
          <p>{error}</p>
        </div>
      ) : (
        ""
      )}
      <div className="d-flex flex-column align-items-center ">
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="d-flex justify-content-center border rounded-3 mb-3 p-3 border-primary text-center flex-column">
            {/* Contact info */}
            <p>
              <strong>Name: </strong>
              {contact.Name}
            </p>
            <p>
              <strong>Email: </strong>
              {contact.Email}
            </p>
            <p>
              <strong>Subject: </strong>
              {contact.Subject}
            </p>
            <p>
              <a
                href={`https://wa.me/${contact.PhoneNumber}?text=Thank%20you%20for%20reaching%20out`}
                target="_blank"
                rel="noopener noreferrer">
                <strong>Phone Number/ Whatsapp: </strong>
                {contact.PhoneNumber}
              </a>
            </p>
            <p>
              <strong>Message: </strong>
              {contact.Message}
            </p>
            <p>
              <strong>Time: </strong>
              {moment(contact.createdAt).format("DD/MM/YYYY HH:mm:ss")}
            </p>
            {/* Action button: Delete */}
            <div>
              <button
                className="btn btn-sm btn-danger me-2"
                onClick={() => handleDelete(contact._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
