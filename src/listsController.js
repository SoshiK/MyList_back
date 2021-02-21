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
      .orderBy("created_at")
      .then(result => {
        res.json({result});
      })
  },
  
  edit: async (req, res) => {
    const { title, description, id } = req.body;
    const result = await db("lists")
      .where({id, id})
      .update({
        title,
        description
      });
      if (result === 1) {
        res.json({ status: "ok"});
      } else {
        res.json({ status: "ng"});
      }
  }
}