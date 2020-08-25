export const contactContent = {
  inputs: [
    {
      placeholder: "Name*",
      type: "text",
      name: "from_name",
    },
    {
      placeholder: "Email*",
      type: "email",
      name: "from_email",
    },
    {
      placeholder: "Phone",
      type: "phone",
      name: "phone",
    },
    {
      placeholder: "Message*",
      rowsMin: 7,
      multi: true,
      type: "text",
      name: "message_html",
    },
  ],
};
