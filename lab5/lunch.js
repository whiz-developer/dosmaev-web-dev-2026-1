const emptyMessages = {
    soup: 'Блюдо не выбрано',
    main: 'Блюдо не выбрано',
    salad: 'Блюдо не выбрано',
    drink: 'Напиток не выбран',
    dessert: 'Десерт не выбран'
};

const gridIds = {
    soup: 'soups-grid',
    main: 'mains-grid',
    salad: 'salads-grid',
    drink: 'drinks-grid',
    dessert: 'desserts-grid'
};

const selected = {
    soup: null,
    main: null,
    salad: null,
    drink: null,
    dessert: null
};

const activeFilters = {
    soup: null,
    main: null,
    salad: null,
    drink: null,
    dessert: null
};

const categories = [
    'soup',
    'main',
    'salad',
    'drink',
    'dessert'
];

function formatPrice(price) {
    return price + ' ₽';
}

function updateOrderView() {
    const anySelected = categories.some(function (category) {
        return selected[category] !== null;
    });

    document.getElementById('order-empty').hidden = anySelected;

    let total = 0;

    categories.forEach(function (category) {
        const dish = selected[category];
        const blockId = 'order-' + category;
        const nameId = blockId + '-name';
        const priceId = blockId + '-price';
        const inputId = 'selected-' + category;
        const block = document.getElementById(blockId);
        const nameElement = document.getElementById(nameId);
        const priceElement =
            document.getElementById(priceId);
        const hiddenInput =
            document.getElementById(inputId);

        block.hidden = !anySelected;

        if (dish === null) {
            nameElement.textContent =
                emptyMessages[category];
            priceElement.textContent = '';
            hiddenInput.value = '';
            hiddenInput.disabled = true;
        } else {
            nameElement.textContent = dish.name;
            priceElement.textContent =
                formatPrice(dish.price);
            hiddenInput.value = dish.keyword;
            hiddenInput.disabled = false;
            total += dish.price;
        }
    });

    document.getElementById('order-total').hidden =
        !anySelected;
    document.getElementById('total-price').textContent =
        total;

    document.querySelectorAll('.dish-card').forEach(
        function (card) {
            card.classList.remove('selected');
        }
    );

    categories.forEach(function (category) {
        const dish = selected[category];
        if (dish !== null) {
            const selector =
                '[data-dish="' + dish.keyword + '"]';
            const card = document.querySelector(selector);
            if (card !== null) {
                card.classList.add('selected');
            }
        }
    });
}

function selectDish(keyword) {
    const dish = dishes.find(function (item) {
        return item.keyword === keyword;
    });

    if (dish === undefined) {
        return;
    }

    selected[dish.category] = dish;
    updateOrderView();
}

function createDishCard(dish) {
    const card = document.createElement('div');
    card.className = 'dish-card';
    card.dataset.dish = dish.keyword;

    const image = document.createElement('img');
    image.src = dish.image;
    image.alt = dish.name;

    const price = document.createElement('p');
    price.className = 'dish-price';
    price.textContent = formatPrice(dish.price);

    const name = document.createElement('p');
    name.className = 'dish-name';
    name.textContent = dish.name;

    const count = document.createElement('p');
    count.className = 'dish-weight';
    count.textContent = dish.count;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'dish-button';
    button.textContent = 'Добавить';
    button.addEventListener('click', function () {
        selectDish(dish.keyword);
    });

    card.append(image, price, name, count, button);

    return card;
}

function renderCategory(category) {
    const grid = document.getElementById(
        gridIds[category]
    );
    grid.innerHTML = '';

    const kind = activeFilters[category];
    const ofCategory = dishes.filter(function (dish) {
        if (dish.category !== category) {
            return false;
        }
        if (kind !== null && dish.kind !== kind) {
            return false;
        }
        return true;
    });
    ofCategory.sort(function (a, b) {
        return a.name.localeCompare(b.name, 'ru');
    });
    ofCategory.forEach(function (dish) {
        grid.append(createDishCard(dish));
    });
}

function renderDishes() {
    categories.forEach(function (category) {
        renderCategory(category);
    });
}

function toggleFilter(category, button) {
    const kind = button.dataset.kind;

    if (activeFilters[category] === kind) {
        activeFilters[category] = null;
        button.classList.remove('active');
    } else {
        activeFilters[category] = kind;
        const container = button.closest('.filters');
        container.querySelectorAll('.filter-btn').forEach(
            function (other) {
                other.classList.remove('active');
            }
        );
        button.classList.add('active');
    }

    renderCategory(category);
}

function initFilters() {
    document.querySelectorAll('.filters').forEach(
        function (container) {
            const category = container.dataset.category;
            container.addEventListener('click',
                function (event) {
                    const button = event.target.closest(
                        '.filter-btn'
                    );
                    if (button === null) {
                        return;
                    }
                    toggleFilter(category, button);
                });
        }
    );
}

renderDishes();
initFilters();
updateOrderView();
