const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    static associate(models) {
      this.belongsTo(models.User, { constraints: true });
    }
  }

  List.init({
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    description: DataTypes.STRING(200),
  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};
