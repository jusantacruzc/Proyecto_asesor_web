function scrollNav(){document.querySelectorAll("nav div a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=e.target.attributes.href.value,o=document.querySelector(t);console.log(e.target.attributes.href.value,o),o.scrollIntoView({behavior:"smooth"})}))})}scrollNav();
//# sourceMappingURL=app.js.map
