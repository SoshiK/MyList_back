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
      .where({
        "list_id": listId,
        "deleted_at": null
      })
      .then(result => res.json({result}));
  },

  delete: async(req, res) => {
    const itemId = Number(req.params.itemid);
    db("items")
      .where({ id: itemId})
      .update({ deleted_at: new Date()})
      .then(result => {
        if(result === 1) {
          res.json({ status: "ok" });
        }else {
          res.json({ status: "ng" });
        }
      });
  },

  edit: async (req, res) => {
    const { title, description, id, url } = req.body;
    const result = await db("items")
      .where({id, id})
      .update({
        title,
        description,
        url
      });
      if (result === 1) {
        res.json({ status: "ok"});
      } else {
        res.json({ status: "ng"});
      }
  }
}