console.log('using [[JianZiPu]]')
var jzpClasses = document.getElementsByClassName("[[jzp]]")
for (var i=0;i<jzpClasses.length;i++) {
	jzpClasses[i].innerHTML = jzpClasses[i].getInnerHTML().split('[[').join('<span class="jzp">').split(']]').join('</span>')
}