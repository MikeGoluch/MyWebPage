$(document).ready(function(){var e=!1;$(window).width()>992&&(e=!0),$(window).resize(function(){e=$(window).width()>992}),$(".toggle, .my-navbar-nav").click(function(){e?$(".my-navbar").removeClass("nav-is-open"):($(".my-navbar").toggleClass("nav-is-open"),$(".toggle").toggleClass("active"))}),$(window).scroll(function(){$(window).scrollTop()>0?$(".my-navbar").css("background-color","rgba(0,0,0,.7)"):$(".my-navbar").css("background-color","#121214")}),setTimeout(function(){$("body").addClass("loaded")},5e3);let n=0;setTimeout(function e(){n<"Welcome".length&&(document.getElementById("typeWriter").innerHTML+="Welcome".charAt(n),document.getElementById("lineExtend").style.width=20+15*n+"px",n++,setTimeout(e,300))},3e3)});