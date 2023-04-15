import Privyr from "privyr-sdk";
Privyr.init("Cs4ifdp3");

const handleDataUpload = (data) => {
  Privyr.createLead({
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone: data.phone,
    custom_fields: {
      field_name_1: data.customField1,
      field_name_2: data.customField2,
      // add more custom fields as needed
    },
  })
    .then(() => {
      // handle success
    })
    .catch((error) => {
      // handle error
    });
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  handleDataUpload(data);
};

<form onSubmit={handleSubmit}>
  <label htmlFor="firstName">First Name</label>
  <input type="text" name="firstName" id="firstName" />

  <label htmlFor="lastName">Last Name</label>
  <input type="text" name="lastName" id="lastName" />

  <label htmlFor="email">Email</label>
  <input type="email" name="email" id="email" />

  <label htmlFor="phone">Phone</label>
  <input type="tel" name="phone" id="phone" />

  <label htmlFor="customField1">Custom Field 1</label>
  <input type="text" name="customField1" id="customField1" />

  <label htmlFor="customField2">Custom Field 2</label>
  <input type="text" name="customField2" id="customField2" />

  <button type="submit">Submit</button>
</form>;
