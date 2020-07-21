var mongoose = require('mongoose');

var ProcedureSchema = new mongoose.Schema({
  code: String,
  category: String,
  /*type: String,*/
  description: String,
  name: String,
  units: String,
  status: Boolean,
  sti: Boolean,
  ada_code: String,
  icd_code: String,
  sub_category: String,
  IINPB: Boolean,
  RMV: Boolean,
  assistant: Boolean,
  dentist: Boolean,
  hygenist: Boolean,
  GLC: Boolean,
  RPOFU: Boolean,
  URAC: Boolean,
  updated_date: {type: Date, default: Date.now},

});
/**
 * @class Procedures
 * @typeof Model<ProcedureSchema>
 */
const Procedure = mongoose.model('ProcedureDetails',ProcedureSchema);
module.exports = Procedure;
