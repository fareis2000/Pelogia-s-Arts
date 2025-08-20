/* --- Base de dados de drinks --- */

const drinks = [
    {
        
        nome: "Aperol Spirit",
        imagem: 'https://doseextraoficial.com.br/wp-content/uploads/2023/04/aperol-spritz-2-1024x1024.jpg',
        ingredientes: ["Gin", "Campari", "Vermouth", "Gelo"]
    },
    {
        nome: "Negroni",
        imagem: 'https://api.baraberto.com.br/wp-content/uploads/2023/04/receita-negroni-01-scaled.webp',
        ingredientes: ["Aperol", "Agua com Gas", "Gelo"]
    },
    {
        nome: "Sex on the Beach",
        imagem: 'https://s2.glbimg.com/ydSttXdiZaCv4Q5p0NprgJBrwg4=/620x850/e.glbimg.com/og/ed/f/original/2022/02/24/receita-drinque-sex-on-the-beach-pessego-laranja-vodka-giaco-pizzaria.jpg',
        ingredientes: ["Vodka", "Licor de pêssego", "Suco de laranja", "Groselha", "Gelo"]
    },
    {
        nome: "Piña Colada",
        imagem: 'https://static.itdg.com.br/images/1200-630/2bf79f2086a02a4317e8748c564ae8b1/pina-colada.jpg',
        ingredientes: ["Rum branco", "Leite de coco", "Suco de abacaxi", "Gelo"]
    }
];

/* --- Elementos da página --- */
const drinkList = document.getElementById('drink-list');
const log = document.getElementById('log');

function prepararDrink(nome, ingredientes) {
    const mensagem = `Preparando "${nome}" com: ${ingredientes.join(", ")}`;
    log.innerHTML = `<strong>Robô:</strong> ${mensagem}`;
    log.style.display = 'block';   // <-- faz aparecer
}

drinks.forEach(drink => {
  const div = document.createElement('div');
  div.className = 'drink';

  div.innerHTML = `
    <img src="${drink.imagem}" alt="${drink.nome}" class="drink-img">
    <h2>${drink.nome}</h2>
    <div class="ingredients"><strong>Ingredientes:</strong> ${drink.ingredientes.join(", ")}</div>
    <button class="prepare-btn">Preparar</button>
  `;

  div.querySelector('.prepare-btn').addEventListener('click', () => {
    prepararDrink(drink.nome, drink.ingredientes);
  });

  drinkList.appendChild(div);
});
