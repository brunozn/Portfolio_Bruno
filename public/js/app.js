const menu = [
  {
    id: 1,
    title: 'House Mate',
    category: 'html',
    img: '../../public/img/Pessoais/hm1.png',
    desc: `Esse sistema tem como objetivo auxiliar pessoas que buscam um lugar para dividir com outras pessoas.`,
  },
  {
    id: 2,
    title: 'Spotify',
    category: 'react',
    img: '../../public/img/Pessoais/spotify.png',
    desc: `O sistema é um gerenciador de pagamentos de planos colaborativos.`,
  },
  /*
  {
    id: 3,
    title: 'Flutter',
    category: 'flutter',
    img: '../../public/img/Pessoais/login.png',
    desc: `Descrição do projeto será aquilllllllllllllllllllllllllll`,
  },
  */
  {
    id: 4,
    title: 'Conversor de Arquivos',
    category: 'Python',
    img: '../../public/img/Pessoais/ux.png',
    desc: `Conversor de arquivos PDF feito em Python e utilizando o Tk/Tcl`,
  },
];
// get parent element
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');
// display all items when page loads
window.addEventListener('DOMContentLoaded', function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>          
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join('');
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join('');

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll('.filter-btn');
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === 'all') {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
