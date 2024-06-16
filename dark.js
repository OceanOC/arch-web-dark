if (!document.documentURI.includes('gitlab.archlinux.org') && !document.documentURI.includes('wiki.archlinux.org')) {

document.body.style.background = "black";
document.body.style.color = "white";


const introdiv = document.querySelector('#intro');
if (introdiv != null){
	introdiv.style.backgroundColor = '#141413';
	introdiv.style.border = '0px solid black';
}

const pkgdiv = document.querySelector('#pkg-updates');
if (pkgdiv != null){
	pkgdiv.style.backgroundColor = '#191919';
	pkgdiv.style.border = '0px solid black';
}

const pkgsearchdiv = document.querySelector('#pkglist-search');
if (pkgsearchdiv != null) {
	pkgsearchdiv.style.backgroundColor = '#141413';
	pkgsearchdiv.style.border = '0px solid black';
}

const pkgresultdiv = document.querySelector('#pkglist-results');
if (pkgresultdiv != null){
	pkgresultdiv.style.backgroundColor = '#141413';
	pkgresultdiv.style.border = '0px solid black';
}

const pkgdetailsDiv = document.querySelector('#pkgdetails');
if (pkgdetailsDiv != null) {
	pkgdetailsDiv.style.backgroundColor = '#141413';
	pkgdetailsDiv.style.border = '0px solid white';
}

const pkgstatsDiv = document.querySelector('#pkg-stats');
if (pkgstatsDiv != null) {
	pkgstatsDiv.style.backgroundColor = '#141413';
	pkgstatsDiv.style.border = '0px solid white';
}

const pkglistaboutDiv = document.querySelector('#pkglist-about');
if (pkglistaboutDiv != null) {
	pkglistaboutDiv.style.backgroundColor = '#141413'
}

const actionlistDiv = document.querySelector('#actionlist');
if (actionlistDiv != null) {
	actionlistDiv.style.backgroundColor = '#191919';
	pkgdetailsDiv.style.border = '2px solid #202020';
}

const table = document.querySelectorAll('table');
if (table !== null) {
	table.forEach(table => {
    table.style.backgroundColor = 'black';
    
    const cells = table.querySelectorAll('td');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'black';
		cell.style.border = '2px solid #191919'
    });
	const cellhead = table.querySelectorAll('th');
    cellhead.forEach(cell => {
        cell.style.backgroundColor = '#191919';
		cell.style.color = 'white';
    });
	});
}

const newsElements = document.querySelectorAll('dt');
if (newsElements != null) {
	newsElements.forEach(news => {
		news.style.color = '#cecece';
	});
}

const optionElements = document.querySelectorAll('select');
if (optionElements != null){
	optionElements.forEach(optionElements => {
		optionElements.style.color = 'white';
		optionElements.style.backgroundColor = 'black';
		optionElements.style.border = '2px solid #191919';
	});
}

const inputElements = document.querySelectorAll('input');
if (inputElements != null) {
	inputElements.forEach(inputs => {
		inputs.style.color = 'white';
		inputs.style.backgroundColor = 'black';
		inputs.style.border = '3px solid #191919';
	});
}

const codeElement = document.querySelectorAll('code');
if (codeElement != null){
	codeElement.forEach(code_element => {
    code_element.style.backgroundColor = '#222222';
	});
}

const punindexDiv = document.querySelector('#punindex');
if (punindexDiv != null){
	punindexDiv.style.backgroundColor = 'black';
}

const punwrapDiv = document.getElementsByClassName('punwrap');
if (punwrapDiv != null) {
	for (var i = 0; i < punwrapDiv.length; i++) {
		punwrapDiv[i].style.backgroundColor = '#141413';
		punwrapDiv[i].style.border = '0px solid white';
		punwrapDiv[i].style.color = 'white';
	}
}

if (document.documentURI.includes('bbs.archlinux.org')){
	const spans = document.querySelectorAll('span');
	for (var i = 0; i < spans.length; i++) {
		spans[i].style.color = 'white';
	}
	
	const navmenu = document.querySelector('#brdmenu');
	
	const a = navmenu.querySelectorAll('a');
	for (var i = 0; i < a.length; i++) {
		a[i].style.backgroundColor = '#141414'
	}
}

const brdmenuDiv = document.querySelector('#brdmenu');
if (brdmenuDiv != null) {
	brdmenuDiv.style.backgroundColor = '#141413';
}

const brdmainDiv = document.querySelector('#brdmain');
if (brdmainDiv != null) {
	brdmainDiv.style.border = '0px solid white';
	brdmainDiv.style.backgroundColor = '#191919';
}

const brdstatsDiv = document.querySelector('#brdstats');
if (brdstatsDiv != null) {
	brdstatsDiv.style.border = '0px solid white';
}

const punviewforumDiv = document.querySelector('#punviewforum');
if (punviewforumDiv != null) {
	punviewforumDiv.style.backgroundColor = 'black';
}

const contentDiv = document.querySelector('#arch-downloads');
if (contentDiv != null) {
	contentDiv.style.backgroundColor = '#141413';
	contentDiv.style.border = '3px solid #191919';
}

const preElement = document.querySelectorAll('pre');
if (preElement != null) {
	preElement.forEach(pre => {
		pre.style.backgroundColor = '#222222';
	});
}

const punviewtopicDiv = document.querySelector('#punviewtopic');
if (punviewtopicDiv != null) {
	punviewtopicDiv.style.background = 'black'
}

const blockpostElements = document.querySelectorAll('.blockpost');
if (blockpostElements != null) {
blockpostElements.forEach(element => {
    element.style.backgroundColor = '#191919';
    element.style.color = '#191919';
	const h2 = element.querySelector('h2');
	h2.style.backgroundColor = '#222222';
});
}
const postbodyElements = document.querySelectorAll('.postbody');
if (postbodyElements != null){
postbodyElements.forEach(element => {
    element.style.backgroundColor = '#191919';
	const dt = element.querySelector('dt');
	dt.style.backgroundColor = '#222222';
});
}

const postfootElements = document.querySelectorAll('.postfoot');
if (postfootElements != null) {
postfootElements.forEach(element => {
    element.style.backgroundColor = '#191919';
});
}

const postrightElements = document.querySelectorAll('.postmsg');
if (postrightElements != null) {
postrightElements.forEach(element => {
	element.style.color = 'white';
});
}

const crumbsElement = document.querySelector('.crumbs');
if (crumbsElement != null) {
	const a = crumbsElement.querySelectorAll('a');
	a.forEach(a => {
		a.style.color = '#eaeaea'
	});
}
} 
if (document.documentURI.includes('wiki.archlinux.org')){
	const htmlElement = document.querySelector('html');
	htmlElement.classList.add('client-darkmode');
}