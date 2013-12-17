walk(document.body);

function walk(node) {
	// I stole this function from here:
    // https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js
    // Which was already stolen from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			removeIndependentism(node);
			break;
	}
}

function removeIndependentism(textNode) {
	var v = textNode.nodeValue;

    v = v.replace(/\bCatalonia\b/g, "Ponilandia");
    v = v.replace(/\bcatalonia\b/g, "Ponilandia");
    v = v.replace(/\bCataluña\b/g, "Ponilandia");
    v = v.replace(/\bcataluña\b/g, "Ponilandia");
    v = v.replace(/\bCatalunya\b/g, "Ponilandia");
    v = v.replace(/\bcatalunya\b/g, "Ponilandia");
    v = v.replace(/\bsoberanista\b/g, "mágica");
    v = v.replace(/\bSoberanista\b/g, "mágica");
	v = v.replace(/\bconsulta mágica\b/g, "Fiesta de la patata");
    v = v.replace(/\bConsulta mágica\b/g, "Fiesta de la patata");
    v = v.replace(/\bConsulta mágica\b/g, "Fiesta de la patata");
	v = v.replace(/\bconsulta brillante como la purpurina\b/g, "Fiesta de la patata");
    v = v.replace(/\bConsulta brillante como la purpurina\b/g, "Fiesta de la patata");
    v = v.replace(/\bConsulta brillante como la purpurina\b/g, "Fiesta de la patata");
    v = v.replace(/\bindependent\b/g, "brillante como la purpurina");
    v = v.replace(/\bIndependent\b/g, "brillante como la purpurina");
    v = v.replace(/\bindependiente\b/g, "brillante como la purpurina");
    v = v.replace(/\bIndependiente\b/g, "brillante como la purpurina");
    v = v.replace(/\bindependentista\b/g, "brillante como la purpurina");
    v = v.replace(/\bIndependentista\b/g, "brillante como la purpurina");
    v = v.replace(/\bindependentism\b/g, "shiny");
    v = v.replace(/\bIndependentism\b/g, "shiny");
    v = v.replace(/\bindependencia\b/g, "Fiesta Parda");
    v = v.replace(/\bIndependencia\b/g, "Fiesta Parda");
    v = v.replace(/\bindependència\b/g, "Fiesta Parda");
    v = v.replace(/\bIndependència\b/g, "Fiesta Parda");
    v = v.replace(/\bla vía catalana\b/g, "el corro de la patata");
    v = v.replace(/\bvía catalana\b/g, "corro de la patata");
    v = v.replace(/\bvia catalana\b/g, "corro de la patata");
    v = v.replace(/\bla via catalana\b/g, "el corro de la patata");
	
	textNode.nodeValue = v;
}
