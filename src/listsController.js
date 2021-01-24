const db = require("./knex");

module.exports = {
  create: async (req, res) => {
    const { title, description } = req.body;
    const result = await db("lists").insert({
      title,
      description,
      updated_at: new Date()
    });
    res.json({ result });
  },

  get: async (req, res) => {
    db("lists")
      .select("id", "title", "description")
      .then(result => {
        res.json({result});
      })
  }
}