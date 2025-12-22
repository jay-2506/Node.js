import Application from "../models/application.model.js";

export const stats = async (req, res) => {
  const total = await Application.countDocuments({ user: req.user.id });
  const offers = await Application.countDocuments({
    user: req.user.id,
    status: "OFFER",
  });

  res.json({
    totalApplications: total,
    offerRate: total ? ((offers / total) * 100).toFixed(2) + "%" : "0%",
  });
};
