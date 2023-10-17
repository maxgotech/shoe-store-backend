const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  mail: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

const Customer = sequelize.define("customer", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
});

const Sale = sequelize.define("sale", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  quantity: { type: DataTypes.INTEGER },
  date: { type: DataTypes.DATE },
});

const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  price: { type: DataTypes.INTEGER, allowNull: false },
  picture_path: { type: DataTypes.STRING },
  desc: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
});

const MainStoreProduct = sequelize.define("mainProduct", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  quantity: { type: DataTypes.INTEGER },
});

const AddedProduct = sequelize.define("addedProduct", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  quantity: { type: DataTypes.INTEGER },
});

const Stock = sequelize.define("stock", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  quantity: { type: DataTypes.INTEGER },
  markup: { type: DataTypes.INTEGER },
});

Customer.hasMany(Sale);
Sale.belongsTo(Customer);

Stock.hasMany(Sale);
Sale.belongsTo(Stock);

User.hasMany(Stock);
Stock.belongsTo(User);

Product.hasOne(Stock);
Stock.belongsTo(Product);

Product.hasOne(MainStoreProduct);
MainStoreProduct.belongsTo(Product);

Product.hasOne(AddedProduct);
AddedProduct.belongsTo(Product);

User.hasMany(AddedProduct);
AddedProduct.belongsTo(User);

module.exports = {
  User,
  Customer,
  Product,
  MainStoreProduct,
  AddedProduct,
  Stock,
  Sale,
};