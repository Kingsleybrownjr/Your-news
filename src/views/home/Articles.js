const renderArticles = () => {
	const rootDiv = document.querySelector("#root");
	const homeArticles = document.createElement("section");
	homeArticles.setAttribute("id", "home-articles");

	homeArticles.classList.add("py-2");

	homeArticles.innerHTML = `
    <!-- Home Articles -->
			<div class="container">
				<h2>Editor Picks</h2>
				<div class="articles-container">
					<article class="card">
						<img src="./images/articles/ent1.jpg" alt="" />
						<div>
							<div class="category category-ent"><p>Entertainment</p></div>
							<h3>
								<a href="/article.html">Lorem ipsum dolor sit amet.</a>
							</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
								voluptatem corrupti vitae rerum tenetur doloremque ratione,
								necessitatibus minima ex quae.
							</p>
						</div>
					</article>

					<article class="card bg-dark">
						<div class="category category-sports"><p>Sports</p></div>
						<h3>
							<a href="/article.html">Lorem ipsum dolor sit amet.</a>
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
							voluptatem corrupti vitae rerum tenetur doloremque ratione,
							necessitatibus minima ex quae.
						</p>
					</article>

					<article class="card">
						<img src="./images/articles/tech1.jpg" alt="" />
						<div class="category category-tech"><p>Technology</p></div>
						<h3>
							<a href="/article.html">Lorem ipsum dolor sit amet.</a>
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
							voluptatem corrupti vitae rerum tenetur doloremque ratione,
							necessitatibus minima ex quae.
						</p>
					</article>

					<article class="card">
						<div class="category category-sports"><p>Sports</p></div>
						<h3>
							<a href="/article.html">Lorem ipsum dolor sit amet.</a>
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
							voluptatem corrupti vitae rerum tenetur doloremque ratione,
							necessitatibus minima ex quae.
						</p>
						<img src="./images/articles/sports1.jpg" alt="" />
					</article>

					<article class="card">
						<img src="./images/articles/tech2.jpg" alt="" />
						<div class="category category-tech"><p>Technology</p></div>
						<h3>
							<a href="/article.html">Lorem ipsum dolor sit amet.</a>
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
							voluptatem corrupti vitae rerum tenetur doloremque ratione,
							necessitatibus minima ex quae.
						</p>
					</article>

					<article class="card bg-primary">
						<div class="category category-sports"><p>Sports</p></div>
						<h3>
							<a href="/article.html">Lorem ipsum dolor sit amet.</a>
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
							voluptatem corrupti vitae rerum tenetur doloremque ratione,
							necessitatibus minima ex quae.
						</p>
					</article>

					<article class="card">
						<div>
							<div class="category category-ent"><p>Entertainment</p></div>
							<h3>
								<a href="/article.html">Lorem ipsum dolor sit amet.</a>
							</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
								voluptatem corrupti vitae rerum tenetur doloremque ratione,
								necessitatibus minima ex quae.
							</p>
						</div>
						<img src="./images/articles/ent2.jpg" alt="" />
					</article>
				</div>
			</div>    
    `;

	rootDiv.appendChild(homeArticles);
};

export { renderArticles };
