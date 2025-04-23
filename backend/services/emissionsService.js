const emisionModel = require("../models/emisionModel");

const getAllEmissions = async (userId) => {
  try {
    const emissions = await emisionModel.find({}).populate(userId).sort({ createdAt: -1 });

    console.log("Emissions fetched successfully:", emissions);
    
    return emissions;
  } catch (error) {
    console.error("Error fetching emissions:", error);
    throw new Error("Error fetching emissions");
  }
}

const getEmissionsById = async (id) => {
  try {
    const emission = await emisionModel.findById(id);

    if (!emission) {
      throw new Error("Emission not found");
    }

    console.log("Emission fetched successfully:", emission);
    
    return emission;
  } catch (error) {
    console.error("Error fetching emission:", error);
    throw new Error("Error fetching emission");
  }
}

module.exports = {
  getAllEmissions,
  getEmissionsById,
}