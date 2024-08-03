// elements selector
const html = document.documentElement,
h1 = document.getElementsByTagName('h1'),
jsBasic = document.querySelector(".js-basic"),
h2 = document.getElementsByTagName('h2'),
h3 = document.getElementsByTagName('h3'),
h4 = document.getElementsByTagName("h4"),
h5 = document.getElementsByTagName('h5'),
paragraph = document.getElementsByTagName('p'),
code_Sample = document.getElementsByClassName('code-sample'),
code = document.getElementsByTagName('code'),
list = document.getElementsByTagName('li'),
bold = document.getElementsByTagName('b'),
emphesize = document.getElementsByTagName('em'),
comment = document.getElementsByClassName('code-comment'),
anchor = document.getElementsByTagName('a'),
highlight = document.getElementsByClassName('highlight'),
fushcia = document.getElementsByClassName('fushcia'),
table = document.getElementsByTagName('table'),
tableHead =document.getElementsByTagName("th");
tableRow = document.getElementsByTagName("td");


html.style.backgroundColor = '#222';
html.style.paddingLeft = "5px";
html.style.scrollBehavior = "smooth";


// for loops
for (let i = 0; i < h1.length; i ++) {
	h1[i].style.color = "#0ef";
	h1[i].style.fontWeight = 600;
	h1[i].style.textAlign = 'right';
};

for (let i = 0; i < h2.length; i++) {
	h2[i].style.color = 'DeepPink';
	h2[i].style.fontWeight = 600;
	h2[i].style.textAlign = "center";
	h2[i].style.paddingBottom = '5px';
};

for (let i = 0; i < h3.length; i++) {
	h3[i].style.color = '#fe8207';
	h3[i].style.maxWidth = 'fit-content';
	h3[i].style.textAlign = 'center';
	h3[i].style.margin = "0 auto";
	h3[i].style.borderBottom = '2.5px solid #00FFDF';
}

for (let i = 0; i < paragraph.length; i++) {
	paragraph[i].style.color = '#fff';
}

for (let i = 0; i < code_Sample.length; i++) {
	codeSample[i].style.textAlign = "center";
	codeSample[i].style.color = '#17c345';
}

for (let i = 0; i < code.length; i++) {
	let result = code[i];
	result.style.color = '#0cf';
	result.style.lineHeight = '20px';
	result.style.border = 'none';
	result.style.outline = 'none';
	result.style.contenteditable = true;
}

for (let i = 0; i < comment.length; i++) {
	comment[i].style.color = 'gray';
}

for (let i = 0; i < list.length; i++) {
	list[i].style.color = '#0fc';
}

for (let i = 0; i < bold.length; i++) {
	bold[i].style.backgroundColor = '#000';
	bold[i].style.color = '#fff';
	bold[i].style.padding = '0 3px';
	bold[i].style.borderRadius = '3px';
}

for (let i = 0; i < emphesize.length; i++) {
	emphesize[i].style.backgroundColor = "#550";
	emphesize[i].style.padding = '0 3px';
	emphesize[i].style.borderRadius = '3px';
};

for (let i = 0; i < anchor.length; i++) {
	anchor[i].style.textDecoration = 'none';
	anchor[i].style.color = 'FFc';
}

for (let i = 0; i < highlight.length; i++) {
	highlight[i].style.color = "fcf";
	highlight[i].style.fontWeight = '	700';
}

for (let i = 0; i < fushcia.length; i++) {
	fushcia[i].style.color = "#FF0077";
}

for (let i = 0; i < h4.length; i++) {
  h4[i].style.color = "#FF1";
  h4[i].style.textAlign = "center";
} 

for(let i = 0; i < h5.length; i++) {
	h5[i].style.color = '#006DFF';
}

for(let i = 0; i < table.length; i++) {
	table[i].style.backgroundColor = '#fff';
	table[i].style.color = '#000';
	table[i].style.border = "3px solid #e10";
	table[i].style.borderCollapse = "collapse";
	table[i].style.margin = "10px auto";
}

for (let i = 0; i < tableHead.length; i++) {
  tableHead[i].style.border = "3.5px solid #0ef";
  tableHead[i].style.padding = "6px";
}

for (let i = 0; i < tableRow.length; i++) {
  tableRow[i].style.border = "2.5px solid #e10";
  tableRow[i].style.padding = "6px"
} 
// test console
