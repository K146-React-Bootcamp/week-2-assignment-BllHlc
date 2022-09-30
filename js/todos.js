renderHeader();

const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const root = document.querySelector("#root");
const editModal = document.querySelector("#editModal");
let todos = [];
let todo;

const renderTodos = () => {
	root.innerHTML = "";
	// todoları listele
	const table = document.createElement("table");
	table.setAttribute("class", "table table-hover");

	const thead = document.createElement("thead");
	thead.innerHTML = `
    <tr>
      <th class="sort" scope="col">id</th>
      <th scope="col">Başlık</th>
      <th class="sort" scope="col">Kullanıcı Id</th>
      <th class="sort" scope="col">Durum</th>
      <th scope="col"></th>
    </tr>
  `;
	table.appendChild(thead);

	const tbody = document.createElement("tbody");
	const renderItem = (item) => {
		const tr = document.createElement("tr");
		tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.userId}</td>
      <td>${item.completed ? "Tamamlandı" : "Yapılacak"}</td>
      <td>
        <button class="btn btn-xs btn-danger remove" data-id=${item.id
			}>Sil</button>
        <button class="btn btn-xs btn-warning edit" data-id=${item.id
			}>Düzenle</button>
      </td>
    `;
		tbody.appendChild(tr);
	};
	todos.slice(0, 15).forEach((item) => {
		renderItem(item);
	});
	table.appendChild(tbody);

	const pagination = () => {
		const pagination = {
			init: function () {
				return (`
				<nav aria-label="Page navigation example">
					<ul class="pagination">
						${this.pages(totalPages)}
					</ul>
				</nav>
				`);
			},
			pages: function (totalPages) {
				let pages = '';
				for (let i = 1; i <= totalPages; i++) {
					pages += `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`;
				}
				return pages;
			}
		};

		const totalPages = Math.ceil(todos.length / 15);
		const paginationHtml = pagination.init();
		table.insertAdjacentHTML('afterend', paginationHtml);

		const paginationItems = document.querySelectorAll('.page-item');
		paginationItems.forEach((item) => {
			item.addEventListener('click', (e) => {
				const page = e.target.innerText;
				const start = (page - 1) * 15;
				const end = start + 15;
				tbody.innerHTML = '';
				todos.slice(start, end).forEach((item) => {
					renderItem(item);
				});
				paginationItems.forEach((item) => {
					item.classList.remove('active');
				});
				e.target.parentElement.classList.add('active');
			});
		});
	};

	root.append(table);

	pagination();

	document.querySelectorAll(".remove").forEach((button) => {
		button.addEventListener("click", (e) => {
			const id = Number(e.currentTarget.getAttribute("data-id"));
			if (confirm("kaydı silmek istediğinize emin misiniz?")) {
				todos = todos.filter((x) => x.id !== id);
				renderTodos();
			}
		});
	});

	document.querySelectorAll(".edit").forEach((button) => {
		button.addEventListener("click", (e) => {
			const id = Number(e.currentTarget.getAttribute("data-id"));
			todo = todos.find((todo) => todo.id == id);
			editModal.querySelector("#title").value = todo.title;
			editModal.querySelector("#completed").checked = todo.completed;
			editModal.style.display = "block";
			editModal.classList.add("show");
		});
	});

	// const status = todos.map((todo) => todo.completed);
	// const id = todos.map((todo) => todo.id);
	// const userId = todos.map((todo) => todo.userId);

	document.querySelectorAll('.sort').forEach((item) => {
		item.addEventListener('click', (e) => {
			const key = e.target.innerText;
			if (key === 'Durum') {
				todos.sort((a, b) => a.completed - b.completed);
			} else if (key === 'id') {
				todos.sort((a, b) => a.id - b.id);
			} else if (key === 'Kullanıcı Id') {
				todos.sort((a, b) => a.userId - b.userId);
			}
			renderTodos();
		});
	});
};

editModal.querySelector("#save").addEventListener("click", () => {
	todo.title = editModal.querySelector("#title").value;
	todo.completed = editModal.querySelector("#completed").checked;
	const index = todos.findIndex((t) => t.id == todo.id);
	todos[index] = todo;
	renderTodos();
	editModal.style.display = "none";
	editModal.classList.remove("show");
});

editModal.querySelectorAll(".close").forEach((button) => {
	button.addEventListener("click", () => {
		editModal.style.display = "none";
		editModal.classList.remove("show");
	});
});

fetch(todosUrl)
	.then((resp) => resp.json())
	.then((data = []) => {
		todos = data;
		renderTodos();
	})
	.catch((error) => {
		errorLogger(error);
	});

// sıralama ödevi algoritması
// table thead kısmındaki sıralama yapılacak kolonlara event listener eklenecek.
// event listener hangi kolon için tıklanıyorsa
// sort metodu kullanılarak sıralama yapılacak
// sıralanmış todos'todus içerisine atılacak
// renderTodos metodu çalıştırılacak.


