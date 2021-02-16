const db = require("./knex");

module.exports = {
  create: async (req, res) => {
  const {list_id, title, description, url} = req.body;
  const result = await db("items").insert({
    title,
    description,
    url,
    list_id,
    updated_at: new Date()
  });
  if(result.rowCount === 1) {
    res.json({ status: "ok" });
  } else {
    res.json({ status: "ng"})
  }
  },

  get: async (req, res) => {
    const listId = Number(req.params.listid);
    db("items")
      .select("id", "title", "description", "url")
      .where("list_id", listId)
      .then(result => res.json({result}));
  }
}