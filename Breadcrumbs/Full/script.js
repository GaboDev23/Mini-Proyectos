const listaItem = document.querySelectorAll('.lista_item');
const home = document.getElementById('home');
const products = document.getElementById('products');
const title = document.getElementById('title');
const breadcrumbsContainer = document.querySelectorAll('.breadcrumb_container');
const shoes = document.getElementById('shoes');

let aumento = 0;

listaItem.forEach((item) => {
    item.style.marginLeft = `${aumento+20}px`;
});

home.addEventListener('click', (e) => {
    e.preventDefault();

    breadcrumbsContainer[1].style.display = 'none';
    breadcrumbsContainer[2].style.display = 'none';

    title.innerHTML = e.target.innerHTML;
    title.style.textTransform = 'uppercase';

    products.style.display = 'inline';
    shoes.style.display = 'none';
});

products.addEventListener('click', (e) => {
    e.preventDefault();

    breadcrumbsContainer[1].style.display = 'flex';
    breadcrumbsContainer[2].style.display = 'none';

    title.innerHTML = e.target.innerHTML;
    title.style.textTransform = 'uppercase';

    shoes.style.display = 'inline';
});

shoes.addEventListener('click', (e) => {
    e.preventDefault();

    breadcrumbsContainer[2].style.display = 'flex';

    console.log(breadcrumbsContainer[2]);

    title.innerHTML = e.target.innerHTML;
    title.style.textTransform = 'uppercase';
});