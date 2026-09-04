document.getElementById('hostForm').onsubmit = function(e) {
    e.preventDefault();
    fetch('/api/host', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            phone: document.getElementById('phone').value,
            name: document.getElementById('toolName').value,
            price: parseInt(document.getElementById('price').value),
            value: parseInt(document.getElementById('value').value),
            area: document.getElementById('area').value
        })
    }).then(r => r.json()).then(d => {
        alert(d.message);
        loadTools();
    });
};

function loadTools() {
    fetch('/api/tools').then(r => r.json()).then(tools => {
        document.getElementById('toolsList').innerHTML = tools.map(t => 
            `<div class="tool-card"><h3>${t.name}</h3><p>📍 ${t.area}</p><p class="price">${t.price.toLocaleString()} تومان/روز</p></div>`
        ).join('');
    });
}

loadTools();
