Vue.component('mynavbar', {
    template: `<div class="mylovelynav">
    <nav class="navbar-all">
    <div class="navbar-wrapper">
        <div class="navbar">
        <div class ="dropdown">
        <button class="dropdownmenu">
        <i class="fa fa-user" aria-hidden="true"></i> My Profile <i class="fa fa-arrow-down" aria-hidden="true"></i></button>
        <div class="dropdown-content">
      
        <a href="#">Class Timetables</a>
         <a href="#">Videos</a>
         <a href="homepage.html">My Dashboard</a>
         <a href="index.html">Logout</a>
        </div>
        </div>
     
        
        </div>
    </div>
</nav>
  </div>`
})




var mydetails = new Vue({
    el: '#main',
    data: {

    }

})

function toggle_dp() {
    dp = $("#datepicker");
    if (dp.attr('datepicker')) {
        dp.datepicker('destroy');
        dp.removeAttr('datepicker');
    } else {
        dp.datepicker();
        dp.attr('datepicker', 1);
    }

}


var modal = document.getElementById("myModal");


var btn = document.getElementById("confirmation");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}