* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    background-color: #f4f7fa;
    color: #333;
}

header {
    background-color: #2c3e50;
    padding: 20px 0;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.navbar .logo h1 {
    color: #ecf0f1;
    font-size: 1.8rem;
}

nav ul {
    list-style: none;
    display: flex;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    color: #ecf0f1;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #3498db;
}

.section {
    padding: 60px 0;
    text-align: center;
}

.content-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
}

h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #34495e;
}

.skills-list {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.skills-list li {
    margin: 5px 15px;
    background-color: #3498db;
    color: white;
    padding: 10px;
    border-radius: 25px;
    font-size: 1.2rem;
}

.project-item {
    background-color: #ecf0f1;
    padding: 20px;
    margin: 20px 0;
    border-radius: 10px;
}

footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px 0;
}

footer a {
    color: #3498db;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}

/* Анимации */
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.section {
    animation: fadeIn 1.5s ease-in-out;
}
