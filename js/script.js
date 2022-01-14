var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        showPage();
    }
}, 10);

function showPage() {
	document.getElementById("preloader").style.display = "none";
		document.getElementById("page-content").style.display = "block";
}