websiteVersion();
vcard();
const hideFunction = (visibleDivContent) => {
	switch (visibleDivContent) {
		case "Home":
			const visibleHomeDiv = document.getElementById("Home");
			visibleHomeDiv.style.display = "block";

			let hiddenProductsForHome = document.getElementById("Products");
			let hiddenLocationForHome = document.getElementById("Location");
			let hiddenNewsForHome = document.getElementById("News");
			let hiddenGuestBookForHome = document.getElementById("Guestbook");
			let hiddenLoginForHome = document.getElementById("Login");

			hiddenProductsForHome.style.display = "none";
			hiddenLocationForHome.style.display = "none";
			hiddenNewsForHome.style.display = "none";
			hiddenGuestBookForHome.style.display = "none";
			hiddenLoginForHome.style.display = "none";

			break;

		case "Products":
			const visibleProductsDiv = document.getElementById("Products");
			visibleProductsDiv.style.display = "block";

			let hiddenHomeForProducts = document.getElementById("Home");
			let hiddenLocationForProducts = document.getElementById("Location");
			let hiddenNewsForProducts = document.getElementById("News");
			let hiddenGuestBookForProducts = document.getElementById("Guestbook");
			let hiddenLoginForProducts = document.getElementById("Login");

			hiddenHomeForProducts.style.display = "none";
			hiddenLocationForProducts.style.display = "none";
			hiddenNewsForProducts.style.display = "none";
			hiddenGuestBookForProducts.style.display = "none";
			hiddenLoginForProducts.style.display = "none";

			productFunction();

			break;

		case "Location":
			const visibleLocationDiv = document.getElementById("Location");
			visibleLocationDiv.style.display = "block";

			let hiddenHomeForLocation = document.getElementById("Home");
			let hiddenProductsForLocation = document.getElementById("Products");
			let hiddenNewsForLocation = document.getElementById("News");
			let hiddenGuestBookForLocation = document.getElementById("Guestbook");
			let hiddenLoginForLocation = document.getElementById("Login");

			hiddenHomeForLocation.style.display = "none";
			hiddenProductsForLocation.style.display = "none";
			hiddenNewsForLocation.style.display = "none";
			hiddenGuestBookForLocation.style.display = "none";
			hiddenLoginForLocation.style.display = "none";
			break;

		case "News":
			const visibleNewsDiv = document.getElementById("News");
			visibleNewsDiv.style.display = "block";

			let hiddenHomeForNews = document.getElementById("Home");
			let hiddenProductsForNews = document.getElementById("Products");
			let hiddenLocationForNews = document.getElementById("Location");
			let hiddenGuestBookForNews = document.getElementById("Guestbook");
			let hiddenLoginForNews = document.getElementById("Login");

			hiddenHomeForNews.style.display = "none";
			hiddenProductsForNews.style.display = "none";
			hiddenLocationForNews.style.display = "none";
			hiddenGuestBookForNews.style.display = "none";
			hiddenLoginForNews.style.display = "none";

			newsFunction();

			break;

		case "Guestbook":
			const visibleGuestbookDiv = document.getElementById("Guestbook");
			visibleGuestbookDiv.style.display = "block";

			let hiddenHomeForGuestBook = document.getElementById("Home");
			let hiddenProductsForGuestBook = document.getElementById("Products");
			let hiddenNewsForGuestBook = document.getElementById("News");
			let hiddenLocationForGuestBook = document.getElementById("Location");
			let hiddenLoginForGuestBook = document.getElementById("Login");

			hiddenHomeForGuestBook.style.display = "none";
			hiddenProductsForGuestBook.style.display = "none";
			hiddenLocationForGuestBook.style.display = "none";
			hiddenNewsForGuestBook.style.display = "none";
			hiddenLoginForGuestBook.style.display = "none";

			break;

		case "Login":
			const visibleLoginDiv = document.getElementById("Login");
			visibleLoginDiv.style.display = "block";

			let hiddenHomeForLogin = document.getElementById("Home");
			let hiddenProductsForLogin = document.getElementById("Products");
			let hiddenNewsForLogin = document.getElementById("News");
			let hiddenLocationForLogin = document.getElementById("Location");
			let hiddenGuestBookForLogin = document.getElementById("Guestbook");

			hiddenHomeForLogin.style.display = "none";
			hiddenProductsForLogin.style.display = "none";
			hiddenLocationForLogin.style.display = "none";
			hiddenNewsForLogin.style.display = "none";
			hiddenGuestBookForLogin.style.display = "none";

			break;
	}
};

