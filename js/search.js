document.addEventListener("DOMContentLoaded", function () {
    var navbar = new XMLHttpRequest();
    navbar.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("navbar-placeholder").innerHTML = this.responseText;

            // Asociar el evento de búsqueda después de cargar el navbar
            var buscar = document.getElementById('search-input');
            buscar.addEventListener('input', function () {
                var searchText = this.value.toLowerCase();
                var paragraphs = document.querySelectorAll('#content p');

                paragraphs.forEach(function (paragraph) {
                    var paragraphText = paragraph.textContent.toLowerCase();
                    if (paragraphText.includes(searchText)) {
                        paragraph.innerHTML = paragraphText.replace(new RegExp(searchText, 'gi'), function (match) {
                            return '<span class="highlight">' + match + '</span>';
                        });
                    } else {
                        paragraph.innerHTML = paragraphText;
                    }
                });
            });
        }
    };
    navbar.open("GET", "navbar.html", true);
    navbar.send();
});