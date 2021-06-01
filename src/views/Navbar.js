const renderNavBar = () => {
	const rootDiv = document.querySelector("#root");
	const navBar = document.createElement("nav");
	navBar.setAttribute("id", "main-nav");

	navBar.innerHTML = `
            <div class="container">
				<img src="./images/logo.png" alt="" class="logo" />
				<div class="social">
					<a href="#">
						<i class="i fab fa-facebook fa-2x" target="_blank"></i>
					</a>
					<a href="#">
						<i class="i fab fa-twitter fa-2x" target="_blank"></i>
					</a>
					<a href="#">
						<i class="i fab fa-instagram fa-2x" target="_blank"></i>
					</a>
					<a href="#">
						<i class="i fab fa-youtube fa-2x" target="_blank"></i>
					</a>
				</div>
				<ul>
					<li>
						<a href="/index.html" class="current" >Home</a>
					</li>
					<li>
						<a href="/about.html" >About</a>
					</li>
				</ul>
			</div>
    `;

	rootDiv.appendChild(navBar);
};

export { renderNavBar };
