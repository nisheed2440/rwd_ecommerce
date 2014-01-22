/*Author:Nisheed Jagadish
Project: F&F
Reference:Myntra.com
 */

var FNF = FNF || {};
FNF.Browse = FNF.Browse || {};
FNF.Browse.fn = FNF.Browse.fn || {};

FNF.Browse.fn.stringContains = function () {
	if ("string" == typeof arguments[0])
		for (var a = 1; a < arguments.length; a++)
			if (-1 != arguments[0].indexOf(arguments[a])) return !0;
	return !1
}; 

FNF.Browse.fn.stickyFilters = function () {
	function a(a, b, c) {
		c = "fixed-bottom" == b ? "auto" : c || 0;
		bottomOffset = "fixed-bottom" == b ? 0 : "auto";
		a.removeClass("boundary-top boundary-bottom fixed-top fixed-bottom hung").addClass(b).css({
			top: c,
			bottom: bottomOffset
		})
	}
	var b = $(".plp-product"),
	c = $(".facet-container .facet-container-inner").addClass("boundary-top"),
	d = $(".product-grid .product-grid-contents").addClass("boundary-top"),
	e = $(window).scrollTop();
	this.recalc = function () {
		if (1180 > $(window).width()) a(c.add(d),
		"boundary-top");
		else {
			var f = $(window).height(),
			g = e,
			m = c.offset().top,
			l = c.outerHeight(!0),
			p = d.outerHeight(!0),
			q = l <= f,
			u = p <= f,
			h = b.offset().top,
			r = h + b.height(),
			//Some container class we would need to stick to the top
			//like category menu else random wrapper.
			n = $(".randomWrapper").outerHeight() || 0,
			o = r - h - l,
			v = r - h - p,
			k = c[0].className,
			t = d[0].className;
			e = $(window).scrollTop();
			var w = g <= e ? "down" : "up",
					g = m - h - (e - g);
			u && p < l ? (a(c, "boundary-top"), FNF.Browse.fn.stringContains(t, "boundary-top") && e > h ? a(d, "fixed-top", n) : FNF.Browse.fn.stringContains(t, "fixed-top", "boundary-top") && e >= h + v ? a(d, "boundary-bottom",
					v) : FNF.Browse.fn.stringContains(t, "fixed-top", "boundary-bottom") && e <= h ? a(d, "boundary-top") : FNF.Browse.fn.stringContains(t, "boundary-bottom") && e < h + v && a(d, "fixed-top", n)) : q ? (a(d, "boundary-top"), FNF.Browse.fn.stringContains(k, "boundary-top", "hung", "fixed-bottom") && e > h ? a(c, "fixed-top", n) : FNF.Browse.fn.stringContains(k, "fixed-top", "boundary-top", "hung", "fixed-bottom") && e >= h + o ? a(c, "boundary-bottom", o) : FNF.Browse.fn.stringContains(k, "fixed-top", "boundary-bottom", "hung", "fixed-bottom") && e <= h ? a(c, "boundary-top") : FNF.Browse.fn.stringContains(k, "boundary-bottom", "hung", "fixed-bottom") && e < h + o ? a(c, "fixed-top", n) : FNF.Browse.fn.stringContains(k, "boundary-bottom") && h + o > m + l && a(c, "fixed-top", n)) : (a(d, "boundary-top"), FNF.Browse.fn.stringContains(k, "boundary-top") && e + f > h + l ? a(c, "fixed-bottom") : FNF.Browse.fn.stringContains(k, "fixed-top") && "down" == w ? e + f < h + g + l ? a(c, "hung", g) : a(c, "fixed-bottom") : FNF.Browse.fn.stringContains(k, "hung") && e + f >= m + l ? a(c, "fixed-bottom") : FNF.Browse.fn.stringContains(k, "fixed-bottom", "hung", "boundary-top",
					"fixed-top") && m + l >= r && a(c, "boundary-bottom", o), FNF.Browse.fn.stringContains(k, "fixed-top", "hung", "boundary-bottom", "fixed-bottom") && e <= h ? a(c, "boundary-top") : FNF.Browse.fn.stringContains(k, "hung") && e <= m ? a(c, "fixed-top", n) : FNF.Browse.fn.stringContains(k, "fixed-bottom") && "up" == w ? e > h + g ? a(c, "hung", g) : a(c, "fixed-top", n) : FNF.Browse.fn.stringContains(k, "boundary-bottom") && e < m && a(c, "fixed-top", n), FNF.Browse.fn.stringContains(k, "hung", "fixed-top") && m + l >= r ? a(c, "boundary-bottom", o) : FNF.Browse.fn.stringContains(k,
					"boundary-bottom") && h + o > m + l && a(c, "fixed-bottom"))
		}
	};
	return this
};