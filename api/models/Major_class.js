/**
 * Major_class.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    major_class_id: {
      type: 'integer',
      maxLength: 11,
      primaryKey: true,
      autoIncrement: true
    },
    major: {
      model: 'major',
      columnName: 'major_id'
    },
    // class_id: {
    //   type: 'integer',
    //   maxLength: 11
    // },
    class: {
      model: 'class',
      columnName: 'class_id'
    },

  },
  tableName: "major_class"
};

