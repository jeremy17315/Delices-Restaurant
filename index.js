let cart = [];
document.querySelectorAll('.panier').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const nom = this.getAttribute('data-nom') || this.closest('.box').querySelector('h3').textContent;
        cart.push(nom);
        document.getElementById('cart-badge').textContent = cart.length;
        this.textContent = "Ajouté !✔";
        setTimeout(() => {
            this.textContent = "Ajouter au panier🛒";
        }, 1000);
    });
});

// Afficher le panier quand on clique sur le badge
document.getElementById('cart-badge').addEventListener('click', function() {
    const modal = document.getElementById('cart-modal');
    const list = document.getElementById('cart-list');
    list.innerHTML = '';
    if(cart.length === 0) {
        list.innerHTML = '<li>Votre panier est vide.</li>';
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
    }
    modal.style.display = 'flex';
});

// Fermer la modale
document.getElementById('close-cart').addEventListener('click', function() {
    document.getElementById('cart-modal').style.display = 'none';
});