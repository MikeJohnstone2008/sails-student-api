/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    major_id: {   //change to major:
      type: 'integer',    //chang to "model: major"
      //add  columnName: "major_id"
      primaryKey: true,
      autoIncrement: true
    },
    major: {
      type: 'string',
      maxLength: 30
    },
    sat: {
      type: 'integer',
      maxLength: 4
    },

  },
  autoPK: false
};
