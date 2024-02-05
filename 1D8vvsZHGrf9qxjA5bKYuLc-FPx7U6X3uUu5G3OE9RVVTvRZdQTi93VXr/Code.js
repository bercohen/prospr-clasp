function onOpen(){
ProsprScript.onOpen()
}
function setView(){
ProsprScript.setView()
}
function showSidebar() {
ProsprScript.showSidebar() 
}
function newCategory(){
ProsprScript.newCategory()
}
function include(filename) {
ProsprScript.include(filename) 
} 
function getGroup(){
ProsprScript.getGroup()
}
function getCategories(){
ProsprScript.getCategories()
}
function dropDown(sourceSheet,column,startRow){
ProsprScript.dropDown(sourceSheet,column,startRow)
}
function newCatInfo(form){
ProsprScript.newCatInfo(form)
}
function titleCase(string) {
ProsprScript.titleCase(string) 
}
function FindLastRowofSpecificColumn(sheet,col){
ProsprScript.FindLastRowofSpecificColumn(sheet,col)
} 
function Trigger() {
ProsprScript.Trigger() 
}  
function triggerOff() {
ProsprScript.triggerOff() 
}  
function getMissingGroups() {
ProsprScript.getMissingGroups() 
}
  
function tabNames(){
var ss=SpreadsheetApp.getActiveSpreadsheet()
var sheets=ss.getSheets()
var sheetNames
for (var i=0;i<sheets.length;i++){
sheetNames=sheetNames+","+sheets[i].getName()
}
console.log(sheetNames)
}

function removeRangeProtections(){
var ss=SpreadsheetApp.getActiveSpreadsheet()
var sheets=ss.getSheets()
for(var x=1;x<sheets.length;x++){
 //if(sheets[x].getName()!="Transactions") {continue}
var protections = sheets[x].getProtections(SpreadsheetApp.ProtectionType.RANGE);
ss.toast(sheets[x].getName()+" prot:"+protections.length,"status",100)
for (var i = 0; i < protections.length; i++) {
  var protection = protections[i];
  if (protection.canEdit()) {
    protection.remove();
    
  }
}
console.log(sheets[x].getName())
}
ss.toast("done","status",3)
}