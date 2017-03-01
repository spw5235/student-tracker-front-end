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

  let tdViewBtn = $('<button class="view-button">View</button>');
  let tdUpdateBtn = $('<button class="update-button">Update</button>');
  let tdDeleteBtn = $('<button class="delete-button">Delete</button>');

  // let viewBtnClassName = "table-gen-btn-view";
  // let updateBtnClassName = "table-gen-btn-update";
  // let deleteBtnClassName = "table-gen-btn-delete";

  let buttonIdClassTextView = tdIDtxt + "viewid";
  let buttonIdClassTextDelete = tdIDtxt + "deleteid";
  let buttonIdClassTextUpdate = tdIDtxt + "updateid";

  tdViewBtn.attr("id", buttonIdClassTextView);
  tdUpdateBtn.attr("id", buttonIdClassTextDelete);
  tdDeleteBtn.attr("id", buttonIdClassTextUpdate);
  // tdViewBtn.addClass(viewBtnClassName);
  // tdUpdateBtn.addClass(updateBtnClassName);
  // tdDeleteBtn.addClass(deleteBtnClassName);

  let tdDetailsView = $('<td class="tg-td-details-view"></td>');
  tdDetailsView.append(tdViewBtn);

  let tdDetailsUpdate = $('<td class="tg-td-details-update"></td>');
  tdDetailsUpdate.append(tdUpdateBtn);

  let tdDetailsDelete = $('<td class="tg-td-details-delete"></td>');
  tdDetailsDelete.append(tdDeleteBtn);

  let tableGenAppend;

  tableGenAppend = $(tableTrGenerated).append(tdID);
  tableGenAppend = $(tableTrGenerated).append(tdFn);
  tableGenAppend = $(tableTrGenerated).append(tdLn);
  tableGenAppend = $(tableTrGenerated).append(tdGrade);
  tableGenAppend = $(tableTrGenerated).append(tdDetailsView);
  tableGenAppend = $(tableTrGenerated).append(tdDetailsUpdate);
  tableGenAppend = $(tableTrGenerated).append(tdDetailsDelete);

  return tableGenAppend;
};

// const addTableClass = function(tableId) {
//   let text =
// }


module.exports = {
  createRowHTML,
};
