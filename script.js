const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

document.querySelectorAll(".read-more-btn").forEach((button) => {
    button.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents bubbling issues

        var details = this.parentElement.querySelector(".project-details"); // Get the related details section
        var isCurrentlyHidden = details.classList.contains("hidden");

        // Close all other project details
        document.querySelectorAll(".project-details").forEach((project) => {
            project.classList.add("hidden");
        });

        // Toggle only if it was hidden before (to allow closing when clicking again)
        if (isCurrentlyHidden) {
            details.classList.remove("hidden");
        }
    });
});





window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
            'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20' );
            navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 
                'dark:border', 'dark:border-white/50', "dark:bg-transparent");
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
            'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
            navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50',
             'dark:border', 'dark:border-white/50', "dark:bg-transparent");

    }
})

//------------ Light Mode & Dark Mode -----------//

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme= 'dark';
    }else{
        localStorage.theme= 'light';
    }
  }