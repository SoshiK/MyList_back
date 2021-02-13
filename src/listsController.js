const db = require("./knex");

module.exports = {
  create: async (req, res) => {
    const { title, description } = req.body;
    const result = await db("lists").insert({
      title,
      description,
      updated_at: new Date()
    });
    if(result.rowCount === 1) {
      res.json({ status: "ok" });
    } else {
      res.json({ status: "ng"})
    }
  },

  get: async (req, res) => {
    db("lists")
      .select("id", "title", "description")
      .then(result => {
        res.json({result});
      })
  }
}