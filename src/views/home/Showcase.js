const renderShowcase = () => {
	const rootDiv = document.querySelector("#root");
	const showcaseHeader = document.createElement("header");
	showcaseHeader.setAttribute("id", "showcase");

	showcaseHeader.innerHTML = `
	<!-- Showcase -->
			<div class="container">
				<div class="showcase-container">
					<div class="showcase-content">
						<div class="category category-sports">
							Sports
						</div>
						<h1>Some Sports Article</h1>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, quisquam cumque rem optio quasi mollitia aliquam. Velit adipisci ab odio, quae amet, ad facere ratione natus sed quo nulla fuga!</p>
						<a href="/article.html" class="btn btn-primary">Read More</a>
					</div>
				</div>
			</div>    
    `;
	rootDiv.appendChild(showcaseHeader);
};

export { renderShowcase };
