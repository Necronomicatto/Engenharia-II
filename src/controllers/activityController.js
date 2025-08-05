const activityDAO = require('../dao/activityDAO');

exports.update = async (req, res) => {
  const { id } = req.params;
  const { done } = req.body;

  try {
    const updated = await activityDAO.setIsDone(id, done);
    res.json({ success: true, updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
