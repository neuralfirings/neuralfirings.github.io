var jzpClasses = document.getElementsByClassName("[[jzp]]")
for (var i=0;i<jzpClasses.length;i++) {
	jzpClasses[i].innerHTML = jzpClasses[i].getInnerHTML().('[[').join('<span class="jzp">').split(']]').join('</span>')
}