function productFunction() {
	const producturl =
		"http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/items";
	const fetchPromise = fetch(producturl, {
		headers: {
			Accept: "application/json",
		},
	});
	const streamPromise = fetchPromise.then((response) => response.json());
	streamPromise.then((productJSONData) => {
		let ProductTableCells = `<tr>  <th id = "hide"" "</th> <th><b>Title</b></th> <th><b>Price</b></th> <th><b>Origin</b></th> </tr>`;

		productJSONData.forEach((product) => {
			ProductTableCells += `<tr> 
        <td><img src = "http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/itemimg?id=${product.ItemId}" width = 50 height = 50></img></td>  
        <td>${product.Title}</td> 
        <td>${product.Price}</td>
        <td>${product.Origin}</td>         
        </tr>`;
		});

		document.getElementById("ProductsTable").innerHTML = ProductTableCells;
	});
}

function newsFunction() {
	const NewsURL = "http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/news";

	const fetchNewsPromise = fetch(NewsURL, {
		headers: {
			Accept: "application/json",
		},
	});
	const streamNewsPromise = fetchNewsPromise.then((Newsresponse) =>
		Newsresponse.json()
	);
	streamNewsPromise.then((newsJSONData) => {
		let NewsTableCells;

		newsJSONData.forEach((news) => {
			NewsTableCells += `
      <div class="child"> 
        <td> <img src = "${news.enclosureField.urlField}" width = 60 height = 60></img></td>
        <td>${news.pubDateField}</td> 
        <td><a href = ${news.linkField}>${news.titleField}</a></td> 
        <td class="wrapText">${news.descriptionField}</td>
        </div>`;
		});

		document.getElementById("NewsTable").innerHTML = NewsTableCells;
	});
}

function searchFunction() {
	const input = document.getElementById("searchItem").value;
	const producturl =
		"http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/search?term=" + input;
	const fetchPromise = fetch(producturl, {
		headers: {
			Accept: "application/json",
		},
	});
	const streamPromise = fetchPromise.then((response) => response.json());
	streamPromise.then((productJSONData) => {
		let ProductTableCells = `<tr>  <th id = "hide"" "</th> <th><b>Title</b></th> <th><b>Price</b></th> <th><b>Origin</b></th> </tr>`;

		productJSONData.forEach((product) => {
			ProductTableCells += `<tr> 
                <td><img src = "http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/itemimg?id=${product.ItemId}" width = 50 height = 50></img></td>  
                <td>${product.Title}</td> 
                <td>${product.Price}</td>
                <td>${product.Origin}</td>         
                </tr>`;
		});

		document.getElementById("ProductsTable").innerHTML = ProductTableCells;
	});
}

function websiteVersion() {
	const versionURL =
		"http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/version";

	const fetchPromise = fetch(versionURL);
	const streamPromise = fetchPromise.then((response) => response.text());

	streamPromise.then(
		(versionText) =>
			(document.getElementById("footerPTag").innerHTML =
				"Version:" + versionText)
	);
}

function vcard() {
	const vcardURL = "http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/vcard";
	const fetchvCardPromise = fetch(vcardURL, {
		headers: {
			Accept: "application/json",
		},
	});
	const streamvCard = fetchvCardPromise.then((vCardData) => vCardData.text());
	streamvCard.then((vCardData) => {
		const splitvCardData = vCardData.split("\n");
		console.log(splitvCardData);

		for (i in splitvCardData) {
			const vCard = splitvCardData[i].split(":");

			if (vCard[0].startsWith("TEL")) {
				document.getElementById("phoneNumber").innerHTML = vCard[1];
			} else if (vCard[0].startsWith("EMAIL")) {
				document.getElementById("email").innerHTML = vCard[1];
			} else if (vCard[0].startsWith("ADR")) {
				const trimmedAddress = vCard[1].substring(2);
				document.getElementById("address").innerHTML = trimmedAddress;
			}
		}
	});
}

function postComments() {
	const name = document.getElementById("name").value;
	const commentsURL = `http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/comment?name=${name}`;

	const comment = document.getElementById("comment").value;
	const fetchCommentsPromise = fetch(commentsURL, {
		method: "POST",
		body: JSON.stringify(comment),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const streamPromise = fetchCommentsPromise.then(() => {
		const iFrame = document.getElementById("commentsIframe");

		iFrame.src = iFrame.src;
	});
}
