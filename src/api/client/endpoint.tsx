const apiConfig = {
	BASE_URL: "https://3.66.63.30:3000/",
	GET: {
		GET_PRODUCTS: "/products/getproducts",
		GET_CATEGORIES: "/products/allcategories",
	},
	POST: {
		PRODUCTS:"/products/getproducts",
		CATEGORIES:"/products/categories",
		PRODUCTSBYFILTER:"/products/getProductsByFilter",
		PRODUCTSBYCATID:"/products/getProductsByCategoryId",
		BRANDS:"/products/getBrands",
	},
	PUT: {
	},
	DELETE: {
		
	},
};

export default apiConfig;
