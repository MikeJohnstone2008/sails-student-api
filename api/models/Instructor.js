/**
 * Instructor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    instructor_id: {
      type: 'integer',
      primaryKey: true,
      maxLength: 11,
      autoIncrement: true
    },
    first_name: {
      type: 'string',
      minLength: 2,
      maxLength: 30
    },
    last_name: {
      type: 'string',
      minLength: 2,
      maxLength: 30
    },
    // major_id: {
    //   type: 'integer',
    //   maxLength: 10
    // },

    major:  {
      model:  'major',
      columnName: 'major_id'
    },

    years_of_experience: {
      type: 'integer',
      maxLength: 2
      // default: 1???
    },
    tenured: {
      type: 'integer',
      maxLength: 1
    },
    
    // toJSON: function() {
    //   var obj = this.toObject();
    //   if(obj.start_date) {
    //     obj.start_date = obj.start_date.slice(0,-14);}
    //   return obj;
    // }
  },
  autoPK: false
};
