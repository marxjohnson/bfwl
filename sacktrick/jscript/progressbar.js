// Progressbar - Version 2.6
// Author: Brian Gosselin of http://scriptasylum.com
// PUT THE NAMES OF ALL YOUR IMAGES THAT NEED TO BE "CACHED" IN THE "imagenames" ARRAY.
// DONT FORGET THE COMMA BETWEEN EACH ENTRY, OR THE TICK MARKS AROUND EACH NAME.
// RELEASE INFO:
// V 2.5 - INITIAL RELEASE (CHANGES BEFORE THIS VERSION UNKNOWN)
// V 2.6 - CHANGED THE action() FUNCTION SO HIDING THE BAR IS SELECTABLE.

var imagenames=['images/wallppr1.gif' 'images/wallppr2.gif' 'images/wallppr3.gif' 'images/about1.gif' 'images/about2.gif' 'images/about3.gif' 'images/bio1.gif' 'images/bio2.gif' 'images/bio3.gif' 'images/disc1.gif' 'images/disc2.gif' 'images/disc3.gif' 'images/faq1.gif' 'images/faq2.gif' 'images/faq3.gif' 'images/forum1.gif' 'images/forum2.gif' 'images/forum3.gif' 'images/gbook1.gif' 'images/gbook2.gif' 'images/gbook3.gif' 'images/gigs1.gif' 'images/gigs2.gif' 'images/gigs3.gif' 'images/links1.gif' 'images/links2.gif' 'images/links3.gif' 'images/lyric1.gif' 'images/lyric2.gif' 'images/lyric3.gif' 'images/news1.gif' 'images/news2.gif' 'images/news3.gif' 'images/pics1.gif' 'images/pics2.gif' 'images/pics3.gif' 'images/ppl1.gif' 'images/ppl2.gif' 'images/ppl3.gif' 'images/sign1.gif' 'images/sign2.gif' 'images/sign3.gif' 'images/view1.gif' 'images/view2.gif' 'images/view3.gif' ];

var loadedcolor='#0000FF' ;         // PROGRESS BAR COLOR
var unloadedcolor='#66CCFF';      // BGCOLOR OF UNLOADED AREA
var barheight=17;                 // HEIGHT OF PROGRESS BAR IN PIXELS
var barwidth=300;                 // WIDTH OF THE BAR IN PIXELS
var bordercolor='#0000FF';        // COLOR OF THE BORDER
var textColor='black';            // COLOR OF TEXT IN LOADING BAR
var textSize='10px';              // SIZE OF TEXT IN LOADING BAR
var textFont='verdana';           // FONT FAMILY OF TEXT IN LOADING BAR
var loadonce=false;                // IF THIS VALUE IS true THE BAR WILL NOT DISPLAY IF THE USER
                                  // RETURNS TO THE PAGE, SET TO false TO HAVE THE BAR REAPPEAR IF
                                  // THE USER RETURNS TO THE PAGE.

// THE FUNCTION BELOW CONTAINS THE ACTION(S) TAKEN ONCE IMAGES ARE DONE LOADING.
// IF NO ACTION IS DESIRED, TAKE EVERYTHING OUT FROM BETWEEN THE CURLY BRACES ({})
// BUT LEAVE THE FUNCTION NAME AND CURLY BRACES IN PLACE. PRESENTLY, IT IS SET TO
// HIDE THE BAR, BUT CAN BE CHANGED EASILY. TO CAUSE A REDIRECT, INSERT THE FOLLOWING
// LINE IN BETWEEN THE CURLY BRACES:
// document.location.href="http://www.redirect_page.html";
// JUST CHANGE THE ACTUAL PAGE IT "POINTS" TO.

var action=function()
{
hidebar();
}

//*****************************************************//
//********  NO NEED TO EDIT BEYOND THIS POINT  ********//
//*****************************************************//

