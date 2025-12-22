import Application from "../models/application.model.js";

export const createApplication = async (req, res) => {
  const app = await Application.create({
    ...req.body,
    user: req.user.id,
  });
  res.status(201).json(app);
};

export const getApplications = async (req, res) => {
  const apps = await Application.find({ user: req.user.id });
  res.json(apps);
};

export const updateStatus = async (req, res) => {
  const app = await Application.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(app);
};
