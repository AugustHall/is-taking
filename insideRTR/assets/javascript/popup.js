$(document).ready(function(){
   // find the href of link and update chrome tab
   $('body').on('click', 'li', function(){
     chrome.tabs.update({url: $(this).find('a').attr('href')});
     return false;
   });

   // toggling class on click
   $('body').on('click', 'section', function(){
     $(this).find('ul').toggleClass('expanded');
   });
});