var NS4 = (document.layers)? true : false;
var IE4 = (document.all)? true : false;
var blocksize=(barwidth-2)/(imagenames.length);
barheight=Math.max(barheight,4);
var loaded=0;
var perouter=null;
var perdone=null;
var images=new Array();
var txt='';
if(NS4){
txt+='<table cellspacing=0 cellpadding=0 border=0><tr><td>';
txt+='<ilayer name="perouter" visibility="hide" height="'+barheight+'" width="'+barwidth+'">';
txt+='<layer width="'+barwidth+'" height="'+barheight+'" bgcolor="'+bordercolor+'" top="0" left="0"></layer>';
txt+='<layer width="'+(barwidth-2)+'" height="'+(barheight-2)+'" bgcolor="'+unloadedcolor+'" top="1" left="1"></layer>';
txt+='<layer name="perdone" width="'+(barwidth-2)+'" height="'+(barheight-2)+'" bgcolor="'+loadedcolor+'" top="1" left="1"></layer>';
txt+='<layer width="'+(barwidth-2)+'" height="'+(barheight-2)+'" top="1" left="1">';
txt+='<table cellpadding=0 cellspacing=0 border=0 width="'+(barwidth-2)+'" height="'+(barheight-2)+'"><tr><td align="center" valign="middle">';
txt+='<span style="color:'+textColor+'; font-size:'+textSize+'; font-family:'+textFont+'">Processing... (click to dismiss)</span>';
txt+='</td></tr></table>';
txt+='</layer>';
txt+='</ilayer>';
txt+='</td></tr></table>';
}else{
txt+='<div id="perouter" style="position:relative; visibility:hidden; background-color:'+bordercolor+'; width:'+barwidth+'px; height:'+barheight+'px;">';
txt+='<div style="position:absolute; top:1px; left:1px; width:'+(barwidth-2)+'px; height:'+(barheight-2)+'px; background-color:'+unloadedcolor+'; font-size:1px;"></div>';
txt+='<div id="perdone" style="position:absolute; top:1px; left:1px; width:0px; height:'+(barheight-2)+'px; background-color:'+loadedcolor+'; font-size:1px;"></div>';
txt+='<div style="position:absolute; top:2px; left:1px; width:'+(barwidth-2)+'px; height:'+(barheight-2)+'px; color:'+textColor+'; font-size:'+textSize+'; font-family:'+textFont+'; text-align:center; cursor:default">Processing... (click to dismiss)</div>';
txt+='</div>';
}
document.write(txt);

//THIS FUNCTION BY MIKE HALL OF BRAINJAR.COM
function findlayer(name,doc){
var i,layer;
for(i=0;i<doc.layers.length;i++){
layer=doc.layers[i];
if(layer.name==name)return layer;
if(layer.document.layers.length>0)
if((layer=findlayer(name,layer.document))!=null)
return layer;
}
return null;
}

function loadimages(){
perouter=(NS4)?findlayer('perouter',document):(IE4)?document.all['perouter']:document.getElementById('perouter');
perdone=(NS4)?perouter.document.layers['perdone']:(IE4)?document.all['perdone']:document.getElementById('perdone');
if(NS4)perouter.captureEvents(Event.MOUSEUP);
perouter.onmouseup=hidebar;
clipEl(perdone,0,0,barheight-2,0);
if(NS4)perouter.visibility="show";
else perouter.style.visibility="visible";
for(n=0;n<imagenames.length;n++){
images[n]=new Image();
images[n].src=imagenames[n];
if(images[n].complete)dispbars();
images[n].onload=dispbars;
images[n].onerror=dispbars;
}}

function dispbars(){
loaded++;
clipEl(perdone, 0, blocksize*loaded, barheight-2, 0);
if(loaded>=imagenames.length)setTimeout('action()', 800);
}

function hidebar(){
if(NS4)perouter.visibility="hide";
else perouter.style.visibility="hidden";
}

function clipEl(el, ct, cr, cb, cl){
if(NS4){
el.clip.left=cl;
el.clip.top=ct;
el.clip.right=cr;
el.clip.bottom=cb;
}else el.style.width=cr+'px';
}

//CREDIS TO DYNAMICDRIVE FOR THE FUNCTION BELOW
function get_cookie(Name) {
var search=Name+"=";
var returnvalue="";
if(document.cookie.length>0){
offset=document.cookie.indexOf(search);
if(offset!=-1){
offset+=search.length;
end=document.cookie.indexOf(";",offset);
if(end==-1)end=document.cookie.length;
returnvalue=unescape(document.cookie.substring(offset,end));
}}
return returnvalue;
}

window.onload=function(){
var okPB=false;
if (loadonce){
if(get_cookie("progB")==""){
okPB=true;
document.cookie="progB=yes";
}}
else okPB=true;
if(okPB)setTimeout('loadimages()',300);
}