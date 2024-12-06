import foodModel from "../models/foodModel.js";
import fs from "fs";
// add food item
const AddFood = async (req, res) => {
  const { name, description, price, category } = req.body;
  const food = await new foodModel({
    name: name,
    description: description,
    price: price,
    category: category,
    image: req.file.filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    res.json({ success: false, message: "Error" });
  }
};
const food_list = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
const removeFood = async (req, res) => {
  const id = req.params.id;
  try {
    const food = await foodModel.findById({ _id: id });

    fs.unlink("uploads/" + food.image, () => {});

    await foodModel.findByIdAndDelete({ _id: id });
    res.json({ success: true, message: "food removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
export { AddFood, food_list, removeFood };
