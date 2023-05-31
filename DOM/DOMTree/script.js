/*
created in memory
root --> html body
head is direct child of html..so on checkout DOM visualizer for more clearity

whenever v8 engine/browser get any html it start parsing phase and dom creation start
html node created
head node created
title node created
if it find the script tag it start downloding and start the excution and parsing stop after excution of script the parsing start
1.--> one way  
so we have option script tag we can keep at last of body
every node of html tag created then js file excute
2.--> second way

normal case
dom creation start (script--> download)(excution of script )pending dom creation start



Defer---->

 we have Defer keyword whic we use in script tag
 dom creation start-----dom creation continue(as parallel script is download) after dom creation complete the script excution start


3.--->third way  

Asyc----->

Dom creation start ----Dom creation continue(as parallel download the script)after download ecxution start(dom creation stops during the excution)after excution dom creation start



















*/