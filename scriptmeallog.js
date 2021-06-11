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



const cereal = 200;
const toast = 100;
const juice = 50;
const bread = 200;
const cheese = 100;
const water = 0;
const chocolate = 100;
const chips = 200;
const burger = 200;


function breakfast() {
    document.getElementById("breakfast").innerHTML = "Total Calories:350";
    return false;
}

function lunch() {
    document.getElementById("lunch").innerHTML = "Total Calories:500";
    return false;
}

function dinner() {
    document.getElementById("dinner").innerHTML = "Total Calories:700";
    return false;
}