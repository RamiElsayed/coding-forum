const getPayloadWithValidFieldsOnly = (validFields, payload) =>
  Object.entries(payload).reduce(
    (acc, [key, value]) =>
      validFields.includes(key) ? { ...acc, [key]: value } : acc,
    {}
  );
  
const applyUser = (user, thread) => {
  if (!user) return;
  thread.belongsToUser = thread.user_id == user.id;
  thread.comments = thread.comments.map(x => {
    x.belongsToUser = x.user_id == user.id;
    return x;
  });
}

module.exports = {
  getPayloadWithValidFieldsOnly,
  applyUser
};
