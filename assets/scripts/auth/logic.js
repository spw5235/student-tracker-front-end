'use strict';

const createRowHTML = function(tdIDtxt, TdFntxt, tdLntxt, tdGradetxt, tdCommentTxt) {

  let tableTrGenerated = $('<tr class="tg-tr-gen"></tr>');

  let tdID = $('<td class="tg-td-id tg-id-hide">id</td>');
  tdID.text(tdIDtxt);

  let tdFn = $('<td class="tg-td-fn">fn</td>');
  tdFn.text(TdFntxt);

  let tdLn = $('<td class="tg-td-ln">ln</td>');
  tdLn.text(tdLntxt);

  let tdGrade = $('<td class="tg-td-grade"></td>');
  tdGrade.text(tdGradetxt);

  let tdComment = $('<td class="tg-td-comment tg-id-hide"></td>');
  tdComment.text(tdCommentTxt);

  let tdViewBtn = $('<button type="button" class="view-button btn btn-secondary">View</button>');
  let tdUpdateBtn = $('<button type="button" class="update-button btn btn-secondary">Update</button>');
  let tdDeleteBtn = $('<button type="button" class="delete-button btn btn-secondary">Delete</button>');

  let buttonIdClassTextView = tdIDtxt + "viewid";
  let buttonIdClassTextDelete = tdIDtxt + "deleteid";
  let buttonIdClassTextUpdate = tdIDtxt + "updateid";

  tdViewBtn.attr("id", buttonIdClassTextView);
  tdUpdateBtn.attr("id", buttonIdClassTextDelete);
  tdDeleteBtn.attr("id", buttonIdClassTextUpdate);

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
  tableGenAppend = $(tableTrGenerated).append(tdComment);
  tableGenAppend = $(tableTrGenerated).append(tdDetailsView);
  tableGenAppend = $(tableTrGenerated).append(tdDetailsUpdate);
  tableGenAppend = $(tableTrGenerated).append(tdDetailsDelete);

  return tableGenAppend;
};

const createShowTable = function(TdFntxt, tdLntxt, tdGradetxt, tdCommentTxt) {
  let tableId = $('<table id="table-gen-show" class="table-striped"></table>');
  let tableBody = $("<tbody></tbody>");

  let tableTrGeneratedName = $('<tr class="tr-gen-name-show"></tr>');
  let tableTrGeneratedGrade = $('<tr class="tr-gen-grade-show"></tr>');
  let tableTrGeneratedComments = $('<tr class="tr-gen-comments-show"></tr>');
  let tableTrGeneratedUpdateBtn = $('<tr class="tr-gen-update-btn"></tr>');

  let tdName = $('<td class="td-gen-name-show"></td>');
  let tdGrade = $('<td class="td-gen-grade-show"></td>');
  let tdComments= $('<td class="td-gen-comments-show"></td>');

  // Update Button part of show table
  let showUpdateBtn = $('<button class="show-update-btn btn btn-secondary" id="update-record-btn">Update Note</button>');
  let tdUpdateBtn = $('<td class="td-gen-update-show"></td>');
  let updateBtnAppend = $(tdUpdateBtn).append(showUpdateBtn);

  let fullName = TdFntxt + " " + tdLntxt;
  tdName.text(fullName);

  let gradeTxt = "Grade: " + tdGradetxt;
  tdGrade.text(gradeTxt);

  tdComments.text(tdCommentTxt);

  let tableGenAppend;

  tableGenAppend = $(tableTrGeneratedName).append(tdName);
  tableGenAppend = $(tableTrGeneratedGrade).append(tdGrade);
  tableGenAppend = $(tableTrGeneratedComments).append(tdComments);
  tableGenAppend = $(tableTrGeneratedUpdateBtn).append(updateBtnAppend);

  tableGenAppend = $(tableBody).append(tableTrGeneratedName);
  tableGenAppend = $(tableBody).append(tableTrGeneratedGrade);
  tableGenAppend = $(tableBody).append(tableTrGeneratedComments);
  tableGenAppend = $(tableBody).append(tableTrGeneratedUpdateBtn);
  tableGenAppend = $(tableId).append(tableBody);


  return tableGenAppend;

};


module.exports = {
  createRowHTML,
  createShowTable,
};
