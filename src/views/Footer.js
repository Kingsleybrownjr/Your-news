const renderFooter = () => {
	const rootDiv = document.querySelector("#root");
	const footer = document.createElement("footer");
	footer.setAttribute("id", "main-footer");
	footer.classList.add("py-2");

	footer.innerHTML = `
    <!-- Footer -->
			<div class="container footer-container">
				<div>
					<img src="./images/logo_light.png" alt="NewsLogo" />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
						quibusdam nihil molestiae sapiente voluptas perferendis placeat ad
						voluptatum quidem ex?
					</p>
				</div>
				<div>
					<h3>Email News Letter</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<form>
						<input type="email" placeholder="Enter Email" />
						<input type="submit" value="Subscribe" class="btn btn-primary" />
					</form>
				</div>
				<div>
					<h3>Site Links</h3>
					<ul class="list">
						<li>
							<a href="#">Help & Support</a>
						</li>
						<li>
							<a href="#">Privacy Policy</a>
						</li>
						<li>
							<a href="#">About Us</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
				<div>
					<h2>Join Our Club</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
						nulla!
					</p>
					<a href="" class="btn btn-secondary">Join Now!</a>
				</div>
				<div>
					<p>Copyright &copy; 2021 All Rights Reserved</p>
				</div>
			</div>    
    `;

	rootDiv.appendChild(footer);
};

export { renderFooter };
