function Append(docPath)
{
	childElement = document.createElement('div');
	childElement.setAttribute("id", docPath);	
	
	document.appendChild(childElement);
	
	$("#"+docPath).load(docPath);
}