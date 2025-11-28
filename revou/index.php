<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<!-- Footer Text -->
<div class="footer-text">By: Yoana Anlind Agatha Siburian</div>

    <!-- Main Content -->
    <main class="card">
        <h2 class="title">Todo List</h2>

        <!-- Form Section -->
        <section class="form-section">
            <div class="form-row">
                <!-- Todo Input -->
                <input type="text" id="todo-input" placeholder="Add a todo..." class="input">
                <!-- Date Input -->
                <input type="date" id="todo-date" class="input">
                <!-- Add Button -->
                <button class="btn add-btn" onclick="addTodo();">+</button>
            </div>
        </section>

        <!-- Action Section -->
        <section class="action-section">
            <!-- Filter Options -->
            <button class="btn filter-btn">FILTER</button>
            <!-- Clear All Button -->
            <button class="btn delete-btn" onclick="clearTodos();">DELETE ALL</button>
        </section>

        <!-- Todo List Section -->
        <section class="todo-list-section">
            <header>
                <h1 class="todo-list-title">List of Todos</h1>
            </header>
            <ul id="todo-list">
                <!-- Todo items will be dynamically added here -->
                <li class="empty-item">No task found</li>
            </ul>
        </section>

    <script src="js/script.js"></script>
</body>
</html>
