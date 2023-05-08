// Landing Page Navigator 
// @GydruS 2023 apr 22
//
// Full descr-doc-comment will be here l8er, maybe...

/*

Sample usage code:  
------------------

$(document).ready(function(){
	var lpn = new LPNavigator();
	$('#test').click(function(){lpn.scrollDown(2);});
});

*/

/*
TBD: Save whole nav items collection as a class variable instead of maxScreenIndex and every-time selection (this.anchorSelector+'['+this.attrName+'="'+screenIdx+'"]');
*/


function LPNavigator(anchorSelector, attrName) {
    this.anchorSelector = anchorSelector || '.screen';
    this.attrName = attrName || 'lpnAnchor';
	this.screenIndex = 0;
	this.maxScreenIndex = 0;
	
    this.init();
    
    return this;
}

LPNavigator.prototype = {

	scrollTo: function(screenIdx) {
		var el = document.querySelector(this.anchorSelector+'['+this.attrName+'="'+screenIdx+'"]');
		if (el) {
			el.scrollIntoView({behavior: 'smooth', block: "start", inline: "start"});
			this.screenIndex = screenIdx;
			if (this.onShowScreen) this.onShowScreen(screenIdx);
			return true;
		}
		//console.log('screenIndex='+screenIdx);
		return false;
	},

	scrollDown: function(steps) {
		steps = steps || 1;
		if (this.screenIndex < this.maxScreenIndex) {
			return this.scrollTo(this.screenIndex+steps);
		}
		return false;
	},

	scrollUp: function(steps) {
		steps = steps || 1;
		if (this.screenIndex > 0) {
			return this.scrollTo(this.screenIndex-steps);
		}
		return false;
	},
	
	setInternalAttributes: function(selector) { // функция 
		selector = selector || '.lpnAnchor';
		var collection = $(selector);
		var self = this;
		collection.each(function(i, el){
			$(el).attr(self.attrName, i);
		});
		return collection.length;
	},
	
	init: function() {
		var self = this;
		this.maxScreenIndex = this.setInternalAttributes('.screen');
		
		document.onkeydown = function (event) {
			switch (event.key) {
				case 'ArrowUp':
				case 'ArrowLeft':
					if (self.scrollUp()) event.preventDefault();
					break;
				case 'ArrowDown':
				case 'ArrowRight':
					if (self.scrollDown()) event.preventDefault();
					break;
			}
		};

		window.addEventListener("wheel", function (event) {
			if (event.deltaY > 0) {
				if (self.scrollDown()) event.preventDefault();
			}
			else {
				if (self.scrollUp()) event.preventDefault();
			}
		}, {passive: false} );
	},
	
	onShowScreen: function(screenIndex) {
		
	}

};
