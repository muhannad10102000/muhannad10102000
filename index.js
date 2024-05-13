<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Portfolio</title>
<style>
    body { font-family: Arial, sans-serif; margin: 0; color: #333; background-color: #f4f4f9; }
    header { background: #ffffff; padding: 10px 20px; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    nav a { margin: 0 15px; text-decoration: none; color: #333; }
    h1, h2 { color: #333; }
    .content { padding: 20px; margin: 15px; }
    footer { text-align: center; padding: 10px 0; background: #e2e2e2; }
    .portfolio { display: flex; flex-wrap: wrap; justify-content: space-around; }
    .portfolio img { max-width: 30%; margin: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    .contact-form { display: flex; flex-direction: column; width: 300px; margin: auto; }
    .contact-form input, .contact-form textarea { margin-bottom: 15px; padding: 10px; }
    .contact-form input[type="submit"] { background: #555; color: white; cursor: pointer; }
</style>
</head>
<body>
<header>
    <h1>Your Name</h1>
    <nav>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
    </nav>
</header>
<main>
    <section id="about" class="content">
        <h2>About Me & My Business</h2>
        <p>Introduce yourself and your business here. Talk about your background, your services, and what sets you apart.</p>
    </section>
    <section id="portfolio" class="content">
        <h2>Portfolio</h2>
        <div class="portfolio">
            <img src="path/to/image1.jpg" alt="Project Name">
            <img src="path/to/image2.jpg" alt="Project Name">
            <img src="path/to/image3.jpg" alt="Project Name">
        </div>
    </section>
    <section id="blog" class="content">
        <h2>Blog</h2>
        <p>Latest posts and insights here. Share updates, insights or articles related to your field.</p>
    </section>
    <section id="contact" class="content">
        <h2>Contact</h2>
        <form class="contact-form">
            <input type="text" placeholder="Your Name">
            <input type="email" placeholder="Your Email">
            <textarea placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message">
        </form>
    </section>
</main>
<footer>
    <p>Copyright © Your Name. All rights reserved.</p>
</footer>
</body>
</html>