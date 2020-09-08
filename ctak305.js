

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
		let productGrid = "";

		productJSONData.forEach((product) => {
			productGrid += `
          <div class="productCard">
            <img src="http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/itemimg?id=${product.ItemId}" width = "100" height = "160"> </img>
            <h3>${product.Title}</h3>
            <p>${product.Origin}</p>
            <p>$${product.Price}</p>
            <a href="http://redsox.uoa.auckland.ac.nz/dsa/Service.svc/buy?id=${product.ItemId}"><button>Buy Now</button></a>
          </div>
        `;
		});

		document.getElementById("productsGridLayout").innerHTML = productGrid;
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
		let productGrid = "";
		productJSONData.forEach((product) => {
			productGrid += `
            <div class="productCard">
              <img src = "http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/itemimg?id=${product.ItemId}" width = "100" height = "160"> </img>
              <h3>${product.Title}</h3>
              <p>${product.Origin}</p>
              <p>$${product.Price}</p>
              <a href="http://redsox.uoa.auckland.ac.nz/dsa/Service.svc/buy?id=${product.ItemId}"><button>Buy Now</button></a>
            </div>
          
          `;
		});

		document.getElementById("productsGridLayout").innerHTML = productGrid;
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
		let newsCards = "";
		newsJSONData.forEach((news) => {
			newsCards += `<div class="card">
        <img  class="center"  src="${news.enclosureField.urlField}"></img>
        <h2><a href=${news.linkField}> ${news.titleField}</a></h2>
        <h5>${news.pubDateField}</h5>
        
        <p>${news.descriptionField}</p>
      </div>
      `;
		});

		document.getElementById("newsBlog").innerHTML = newsCards;
	});
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

function clearTextArea(){
	document.getElementById("name").value = "";
	document.getElementById("comment").value = "";
}

function registration (){
	const registerURL = "http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/register"

	const address = document.getElementById("UserAddress").value;
	const user = document.getElementById("newUser").value;
	const password = document.getElementById("newRegistrationPassword").value;
	
	const fetchRegisterPromise = fetch(registerURL, {
		method: "POST",
		body: JSON.stringify({Address:address, Name:user, Password:password}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const streamRegistrationPromise = fetchRegisterPromise.then((response) =>(response.json()));
	streamRegistrationPromise.then(
		(d) =>{alert(d);}
	);

}


function showRegistrationModal(){
	let modal = document.getElementById("registrationModal");
	modal.style.display = "block";
}

function hideRegistrationModal(){
	let modal = document.getElementById("registrationModal");
	modal.style.display = "none";
}

function login(){
	
	const xhr = new XMLHttpRequest();
	const uri = "http://redsox.uoa.auckland.ac.nz/dsa/Service.svc/user";

	
	const username = document.getElementById("loginUser").value;
	const password = document.getElementById("password").value;
	xhr.open("GET", uri, true, username, password);
	xhr.withCredentials = true;
	xhr.onload =()=>{
		if(xhr.status==200){
			alert("Successful login");
		}
		else{
			alert("Invalid Login");
		}
	};
	xhr.send(null);
}





