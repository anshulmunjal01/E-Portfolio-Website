document.addEventListener('DOMContentLoaded', function() {
    // Contact Modal Logic
    var modal = document.getElementById("contact-modal");
    var btn = document.getElementById("contact-link");
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

    // Skills Pop-up Logic
    var skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        skill.addEventListener('click', function() {
            alert("Skill Details: " + this.getAttribute('data-skill'));
        });
    });
});