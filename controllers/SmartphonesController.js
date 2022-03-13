import Brands from "../data/Brands.js";

export const GetBrands = (req, res) => {
  let brands = [];
  Brands.map((b) => {
    brands.push(b.name);
  });
  res
    .status(200)
    .json({ success: true, message: "Les marques disponibles.", data: brands });
};

export const GetModelsFromBrand = (req, res) => {
  const { name } = req.body;
  const index = Brands.findIndex((b) => b.name === name);
  if (index === -1) {
    res
      .status(200)
      .json({ success: false, message: "Cette marque n'existe pas!" });
  } else {
    if (Brands[index].models.length > 0) {
      res.status(200).json({
        success: true,
        message: `Résultats pour ${Brands[index].name}.`,
        data: Brands[index],
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Aucun résultats pour ${Brands[index].name} pour le moment.`,
      });
    }
  }
};
