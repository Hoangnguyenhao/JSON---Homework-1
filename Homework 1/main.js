$(document).ready(function () {
    $.getJSON('data/products.json', function(products) {
      products.forEach(product => {
        $("#productTable tbody").append(`
          <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price.toLocaleString("vi-VN")} VND</td>
            <td>${product.category}</td>
          </tr>
        `);
      });
    });
  });
  