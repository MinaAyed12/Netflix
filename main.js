// Set Elements
let allTabs = Array.from(document.querySelectorAll('.tab-item')),
	allTabsContent = Array.from(document.querySelectorAll('.tab-content'));

// Create The Toggle Tabs
allTabs.forEach((tab) => {
	tab.onclick = function () {
		// Remove All Classes
		removeClass(allTabs, 'tab-border');
		removeClass(allTabsContent, 'show');
		// Add The Border Class and The Show Class to The Clicked Element
		this.classList.add('tab-border');
		let tabSection = document.querySelector(`#${this.id}-content`);
		tabSection.classList.add('show');
	};
});

// Remove Class Function
function removeClass(theElements, theClass) {
	theElements.forEach((element) => {
		element.classList.remove(theClass);
	});
}
