const icons = {
  check: '<i class="fa-solid fa-check text-green-600"></i>',
  x: '<i class="fa-solid fa-xmark text-red-500"></i>',
  half: '<i class="fa-solid fa-circle-half-stroke text-yellow-600"></i>',
};

const tableBody = document.getElementById("tableBody");

function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach((row) => {
    const descHTML = row.description.map((item) => `<li>${item}</li>`).join("");
    tableBody.innerHTML += `
            <tr class="border-t">
              <td class="p-3 font-bold title-cell">${row.title}</td>
              <td class="p-3 text-center">${icons[row.location]}</td>
              <td class="p-3 text-center">${icons[row.ip]}</td>
              <td class="p-3 text-center">${icons[row.hideIP]}</td>
              <td class="p-3 text-center">${icons[row.telegram]}</td>
              <td class="p-3 text-center">${icons[row.youtube]}</td>
              <td class="p-3 text-center">${icons[row.x]}</td>
              <td class="p-3 text-center">${icons[row.ai]}</td>
              <td class="p-3 text-xs md:text-sm leading-relaxed text-right desc-cell">
                <ul class="list-disc pr-4 space-y-1">${descHTML}</ul>
              </td>
            </tr>
          `;
  });
}

renderTable(data);

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const value = searchInput.value.trim().toLowerCase();
  const filteredData = data.filter((row) => {
    const combined = [
      row.title,
      ...row.description,
      row.location,
      row.ip,
      row.hideIP,
      row.telegram,
      row.youtube,
      row.x,
      row.ai,
    ]
      .join(" ")
      .toLowerCase();
    return combined.includes(value);
  });
  renderTable(filteredData);
});
