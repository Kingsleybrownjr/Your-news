const renderAboutArticle = () => {
	const rootDiv = document.querySelector("#root");
	const section = document.createElement("section");
	section.setAttribute("id", "about");

	section.innerHTML = `
		
		<div class="container">
			<div class="page-container">
				<article class="card">
					<h1 class="l-heading">About Our Organization</h1>
					<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
							expedita ut, beatae excepturi ipsum tenetur, quia, doloribus sint
							corrupti cum quibusdam consequatur incidunt commodi! Possimus
							similique, reprehenderit quos nobis error sequi rem accusamus
							sapiente consequatur illo libero provident numquam vero animi amet
							omnis temporibus cupiditate aspernatur delectus? Culpa,
							dignissimos corporis?
					</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
							non similique cumque! Aliquid deleniti accusamus id dolorum,
							magnam repudiandae? Nisi autem possimus expedita saepe numquam a
							quaerat, soluta atque vero maiores eligendi, quod ullam sequi
							explicabo sint similique ipsam at corporis? Repellat architecto,
							assumenda perspiciatis aliquam fugit, cum quam cumque blanditiis
							unde, modi sit inventore amet ut tempore! Autem labore tempore
							fugiat repellendus? Maxime, harum! Culpa porro id illum amet
							dignissimos quod, consequuntur ullam numquam explicabo consequatur
							placeat nulla, veniam ut odit vitae quae, omnis eius. Provident
							asperiores corrupti soluta, praesentium eos commodi, omnis, culpa
							quis impedit nihil unde magnam ipsum. Eveniet atque unde, neque
							necessitatibus laboriosam animi vitae, consequatur nisi deserunt
							ab harum quo ea accusantium magni fugit doloribus ut laborum
							debitis vero repellat, tenetur illum aspernatur mollitia.
							Laboriosam ipsa quis labore nesciunt libero dolorem laborum
							dignissimos impedit, obcaecati corporis dolor nostrum repudiandae
							ea nisi dolorum consequatur optio! Ducimus?
					</p>
				</article>

                <aside class="card bg-primary">
				    <h2>Join Our Club</h2>
				    <p>
					    Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Temporibus, accusamus?
				    </p>
				    <a href="#" class="btn btn-dark btn-block"> Join Now </a>
			    </aside>
			</div>
        </div>
    `;

	rootDiv.appendChild(section);
};

export { renderAboutArticle };
