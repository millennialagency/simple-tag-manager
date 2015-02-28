//Simple Tag Manager created by MillennialAgency to help you integrate google analytics.
//Does not include ecommerce params.
//Simply include any tracking tags in this script and include it in the header of your template

//create a custom cookie if you want
document.cookie="testUser";
var x = document.cookie;

//google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-49480777-1', 'auto', {siteSpeedSampleRate: 10});
  ga('require','displayfeatures');
  ga('send', 'pageview');
  ga('send', {
  'hitType': 'event',         //what type of hit
  'eventCategory': 'landing', //category of event
  'eventAction': 'hit',       //a page hit, a click, whatever
  'eventLabel': 'ANYTHING',   //label for the event
  'eventValue': 1             //value of the event most times used as revenue
});
						

//browser data from user
var z = navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\bOPR\/(\d+)/)
        if(tem!= null) return 'Opera '+tem[1];
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

//console log data
//alert(console.log());

//output the deets
//alert(x + "user using " + z);











