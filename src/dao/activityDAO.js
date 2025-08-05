const Activity = require('../models/Activity');

let activities = [
  new Activity({ id: 1, idosoId: 1, descricao: "Tomar remédio", isDone: false }),
  // mais atividades
];

exports.setIsDone = async (id, done) => {
  const activity = activities.find(a => a.id == id);
  if (activity) {
    activity.isDone = done;
    return activity;
  } else {
    throw new Error("Atividade não encontrada");
  }
};
