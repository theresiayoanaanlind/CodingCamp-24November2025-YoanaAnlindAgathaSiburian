let todos = [];

// Fungsi untuk menambah todo
function addTodo() {
    const todoInput = document.getElementById('todo-input');  // Mendapatkan input todo
    const dateInput = document.getElementById('todo-date');  // Mendapatkan input tanggal

    // Cek apakah input kosong
    if (!todoInput.value || !dateInput.value) {
        alert("Please fill in both the task and due date.");
        return; // Tidak lanjut jika ada input yang kosong
    }

    // Menambahkan task baru ke dalam array todos
    const newTodo = {
        task: todoInput.value,
        dueDate: dateInput.value,
        status: "Pending"
    };

    todos.push(newTodo);  // Menyimpan todo ke dalam array todos
    todoInput.value = ''; // Clear input field setelah menambah
    dateInput.value = ''; // Clear date input setelah menambah

    renderTodos();  // Render ulang todos
}

// Fungsi untuk merender daftar todos
function renderTodos() {
    const todoList = document.getElementById('todo-list');  // Menampilkan todos di halaman
    todoList.innerHTML = '';  // Menghapus daftar todo yang lama

    if (todos.length === 0) {
        todoList.innerHTML = '<li>No task found</li>';
    } else {
        todos.forEach((todo, index) => {
            const tr = document.createElement('li');
            tr.innerHTML = `
                <span>${todo.task} - ${todo.dueDate}</span>
                <button onclick="deleteTodo(${index})" class="bg-pink-500 text-white p-1 rounded">Delete</button>
            `;
            todoList.appendChild(tr);
        });
    }
}

// Fungsi untuk menghapus todo
function deleteTodo(index) {
    todos.splice(index, 1);  // Menghapus todo berdasarkan index
    renderTodos();  // Render ulang setelah menghapus
}

// Fungsi untuk menghapus semua todo
function clearTodos() {
    todos = [];  // Menghapus semua todo
    renderTodos();  // Render ulang
}

// Pastikan tombol bekerja dengan event listener
document.getElementById('addBtn').addEventListener('click', addTodo);
document.getElementById('deleteAllBtn').addEventListener('click', clearTodos);
