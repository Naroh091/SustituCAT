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
			while ( hild) {
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

    v = v.replace(/\b(Catalonia|Cataluña|Catalunya)\b/gi, "Ponilandia");
    v = v.replace(/\bsoberanista\b/gi, "mágica");
	v = v.replace(/\b(consulta soberanista|consulta independentista)\b/gi, "Corro de la patata");
	v = v.replace(/\b(independent|independiente|independentista|independentisme|independentism)\b/gi, "brillante como la purpurina");
	
	textNode.nodeValue = v;
}
