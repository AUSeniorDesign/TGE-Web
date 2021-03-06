/**
 * @author Haven Barnes <hab0020@auburn.edu>
 */

module.exports = (sequelize, DataTypes) => {
    var NewArrivalPost = sequelize.define('NewArrivalPost', {
      // Description of recently arrived items
      description: DataTypes.STRING,
      // Images of recently arrived items 
      image: DataTypes.STRING,
      // Location of branch that is posting the items
      store: DataTypes.STRING,
    });
  
    return NewArrivalPost;
};