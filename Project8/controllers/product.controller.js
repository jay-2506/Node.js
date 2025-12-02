import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const{name, price, category} = req.body;

    const product = await Product.create(
      // name,
      // price,
      // category
      req.body
    );
    
    res.status(201).json({ message: "Product Created", product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Pagination + Filtering
export const getProducts = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    // const category = req.query.category;

    // const filter = {};
    // if (category) filter.category = category;

    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      count: products.length,
      page,
      limit,
      products,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
