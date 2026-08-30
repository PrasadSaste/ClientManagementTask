const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// GET /api/schema
router.get("/", authMiddleware, (req, res) => {

  const schema = [
    {
      type: "html",
      value: "Client Management"
    },

    {
      type: "input",
      name: "clientName",
      label: "Client Name",
      required: true
    },

    {
      type: "input",
      name: "email",
      label: "Email",
      required: true
    },

    {
      type: "table",
      columns: [
        {
          key: "name",
          label: "Client Name"
        },
        {
          key: "email",
          label: "Email"
        },
        {
          key: "status",
          label: "Status"
        }
      ]
    }
  ];

  res.json(schema);
});


module.exports = router;