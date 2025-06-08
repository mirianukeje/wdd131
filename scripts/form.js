document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Set last modified date
  const lastMod = document.getElementById("lastModified");
  if (lastMod) {
    lastMod.textContent = `Last Modified: ${document.lastModified}`;
  }

  // Products array (provided or modify as needed)
  const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  // Populate product select (value = product name)
  const productSelect = document.getElementById("product");
  if (productSelect) {
    // Remove all but the first option (the instructional placeholder)
    while (productSelect.options.length > 1) {
      productSelect.remove(1);
    }

    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.name; // Value is product name, not id!
      option.textContent = `${product.name} (Avg Rating: ${product.averagerating})`;
      productSelect.appendChild(option);
    });
  }
});
