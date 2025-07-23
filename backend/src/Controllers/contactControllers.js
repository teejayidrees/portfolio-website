import Contact from "../Models/contactModel.js";
export async function getAllContact(req, res) {
  try {
    const contact = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contact);
  } catch (error) {
    console.error("Error in getAllContact controller", error);
    res.status(500).json({ message: "Internal server Error" });
  }
}
export async function createContact(req, res) {
  try {
    const { Name, Email, Subect, Message, PhoneNumber } = req.body;
    const newContact = new Contact({
      Name,
      Email,
      Subect,
      Message,
      PhoneNumber,
    });
    await newContact.save();
    res.status(201).json({ message: "Contact created successfully" });
    console.log("contact created successfully");
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Error in creating Note" });
  }
}
export async function deleteContact(req, res) {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact)
      return res.status(404).json({ message: "Contact not found" });
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error("error in deleteContact controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}
