 $(function() {
 	describe('RSS Feeds', function() {

 		it('are defined', function() {
 			expect(allFeeds).toBeDefined();
 			expect(allFeeds.length).not.toBe(0);
 		});

 		it('url defined', function() {
 			for (let i = 0; i < allFeeds.length; i++) {
 				expect(allFeeds[i].url).toBeDefined();
 				expect(allFeeds[i].url.length).not.toBe(0);
 			}
 		});

 		it('name defined', function() {
 			for (let i = 0; i < allFeeds.length; i++) {
 				expect(allFeeds[i].name).toBeDefined();
 				expect(allFeeds[i].name.length).not.toBe(0);
 			}
 		});
 	});


 	describe('The menu', function() {
 		const hiddenMenu = document.querySelector('.menu-hidden');
 		const hamburgerIcon = document.querySelector('.menu-icon-link');

 		it('should be hidden by default', function() {
 			expect(hiddenMenu.classList.contains('menu-hidden')).toBe(true);
 		});

 		it('should have it visibility toggled', function() {
 			hamburgerIcon.click();
 			expect(hiddenMenu.classList.contains('menu-hidden')).toBe(false);
 			hamburgerIcon.click();
 			expect(hiddenMenu.classList.contains('menu-hidden')).toBe(true);
 		});
 	});

 	describe('Initial Entries', function() {
 		const entry = document.querySelector('.feed .entry');

 		beforeEach(function(done) {
 			loadFeed(0, done);
 		});

 		it('at least one entry is there(in the feed container)', function() {
 			expect(entry).not.toBe(0);
 		});

 	});

 	describe('New Feed Selection', function(){
 		let oldContent, newContent;
 		beforeEach(function(done) {
 			loadFeed(0, function(){
 				oldContent = document.querySelector('.feed').innerHTML;

 				loadFeed(1, function() {
 					newContent = document.querySelector('.feed').innerHTML;
 					done();
 				});
 			});
 		});

 		it('changes the content', function() {
 			expect(newContent).not.toBe(oldContent);
 		});
 	});

 }());