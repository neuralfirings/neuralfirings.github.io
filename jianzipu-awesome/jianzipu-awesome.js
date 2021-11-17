console.log('Using [[JianZiPu]]')
document.addEventListener("DOMContentLoaded", function(event) { 
	var jzpClasses = document.getElementsByClassName("[[jzp]]")
	if (jzpClasses.length > 0 ){
		for (var i=0;i<jzpClasses.length;i++) {
			jzpClasses[i].innerHTML = jzpClasses[i].getInnerHTML().split('[[').join('<span class="jzp">').split(']]').join('</span>')
		}
	}
	var jzpClassesKeep = document.getElementsByClassName("![[jzp]]")
	if (jzpClassesKeep.length > 0 ){
		for (var i=0;i<jzpClassesKeep.length;i++) {
			jzpClassesKeep[i].innerHTML = jzpClassesKeep[i].getInnerHTML().split('[[').join('[[<span class="jzp">').split(']]').join('</span>]]')
		}
	}
});
