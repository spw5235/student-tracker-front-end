'use strict';

const createRowHTML = function(tdIDtxt, TdFntxt, tdLntxt, tdGradetxt) {

  let tableTrGenerated = $('<tr class="tg-tr-gen"></tr>');

  let tdID = $('<td class="tg-td-id tg-id-hide">id</td>');
  tdID.text(tdIDtxt);

  let tdFn = $('<td class="tg-td-fn">fn</td>');
  tdFn.text(TdFntxt);

  let tdLn = $('<td class="tg-td-ln">ln</td>');
  tdLn.text(tdLntxt);

  let tdGrade = $('<td class="tg-td-grade">grade</td>');
  tdGrade.text(tdGradetxt);

  let tdDetails = $('<td class="tg-td-details">View/Update</td>');

  let tableGenAppend;

  tableGenAppend = $(tableTrGenerated).append(tdID);
  tableGenAppend = $(tableTrGenerated).append(tdFn);
  tableGenAppend = $(tableTrGenerated).append(tdLn);
  tableGenAppend = $(tableTrGenerated).append(tdGrade);
  tableGenAppend = $(tableTrGenerated).append(tdDetails);

  return tableGenAppend;
};


module.exports = {
  createRowHTML,
};
