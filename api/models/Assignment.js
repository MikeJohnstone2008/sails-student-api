/**
 * Assignment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    assignment_id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    student_id: {
      type: 'integer'
    },

    student:  {
      model: 'student',
      columnName: 'student_id'
    },

    assignment_nbr: {
      type: 'integer'
    },
    // grade_id: {
    //   type: 'integer'
    // },

    grade:  {
      model: 'grade',
      columnName: 'grade_id'
    },
    class:  {
      model: 'class',
      columnName: 'class_id'
    },

  },
  autoPK: false
};
