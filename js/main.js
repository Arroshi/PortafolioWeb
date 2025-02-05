document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section-content");
    const lateralBar = document.querySelector(".sidebar");
    const sidebarList = lateralBar.querySelector(".sidebar-list");
    const itemsList = sidebarList.querySelectorAll("li a");

    // HIDE ALL SECTION EXCEPT ACTIVE


    sections.forEach((section) => {
        if (!section.classList.contains("active")) {
            section.classList.add("hide");
        }
    });

    // END HIDE ALL SECTION EXCEPT ACTIVE

    itemsList.forEach(itemList => {
        itemList.addEventListener("click", event => {
            event.preventDefault();
            target = itemList.getAttribute("data-target");

            // Remueve la clase 'active' de todos los elementos
            itemsList.forEach(i => i.classList.remove('active'));

            // Agrega la clase 'active' al elemento clicado
            itemList.classList.add('active');


            // Quitar la clase 'active' de todas las secciones
            sections.forEach(section => {
                section.classList.remove('active');
                section.classList.add('hide');
            });

            // Buscar la sección correspondiente y agregarle la clase 'active'
            const targetSection = document.querySelector(`.section-content[data-target="${target}"]`);
            if (targetSection) {
                // Quitar 'hide' y agregar 'active' a la sección correspondiente
                targetSection.classList.remove('hide');
                targetSection.classList.add('active');
            }
        })

    });

})

const aboutSection = document.querySelector(".item-section.profile"),
tabContainer = document.querySelector(".nav.nav-underline");
console.log(aboutSection);
console.log(tabContainer);


tabContainer.addEventListener("click", (event) => {
// verificamos si el evento target contiene el "tab-item" y si no tiene la clase "activate"
if (
  event.target.classList.contains("nav-link") &&
  !event.target.classList.contains("active")
) {
  const target = event.target.getAttribute("data-target");
  // desactivamos el "active" si esta en "tab-item"
  tabContainer.querySelector(".active").classList.remove("active");
  // activar un nuevo "tab-item"
  event.target.classList.add("active");
  // desactivar si existe "active" en "tab-content"
  aboutSection
    .querySelector(".tab-content.active")
    .classList.remove("active");
  // activar nuevo "tab-content"
  aboutSection.querySelector(target).classList.add("active");
}
});

// document.addEventListener('DOMContentLoaded', () => {
//     // Selecciona todos los enlaces de la barra lateral
//     const menuItems = document.querySelectorAll('.item-list');
//     // Selecciona todas las secciones del contenido
//     const sections = document.querySelectorAll('.section-content');

//     menuItems.forEach(item => {
//         item.addEventListener('click', event => {
//             event.preventDefault(); // Evita el comportamiento predeterminado del enlace

//             // Quitar la clase 'active' de todos los enlaces del menú
//             menuItems.forEach(menu => menu.classList.remove('active'));

//             // Agregar la clase 'active' al enlace clicado
//             item.classList.add('active');

//             // Obtener el valor del atributo data-target del enlace clicado
//             const target = item.getAttribute('data-target');

//             // Quitar la clase 'active' de todas las secciones
//             sections.forEach(section => section.classList.remove('active'));

//             // Buscar la sección correspondiente y agregarle la clase 'active'
//             const targetSection = document.querySelector(`.section-content[data-target="${target}"]`);
//             if (targetSection) {
//                 targetSection.classList.add('active');
//             }
//         });
//     });
// });
