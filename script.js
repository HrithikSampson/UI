
document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/invoice/async')
        .then(resp => resp.json())
        .then(data => {
            let html = '<ul>';
            data.items.forEach(item => {
                html += `<li>${item.name} - $${item.price}</li>`;
            });
            html += '</ul>';
            document.getElementById('invoice-container').innerHTML = html;
        })
        .catch(er => console.error("Failed to load invoice:", er));
});
