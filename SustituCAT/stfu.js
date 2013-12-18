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
    v = v.replace(/\bproceso soberanista\b/g, "nacimiento de las mariposas");
	v = v.replace(/\bconsulta independentista\b/g, "gran adoración al bizcocho de chocolate");
    v = v.replace(/\bconsulta soberanista\b/g, "gran adoración al bizcocho de chocolate");
    v = v.replace(/\bconsulta secesionista\b/g, "gran adoración al bizcocho de chocolate");
	v = v.replace(/\bconsulta catalana\b/g, "gran adoración al bizcocho de chocolate");
    v = v.replace(/\bindependent\b/g, "brillante como la purpurina");
    v = v.replace(/\bIndependent\b/g, "brillante como la purpurina");
    v = v.replace(/\bindependiente\b/g, "brillante como la purpurina");
    v = v.replace(/\bIndependiente\b/g, "brillante como la purpurina");
    v = v.replace(/\bindependentista\b/g, "brillante como la purpurina");
    v = v.replace(/\bIndependentista\b/g, "brillante como la purpurina");
	v = v.replace(/\bIndependentistas\b/g, "Bailarines");
	v = v.replace(/\bindependentistas\b/g, "bailarines");
    v = v.replace(/\bindependencia\b/g, "fiesta parda");
    v = v.replace(/\bIndependencia\b/g, "Fiesta Parda");
    v = v.replace(/\bindependència\b/g, "fiesta parda");
    v = v.replace(/\bIndependència\b/g, "Fiesta Parda");
    v = v.replace(/\bla vía catalana\b/g, "el corro de la patata");
    v = v.replace(/\bvía catalana\b/g, "corro de la patata");
    v = v.replace(/\bvia catalana\b/g, "corro de la patata");
    v = v.replace(/\bla via catalana\b/g, "el corro de la patata");
    v = v.replace(/\bla Vía Catalana\b/g, "el Corro de la Patata");
    v = v.replace(/\bVía Catalana\b/g, "Corro de la Patata");
	v = v.replace(/\bVia Catalana\b/g, "Corro de la Patata");
	v = v.replace(/\bindependentismo catalán\b/g, "conjuro mágico");
	v = v.replace(/\bIndependentismo Catalán\b/g, "Conjuro Mágico");
	v = v.replace(/\bIndependentismo catalán\b/g, "Conjuro mágico");
	v = v.replace(/\bcatalanes\b/g, "ponies");
	v = v.replace(/\bcatalanas\b/g, "ponies");
	v = v.replace(/\bcatalán\b/g, "poni");
	v = v.replace(/\bcatalana\b/g, "poni");
	v = v.replace(/\bArtur Mas\b/g, "Jefe Supremo de los Ponies");
	v = v.replace(/\bDerecho a Decidir\b/g, "Derecho a comer pasteles");
	v = v.replace(/\bderecho a decidir\b/g, "derecho a comer pasteles");
	v = v.replace(/\bderecho a Decidir\b/g, "Derecho a comer pasteles");
	v = v.replace(/\bautodeterminacion\b/g, "automasturbación");
	v = v.replace(/\bautodeterminación\b/g, "automasturbación");
	v = v.replace(/\bgobierno catalan\b/g, "Consejo Mayor de Ancianos Danzarines");
	v = v.replace(/\bgobierno catalán\b/g, "Consejo Mayor de Ancianos Danzarines");
	v = v.replace(/\bGobierno Catalán\b/g, "Consejo Mayor de Ancianos Danzarines");
	v = v.replace(/\bGobierno catalán\b/g, "Consejo Mayor de Ancianos Danzarines");
	v = v.replace(/\bGovern de Cataluña\b/g, "Consejo Mayor de Ancianos Danzarines");
	v = v.replace(/\bParlament\b/g, "Castillo de Maria Lapiedra");
	v = v.replace(/\bParlament de Catalunya\b/g, "Castillo de Maria Lapiedra");
	v = v.replace(/\bParlament de Cataluña\b/g, "Castillo de Maria Lapiedra");
	v = v.replace(/\bParlament catalán\b/g, "Castillo de Maria Lapiedra");
	v = v.replace(/\bParlamento de Cataluña\b/g, "Castillo de Maria Lapiedra");
	v = v.replace(/\bGovern\b/g, "consejo de Ancianos Danzarines");
	v = v.replace(/\bgovern\b/g, "consejo de Ancianos Danzarines");
	v = v.replace(/\bERC\b/g, "Esquerra Marciana de Ponilandia");
	v = v.replace(/\bEsquerra Republicana de Cataluña\b/g, "Esquerra Marciana de Ponilandia");
	v = v.replace(/\bEsquerra Republicana de Catalunya\b/g, "Esquerra Marciana de Ponilandia");
	v = v.replace(/\bGeneralitat\b/g, "Generalísima");
	v = v.replace(/\bDiada\b/g, "Piruletada");
	v = v.replace(/\bEstado soberano\b/g, "Estado gaseoso");
	v = v.replace(/\bveto a la consulta\b/g, "rechazo a la rica miel");
	v = v.replace(/\brechazo a la consulta\b/g, "rechazo a la rica miel");
    v = v.replace(/\bsoberanista\b/g, "mágica");
    v = v.replace(/\bSoberanista\b/g, "mágica");
		
	textNode.nodeValue = v;
}
