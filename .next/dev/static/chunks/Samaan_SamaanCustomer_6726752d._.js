(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Samaan/SamaanCustomer/lib/translations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTranslation",
    ()=>getTranslation,
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        // Header
        "header.deliveryIn": "Delivery in",
        "header.min": "min",
        "header.deliverTo": "Deliver to",
        "header.search": "Search for",
        "header.login": "Login",
        "header.cart": "Cart",
        "header.notifications": "Notifications",
        "header.orders": "My Orders",
        "header.signup": "Sign Up",
        "header.home": "Home",
        // Home
        "home.shopAll": "Shop All",
        "home.seeAll": "See all",
        "home.freshDrops": "Fresh Drops Nearby",
        "home.nearbyShops": "Nearby Kirana Shops",
        "home.categories": "Shop by Category",
        "home.smartRestock": "Smart Restock",
        "home.basedOnHistory": "Based on your purchase history",
        "home.quickReorder": "Quick reorder your essentials",
        // Categories
        "category.fruitsVegetables": "Fruits & Vegetables",
        "category.dairy": "Dairy & Eggs",
        "category.bakery": "Bakery",
        "category.beverages": "Beverages",
        "category.snacks": "Snacks",
        "category.groceryStaples": "Grocery Staples",
        "category.personalCare": "Personal Care",
        "category.household": "Household",
        "category.babycare": "Baby Care",
        "category.petSupplies": "Pet Supplies",
        "category.filter": "Filters",
        "category.sortBy": "Sort by",
        "category.price": "Price",
        "category.rating": "Rating",
        "category.productsAvailable": "products available",
        "category.clearAll": "Clear All",
        "category.applyFilters": "Apply Filters",
        "category.priceRange": "Price Range",
        "category.minRating": "Minimum Rating",
        "category.stars": "stars",
        "category.andAbove": "& above",
        "category.lowToHigh": "Low to High",
        "category.highToLow": "High to Low",
        "category.newest": "Newest First",
        "category.popularity": "Popularity",
        // Products
        "product.add": "ADD",
        "product.fresh": "Fresh",
        "product.stocked": "Stocked",
        "product.mins": "mins",
        "product.off": "OFF",
        "product.outOfStock": "Out of Stock",
        "product.inStock": "In Stock",
        "product.quantity": "Quantity",
        // Cart
        "cart.title": "Your Cart",
        "cart.items": "items",
        "cart.empty": "Your cart is empty",
        "cart.addItems": "Add items to get started",
        "cart.startShopping": "Start Shopping",
        "cart.freeDelivery": "Free delivery on orders above",
        "cart.addMore": "Add more for free delivery",
        "cart.deliveryIn": "Delivery in",
        "cart.promoCode": "Apply Promo Code",
        "cart.enterCode": "Enter code",
        "cart.apply": "Apply",
        "cart.billDetails": "Bill Details",
        "cart.itemTotal": "Item Total",
        "cart.deliveryFee": "Delivery Fee",
        "cart.free": "FREE",
        "cart.toPay": "To Pay",
        "cart.deliverTo": "Deliver to",
        "cart.change": "Change",
        "cart.checkout": "Proceed to Checkout",
        "cart.viewCart": "View Cart",
        "cart.itemsAdded": "items added",
        "cart.total": "Total",
        "cart.remove": "Remove",
        "cart.savings": "You're saving",
        "cart.taxes": "Taxes & Charges",
        "cart.grandTotal": "Grand Total",
        // Checkout
        "checkout.title": "Checkout",
        "checkout.deliveryAddress": "Delivery Address",
        "checkout.paymentMethod": "Payment Method",
        "checkout.cashOnDelivery": "Cash on Delivery",
        "checkout.upiPayment": "UPI Payment",
        "checkout.cardPayment": "Credit/Debit Card",
        "checkout.walletPayment": "Wallet",
        "checkout.placeOrder": "Place Order",
        "checkout.orderSummary": "Order Summary",
        "checkout.deliveryTime": "Delivery Time",
        "checkout.payOnDelivery": "Pay on delivery",
        "checkout.payNow": "Pay now",
        "checkout.addInstructions": "Add delivery instructions",
        "checkout.contactless": "Contactless delivery",
        // Orders
        "orders.title": "My Orders",
        "orders.all": "All",
        "orders.active": "Active",
        "orders.completed": "Completed",
        "orders.noOrders": "No orders yet",
        "orders.startShopping": "Start shopping to see your orders here",
        "orders.delivered": "Delivered",
        "orders.onTheWay": "On the way",
        "orders.preparing": "Preparing",
        "orders.reorder": "Reorder",
        "orders.deliveredIn": "Delivered in",
        "orders.orderId": "Order ID",
        "orders.placedOn": "Placed on",
        "orders.viewDetails": "View Details",
        "orders.trackOrder": "Track Order",
        "orders.cancelOrder": "Cancel Order",
        "orders.returnOrder": "Return Order",
        "orders.orderDetails": "Order Details",
        "orders.itemsOrdered": "Items Ordered",
        "orders.noActiveOrders": "No active orders",
        "orders.noCompletedOrders": "No completed orders",
        // Notifications
        "notifications.title": "Notifications",
        "notifications.empty": "No notifications",
        "notifications.emptySubtitle": "You're all caught up!",
        "notifications.markAllRead": "Mark all as read",
        "notifications.today": "Today",
        "notifications.yesterday": "Yesterday",
        "notifications.earlier": "Earlier",
        "notifications.orderUpdate": "Order Update",
        "notifications.promotion": "Promotion",
        "notifications.newArrival": "New Arrival",
        // Shops
        "shops.title": "Nearby Shops",
        "shops.all": "All",
        "shops.openNow": "Open Now",
        "shops.verified": "Verified",
        "shops.nearest": "Nearest",
        "shops.highRated": "High Rated",
        "shops.fastDelivery": "Fast Delivery",
        "shops.lowestPrice": "Lowest Price",
        "shops.closed": "Closed",
        "shops.open": "Open",
        "shops.minOrder": "Min. order",
        "shops.delivery": "Delivery",
        "shops.rating": "Rating",
        "shops.reviews": "reviews",
        "shops.viewShop": "View Shop",
        "shops.allCategories": "All Categories",
        "shops.searchProducts": "Search products",
        "shops.highestRated": "Highest Rated",
        "shops.fastestDelivery": "Fastest Delivery",
        "shops.lowestPriceSort": "Lowest Price",
        // Auth
        "auth.welcomeBack": "Welcome Back",
        "auth.loginSubtitle": "Login to get groceries delivered in minutes",
        "auth.phone": "Phone",
        "auth.email": "Email",
        "auth.enterPhone": "Enter 10-digit number",
        "auth.enterEmail": "Enter your email",
        "auth.enterPassword": "Enter your password",
        "auth.getOtp": "Get OTP",
        "auth.sendOtp": "Send OTP",
        "auth.or": "OR",
        "auth.orContinueWith": "OR CONTINUE WITH",
        "auth.continueWithGoogle": "Continue with Google",
        "auth.verifyAndLogin": "Verify & Login",
        "auth.changeNumber": "Change number",
        "auth.noAccount": "Don't have an account?",
        "auth.signUp": "Sign up",
        "auth.hasAccount": "Already have an account?",
        "auth.login": "Login",
        "auth.forgotPassword": "Forgot Password?",
        "auth.createAccount": "Create Account",
        "auth.joinUs": "Join Samaan",
        "auth.signupSubtitle": "Sign up to get groceries delivered in minutes",
        "auth.fullName": "Full Name",
        "auth.enterName": "Enter your full name",
        "auth.password": "Password",
        "auth.confirmPassword": "Confirm Password",
        "auth.agreeToTerms": "I agree to the",
        "auth.termsOfService": "Terms of Service",
        "auth.and": "and",
        "auth.privacyPolicy": "Privacy Policy",
        "auth.verifyOtp": "Verify OTP",
        "auth.otpSent": "OTP sent to",
        "auth.resendOtp": "Resend OTP",
        "auth.didntReceive": "Didn't receive the code?",
        "auth.resetPassword": "Reset Password",
        "auth.resetSubtitle": "Enter your email to receive reset instructions",
        "auth.sendResetLink": "Send Reset Link",
        "auth.backToLogin": "Back to Login",
        "auth.trustedBy": "Trusted by 50,000+ users",
        // Address
        "address.selectAddress": "Select Delivery Address",
        "address.savedAddresses": "Saved Addresses",
        "address.addNew": "Add New Address",
        "address.useCurrentLocation": "Use current location",
        "address.detecting": "Detecting location...",
        "address.home": "Home",
        "address.work": "Work",
        "address.other": "Other",
        "address.setAsDefault": "Set as default",
        "address.edit": "Edit",
        "address.delete": "Delete",
        // Hero Banner
        "hero.freshVegetables": "Fresh Vegetables",
        "hero.farmToTable": "Farm to table in minutes",
        "hero.shopNow": "Shop Now",
        "hero.dailyEssentials": "Daily Essentials",
        "hero.milkBreadEggs": "Milk, Bread & Eggs",
        "hero.orderNow": "Order Now",
        "hero.freshFruits": "Fresh Fruits",
        "hero.seasonalDelights": "Seasonal delights for you",
        "hero.explore": "Explore",
        // Search
        "search.placeholder": "Search for products, shops...",
        "search.recent": "Recent Searches",
        "search.popular": "Popular Searches",
        "search.noResults": "No results found",
        "search.tryDifferent": "Try a different search term",
        // Misc
        "misc.language": "Language",
        "misc.english": "English",
        "misc.hindi": "हिंदी",
        "misc.marathi": "मराठी",
        "misc.loading": "Loading...",
        "misc.error": "Something went wrong",
        "misc.retry": "Retry",
        "misc.cancel": "Cancel",
        "misc.save": "Save",
        "misc.confirm": "Confirm",
        "misc.close": "Close",
        "misc.back": "Back",
        "misc.next": "Next",
        "misc.done": "Done",
        "misc.viewAll": "View All",
        "misc.showMore": "Show More",
        "misc.showLess": "Show Less",
        // Terms & Privacy
        "terms.title": "Terms of Service",
        "privacy.title": "Privacy Policy",
        "terms.lastUpdated": "Last Updated",
        "terms.acceptance": "Acceptance of Terms",
        "terms.services": "Our Services",
        "terms.userAccount": "User Account",
        "terms.ordering": "Ordering & Delivery",
        "terms.payments": "Payments",
        "terms.cancellation": "Cancellation & Refunds",
        "privacy.infoCollect": "Information We Collect",
        "privacy.howWeUse": "How We Use Your Information",
        "privacy.sharing": "Information Sharing",
        "privacy.security": "Data Security",
        "privacy.rights": "Your Rights",
        "privacy.contact": "Contact Us",
        // Promo
        "promo.freeDelivery": "Free Delivery",
        "promo.onFirstOrder": "On your first order",
        "promo.freshProduce": "Fresh Produce",
        "promo.directFromFarms": "Direct from farms",
        "promo.fastDelivery": "Fast Delivery",
        "promo.in10Minutes": "In 10 minutes"
    },
    hi: {
        // Header
        "header.deliveryIn": "डिलीवरी में",
        "header.min": "मिनट",
        "header.deliverTo": "डिलीवरी पता",
        "header.search": "खोजें",
        "header.login": "लॉगिन",
        "header.cart": "कार्ट",
        "header.notifications": "सूचनाएं",
        "header.orders": "मेरे ऑर्डर",
        "header.signup": "साइन अप",
        "header.home": "होम",
        // Home
        "home.shopAll": "सब खरीदें",
        "home.seeAll": "सभी देखें",
        "home.freshDrops": "ताज़ा उत्पाद",
        "home.nearbyShops": "आस-पास की दुकानें",
        "home.categories": "श्रेणी से खरीदें",
        "home.smartRestock": "स्मार्ट रीस्टॉक",
        "home.basedOnHistory": "आपकी खरीदारी के आधार पर",
        "home.quickReorder": "अपनी ज़रूरतें जल्दी मंगाएं",
        // Categories
        "category.fruitsVegetables": "फल और सब्जियां",
        "category.dairy": "डेयरी और अंडे",
        "category.bakery": "बेकरी",
        "category.beverages": "पेय पदार्थ",
        "category.snacks": "नाश्ता",
        "category.groceryStaples": "किराना सामान",
        "category.personalCare": "व्यक्तिगत देखभाल",
        "category.household": "घरेलू सामान",
        "category.babycare": "बेबी केयर",
        "category.petSupplies": "पालतू पशु सामान",
        "category.filter": "फ़िल्टर",
        "category.sortBy": "क्रमबद्ध करें",
        "category.price": "कीमत",
        "category.rating": "रेटिंग",
        "category.productsAvailable": "उत्पाद उपलब्ध",
        "category.clearAll": "सभी साफ़ करें",
        "category.applyFilters": "फ़िल्टर लागू करें",
        "category.priceRange": "मूल्य सीमा",
        "category.minRating": "न्यूनतम रेटिंग",
        "category.stars": "सितारे",
        "category.andAbove": "और ऊपर",
        "category.lowToHigh": "कम से ज्यादा",
        "category.highToLow": "ज्यादा से कम",
        "category.newest": "नवीनतम पहले",
        "category.popularity": "लोकप्रियता",
        // Products
        "product.add": "जोड़ें",
        "product.fresh": "ताज़ा",
        "product.stocked": "स्टॉक में",
        "product.mins": "मिनट",
        "product.off": "छूट",
        "product.outOfStock": "स्टॉक में नहीं",
        "product.inStock": "स्टॉक में",
        "product.quantity": "मात्रा",
        // Cart
        "cart.title": "आपका कार्ट",
        "cart.items": "आइटम",
        "cart.empty": "आपका कार्ट खाली है",
        "cart.addItems": "शुरू करने के लिए आइटम जोड़ें",
        "cart.startShopping": "खरीदारी शुरू करें",
        "cart.freeDelivery": "मुफ्त डिलीवरी ऑर्डर पर",
        "cart.addMore": "मुफ्त डिलीवरी के लिए और जोड़ें",
        "cart.deliveryIn": "डिलीवरी में",
        "cart.promoCode": "प्रोमो कोड लगाएं",
        "cart.enterCode": "कोड डालें",
        "cart.apply": "लागू करें",
        "cart.billDetails": "बिल विवरण",
        "cart.itemTotal": "आइटम कुल",
        "cart.deliveryFee": "डिलीवरी शुल्क",
        "cart.free": "मुफ्त",
        "cart.toPay": "भुगतान",
        "cart.deliverTo": "डिलीवरी पता",
        "cart.change": "बदलें",
        "cart.checkout": "चेकआउट करें",
        "cart.viewCart": "कार्ट देखें",
        "cart.itemsAdded": "आइटम जोड़े गए",
        "cart.total": "कुल",
        "cart.remove": "हटाएं",
        "cart.savings": "आपकी बचत",
        "cart.taxes": "टैक्स और शुल्क",
        "cart.grandTotal": "कुल योग",
        // Checkout
        "checkout.title": "चेकआउट",
        "checkout.deliveryAddress": "डिलीवरी पता",
        "checkout.paymentMethod": "भुगतान का तरीका",
        "checkout.cashOnDelivery": "कैश ऑन डिलीवरी",
        "checkout.upiPayment": "UPI भुगतान",
        "checkout.cardPayment": "क्रेडिट/डेबिट कार्ड",
        "checkout.walletPayment": "वॉलेट",
        "checkout.placeOrder": "ऑर्डर करें",
        "checkout.orderSummary": "ऑर्डर सारांश",
        "checkout.deliveryTime": "डिलीवरी समय",
        "checkout.payOnDelivery": "डिलीवरी पर भुगतान",
        "checkout.payNow": "अभी भुगतान करें",
        "checkout.addInstructions": "डिलीवरी निर्देश जोड़ें",
        "checkout.contactless": "संपर्क रहित डिलीवरी",
        // Orders
        "orders.title": "मेरे ऑर्डर",
        "orders.all": "सभी",
        "orders.active": "चालू",
        "orders.completed": "पूर्ण",
        "orders.noOrders": "अभी तक कोई ऑर्डर नहीं",
        "orders.startShopping": "अपने ऑर्डर यहां देखने के लिए खरीदारी शुरू करें",
        "orders.delivered": "डिलीवर हो गया",
        "orders.onTheWay": "रास्ते में",
        "orders.preparing": "तैयारी हो रही है",
        "orders.reorder": "फिर से ऑर्डर करें",
        "orders.deliveredIn": "डिलीवर हुआ",
        "orders.orderId": "ऑर्डर आईडी",
        "orders.placedOn": "ऑर्डर की तारीख",
        "orders.viewDetails": "विवरण देखें",
        "orders.trackOrder": "ऑर्डर ट्रैक करें",
        "orders.cancelOrder": "ऑर्डर रद्द करें",
        "orders.returnOrder": "वापसी करें",
        "orders.orderDetails": "ऑर्डर विवरण",
        "orders.itemsOrdered": "ऑर्डर किए गए आइटम",
        "orders.noActiveOrders": "कोई चालू ऑर्डर नहीं",
        "orders.noCompletedOrders": "कोई पूर्ण ऑर्डर नहीं",
        // Notifications
        "notifications.title": "सूचनाएं",
        "notifications.empty": "कोई सूचना नहीं",
        "notifications.emptySubtitle": "आप अप टू डेट हैं!",
        "notifications.markAllRead": "सभी को पढ़ा हुआ चिह्नित करें",
        "notifications.today": "आज",
        "notifications.yesterday": "कल",
        "notifications.earlier": "पहले",
        "notifications.orderUpdate": "ऑर्डर अपडेट",
        "notifications.promotion": "प्रमोशन",
        "notifications.newArrival": "नया आगमन",
        // Shops
        "shops.title": "आस-पास की दुकानें",
        "shops.all": "सभी",
        "shops.openNow": "अभी खुला",
        "shops.verified": "वेरिफाइड",
        "shops.nearest": "सबसे पास",
        "shops.highRated": "उच्च रेटिंग",
        "shops.fastDelivery": "तेज़ डिलीवरी",
        "shops.lowestPrice": "सबसे कम कीमत",
        "shops.closed": "बंद",
        "shops.open": "खुला",
        "shops.minOrder": "न्यूनतम ऑर्डर",
        "shops.delivery": "डिलीवरी",
        "shops.rating": "रेटिंग",
        "shops.reviews": "समीक्षाएं",
        "shops.viewShop": "दुकान देखें",
        "shops.allCategories": "सभी श्रेणियां",
        "shops.searchProducts": "उत्पाद खोजें",
        "shops.highestRated": "सर्वोच्च रेटिंग",
        "shops.fastestDelivery": "सबसे तेज़ डिलीवरी",
        "shops.lowestPriceSort": "सबसे कम कीमत",
        // Auth
        "auth.welcomeBack": "वापस स्वागत है",
        "auth.loginSubtitle": "मिनटों में किराने का सामान पाने के लिए लॉगिन करें",
        "auth.phone": "फोन",
        "auth.email": "ईमेल",
        "auth.enterPhone": "10 अंकों का नंबर डालें",
        "auth.enterEmail": "अपना ईमेल डालें",
        "auth.enterPassword": "अपना पासवर्ड डालें",
        "auth.getOtp": "OTP प्राप्त करें",
        "auth.sendOtp": "OTP भेजें",
        "auth.or": "या",
        "auth.orContinueWith": "या जारी रखें",
        "auth.continueWithGoogle": "Google के साथ जारी रखें",
        "auth.verifyAndLogin": "सत्यापित करें और लॉगिन करें",
        "auth.changeNumber": "नंबर बदलें",
        "auth.noAccount": "खाता नहीं है?",
        "auth.signUp": "साइन अप करें",
        "auth.hasAccount": "पहले से खाता है?",
        "auth.login": "लॉगिन करें",
        "auth.forgotPassword": "पासवर्ड भूल गए?",
        "auth.createAccount": "खाता बनाएं",
        "auth.joinUs": "सामान से जुड़ें",
        "auth.signupSubtitle": "मिनटों में किराने का सामान पाने के लिए साइन अप करें",
        "auth.fullName": "पूरा नाम",
        "auth.enterName": "अपना पूरा नाम डालें",
        "auth.password": "पासवर्ड",
        "auth.confirmPassword": "पासवर्ड की पुष्टि करें",
        "auth.agreeToTerms": "मैं सहमत हूं",
        "auth.termsOfService": "सेवा की शर्तें",
        "auth.and": "और",
        "auth.privacyPolicy": "गोपनीयता नीति",
        "auth.verifyOtp": "OTP सत्यापित करें",
        "auth.otpSent": "OTP भेजा गया",
        "auth.resendOtp": "OTP पुनः भेजें",
        "auth.didntReceive": "कोड नहीं मिला?",
        "auth.resetPassword": "पासवर्ड रीसेट करें",
        "auth.resetSubtitle": "रीसेट निर्देश प्राप्त करने के लिए अपना ईमेल डालें",
        "auth.sendResetLink": "रीसेट लिंक भेजें",
        "auth.backToLogin": "लॉगिन पर वापस जाएं",
        "auth.trustedBy": "50,000+ उपयोगकर्ताओं का भरोसा",
        // Address
        "address.selectAddress": "डिलीवरी पता चुनें",
        "address.savedAddresses": "सेव किए गए पते",
        "address.addNew": "नया पता जोड़ें",
        "address.useCurrentLocation": "वर्तमान स्थान का उपयोग करें",
        "address.detecting": "स्थान पता लगा रहे हैं...",
        "address.home": "घर",
        "address.work": "कार्यालय",
        "address.other": "अन्य",
        "address.setAsDefault": "डिफ़ॉल्ट के रूप में सेट करें",
        "address.edit": "संपादित करें",
        "address.delete": "हटाएं",
        // Hero Banner
        "hero.freshVegetables": "ताज़ी सब्जियां",
        "hero.farmToTable": "खेत से सीधे आपकी थाली में",
        "hero.shopNow": "अभी खरीदें",
        "hero.dailyEssentials": "दैनिक ज़रूरतें",
        "hero.milkBreadEggs": "दूध, ब्रेड और अंडे",
        "hero.orderNow": "अभी ऑर्डर करें",
        "hero.freshFruits": "ताज़े फल",
        "hero.seasonalDelights": "मौसमी फलों का आनंद",
        "hero.explore": "देखें",
        // Search
        "search.placeholder": "उत्पाद, दुकानें खोजें...",
        "search.recent": "हाल की खोज",
        "search.popular": "लोकप्रिय खोज",
        "search.noResults": "कोई परिणाम नहीं मिला",
        "search.tryDifferent": "कोई अलग शब्द खोजें",
        // Misc
        "misc.language": "भाषा",
        "misc.english": "English",
        "misc.hindi": "हिंदी",
        "misc.marathi": "मराठी",
        "misc.loading": "लोड हो रहा है...",
        "misc.error": "कुछ गलत हो गया",
        "misc.retry": "पुनः प्रयास करें",
        "misc.cancel": "रद्द करें",
        "misc.save": "सेव करें",
        "misc.confirm": "पुष्टि करें",
        "misc.close": "बंद करें",
        "misc.back": "वापस",
        "misc.next": "अगला",
        "misc.done": "हो गया",
        "misc.viewAll": "सभी देखें",
        "misc.showMore": "और दिखाएं",
        "misc.showLess": "कम दिखाएं",
        // Terms & Privacy
        "terms.title": "सेवा की शर्तें",
        "privacy.title": "गोपनीयता नीति",
        "terms.lastUpdated": "अंतिम अपडेट",
        "terms.acceptance": "शर्तों की स्वीकृति",
        "terms.services": "हमारी सेवाएं",
        "terms.userAccount": "उपयोगकर्ता खाता",
        "terms.ordering": "ऑर्डर और डिलीवरी",
        "terms.payments": "भुगतान",
        "terms.cancellation": "रद्दीकरण और रिफंड",
        "privacy.infoCollect": "हम कौन सी जानकारी एकत्र करते हैं",
        "privacy.howWeUse": "हम आपकी जानकारी का उपयोग कैसे करते हैं",
        "privacy.sharing": "जानकारी साझाकरण",
        "privacy.security": "डेटा सुरक्षा",
        "privacy.rights": "आपके अधिकार",
        "privacy.contact": "संपर्क करें",
        // Promo
        "promo.freeDelivery": "मुफ्त डिलीवरी",
        "promo.onFirstOrder": "पहले ऑर्डर पर",
        "promo.freshProduce": "ताज़ा उत्पाद",
        "promo.directFromFarms": "सीधे खेतों से",
        "promo.fastDelivery": "तेज़ डिलीवरी",
        "promo.in10Minutes": "10 मिनट में"
    },
    mr: {
        // Header
        "header.deliveryIn": "डिलिव्हरी मध्ये",
        "header.min": "मिनिटे",
        "header.deliverTo": "डिलिव्हरी पत्ता",
        "header.search": "शोधा",
        "header.login": "लॉगिन",
        "header.cart": "कार्ट",
        "header.notifications": "सूचना",
        "header.orders": "माझे ऑर्डर",
        "header.signup": "साइन अप",
        "header.home": "होम",
        // Home
        "home.shopAll": "सर्व खरेदी करा",
        "home.seeAll": "सर्व पहा",
        "home.freshDrops": "ताजे उत्पादने",
        "home.nearbyShops": "जवळच्या दुकाने",
        "home.categories": "श्रेणीनुसार खरेदी करा",
        "home.smartRestock": "स्मार्ट रीस्टॉक",
        "home.basedOnHistory": "तुमच्या खरेदीच्या आधारावर",
        "home.quickReorder": "तुमच्या गरजा पटकन मागवा",
        // Categories
        "category.fruitsVegetables": "फळे आणि भाज्या",
        "category.dairy": "दुग्धजन्य आणि अंडी",
        "category.bakery": "बेकरी",
        "category.beverages": "पेये",
        "category.snacks": "स्नॅक्स",
        "category.groceryStaples": "किराणा माल",
        "category.personalCare": "वैयक्तिक काळजी",
        "category.household": "घरगुती सामान",
        "category.babycare": "बेबी केअर",
        "category.petSupplies": "पाळीव प्राणी सामान",
        "category.filter": "फिल्टर",
        "category.sortBy": "क्रमवारी",
        "category.price": "किंमत",
        "category.rating": "रेटिंग",
        "category.productsAvailable": "उत्पादने उपलब्ध",
        "category.clearAll": "सर्व साफ करा",
        "category.applyFilters": "फिल्टर लागू करा",
        "category.priceRange": "किंमत श्रेणी",
        "category.minRating": "किमान रेटिंग",
        "category.stars": "तारे",
        "category.andAbove": "आणि वर",
        "category.lowToHigh": "कमी ते जास्त",
        "category.highToLow": "जास्त ते कमी",
        "category.newest": "नवीनतम प्रथम",
        "category.popularity": "लोकप्रियता",
        // Products
        "product.add": "जोडा",
        "product.fresh": "ताजे",
        "product.stocked": "स्टॉक मध्ये",
        "product.mins": "मिनिटे",
        "product.off": "सूट",
        "product.outOfStock": "स्टॉक मध्ये नाही",
        "product.inStock": "स्टॉक मध्ये",
        "product.quantity": "प्रमाण",
        // Cart
        "cart.title": "तुमची कार्ट",
        "cart.items": "आयटम",
        "cart.empty": "तुमची कार्ट रिकामी आहे",
        "cart.addItems": "सुरू करण्यासाठी आयटम जोडा",
        "cart.startShopping": "खरेदी सुरू करा",
        "cart.freeDelivery": "मोफत डिलिव्हरी ऑर्डरवर",
        "cart.addMore": "मोफत डिलिव्हरीसाठी अधिक जोडा",
        "cart.deliveryIn": "डिलिव्हरी मध्ये",
        "cart.promoCode": "प्रोमो कोड लावा",
        "cart.enterCode": "कोड टाका",
        "cart.apply": "लागू करा",
        "cart.billDetails": "बिल तपशील",
        "cart.itemTotal": "आयटम एकूण",
        "cart.deliveryFee": "डिलिव्हरी शुल्क",
        "cart.free": "मोफत",
        "cart.toPay": "भरणे",
        "cart.deliverTo": "डिलिव्हरी पत्ता",
        "cart.change": "बदला",
        "cart.checkout": "चेकआउट करा",
        "cart.viewCart": "कार्ट पहा",
        "cart.itemsAdded": "आयटम जोडले",
        "cart.total": "एकूण",
        "cart.remove": "काढा",
        "cart.savings": "तुमची बचत",
        "cart.taxes": "कर आणि शुल्क",
        "cart.grandTotal": "एकूण बेरीज",
        // Checkout
        "checkout.title": "चेकआउट",
        "checkout.deliveryAddress": "डिलिव्हरी पत्ता",
        "checkout.paymentMethod": "पेमेंट पद्धत",
        "checkout.cashOnDelivery": "कॅश ऑन डिलिव्हरी",
        "checkout.upiPayment": "UPI पेमेंट",
        "checkout.cardPayment": "क्रेडिट/डेबिट कार्ड",
        "checkout.walletPayment": "वॉलेट",
        "checkout.placeOrder": "ऑर्डर करा",
        "checkout.orderSummary": "ऑर्डर सारांश",
        "checkout.deliveryTime": "डिलिव्हरी वेळ",
        "checkout.payOnDelivery": "डिलिव्हरीवर पेमेंट",
        "checkout.payNow": "आता पेमेंट करा",
        "checkout.addInstructions": "डिलिव्हरी सूचना जोडा",
        "checkout.contactless": "संपर्करहित डिलिव्हरी",
        // Orders
        "orders.title": "माझे ऑर्डर",
        "orders.all": "सर्व",
        "orders.active": "सक्रिय",
        "orders.completed": "पूर्ण",
        "orders.noOrders": "अद्याप ऑर्डर नाहीत",
        "orders.startShopping": "तुमचे ऑर्डर येथे पाहण्यासाठी खरेदी सुरू करा",
        "orders.delivered": "डिलिव्हर झाले",
        "orders.onTheWay": "वाटेवर",
        "orders.preparing": "तयारी सुरू",
        "orders.reorder": "पुन्हा ऑर्डर करा",
        "orders.deliveredIn": "डिलिव्हर झाले",
        "orders.orderId": "ऑर्डर आयडी",
        "orders.placedOn": "ऑर्डरची तारीख",
        "orders.viewDetails": "तपशील पहा",
        "orders.trackOrder": "ऑर्डर ट्रॅक करा",
        "orders.cancelOrder": "ऑर्डर रद्द करा",
        "orders.returnOrder": "परत करा",
        "orders.orderDetails": "ऑर्डर तपशील",
        "orders.itemsOrdered": "ऑर्डर केलेले आयटम",
        "orders.noActiveOrders": "सक्रिय ऑर्डर नाहीत",
        "orders.noCompletedOrders": "पूर्ण ऑर्डर नाहीत",
        // Notifications
        "notifications.title": "सूचना",
        "notifications.empty": "सूचना नाहीत",
        "notifications.emptySubtitle": "तुम्ही अप टू डेट आहात!",
        "notifications.markAllRead": "सर्व वाचले म्हणून चिन्हांकित करा",
        "notifications.today": "आज",
        "notifications.yesterday": "काल",
        "notifications.earlier": "आधी",
        "notifications.orderUpdate": "ऑर्डर अपडेट",
        "notifications.promotion": "प्रमोशन",
        "notifications.newArrival": "नवीन आगमन",
        // Shops
        "shops.title": "जवळच्या दुकाने",
        "shops.all": "सर्व",
        "shops.openNow": "आता उघडे",
        "shops.verified": "वेरिफाइड",
        "shops.nearest": "सर्वात जवळ",
        "shops.highRated": "उच्च रेटिंग",
        "shops.fastDelivery": "जलद डिलिव्हरी",
        "shops.lowestPrice": "सर्वात कमी किंमत",
        "shops.closed": "बंद",
        "shops.open": "उघडे",
        "shops.minOrder": "किमान ऑर्डर",
        "shops.delivery": "डिलिव्हरी",
        "shops.rating": "रेटिंग",
        "shops.reviews": "पुनरावलोकने",
        "shops.viewShop": "दुकान पहा",
        "shops.allCategories": "सर्व श्रेण्या",
        "shops.searchProducts": "उत्पादने शोधा",
        "shops.highestRated": "सर्वोच्च रेटिंग",
        "shops.fastestDelivery": "सर्वात जलद डिलिव्हरी",
        "shops.lowestPriceSort": "सर्वात कमी किंमत",
        // Auth
        "auth.welcomeBack": "पुन्हा स्वागत",
        "auth.loginSubtitle": "मिनिटांमध्ये किराणा मिळवण्यासाठी लॉगिन करा",
        "auth.phone": "फोन",
        "auth.email": "ईमेल",
        "auth.enterPhone": "10 अंकी नंबर टाका",
        "auth.enterEmail": "तुमचा ईमेल टाका",
        "auth.enterPassword": "तुमचा पासवर्ड टाका",
        "auth.getOtp": "OTP मिळवा",
        "auth.sendOtp": "OTP पाठवा",
        "auth.or": "किंवा",
        "auth.orContinueWith": "किंवा सुरू ठेवा",
        "auth.continueWithGoogle": "Google सह सुरू ठेवा",
        "auth.verifyAndLogin": "सत्यापित करा आणि लॉगिन करा",
        "auth.changeNumber": "नंबर बदला",
        "auth.noAccount": "खाते नाही?",
        "auth.signUp": "साइन अप करा",
        "auth.hasAccount": "आधीच खाते आहे?",
        "auth.login": "लॉगिन करा",
        "auth.forgotPassword": "पासवर्ड विसरलात?",
        "auth.createAccount": "खाते तयार करा",
        "auth.joinUs": "सामानमध्ये सामील व्हा",
        "auth.signupSubtitle": "मिनिटांमध्ये किराणा मिळवण्यासाठी साइन अप करा",
        "auth.fullName": "पूर्ण नाव",
        "auth.enterName": "तुमचे पूर्ण नाव टाका",
        "auth.password": "पासवर्ड",
        "auth.confirmPassword": "पासवर्ड पुष्टी करा",
        "auth.agreeToTerms": "मी सहमत आहे",
        "auth.termsOfService": "सेवेच्या अटी",
        "auth.and": "आणि",
        "auth.privacyPolicy": "गोपनीयता धोरण",
        "auth.verifyOtp": "OTP सत्यापित करा",
        "auth.otpSent": "OTP पाठवले",
        "auth.resendOtp": "OTP पुन्हा पाठवा",
        "auth.didntReceive": "कोड मिळाला नाही?",
        "auth.resetPassword": "पासवर्ड रीसेट करा",
        "auth.resetSubtitle": "रीसेट सूचना प्राप्त करण्यासाठी तुमचा ईमेल टाका",
        "auth.sendResetLink": "रीसेट लिंक पाठवा",
        "auth.backToLogin": "लॉगिनवर परत जा",
        "auth.trustedBy": "50,000+ वापरकर्त्यांचा विश्वास",
        // Address
        "address.selectAddress": "डिलिव्हरी पत्ता निवडा",
        "address.savedAddresses": "सेव्ह केलेले पत्ते",
        "address.addNew": "नवीन पत्ता जोडा",
        "address.useCurrentLocation": "सध्याचे स्थान वापरा",
        "address.detecting": "स्थान शोधत आहे...",
        "address.home": "घर",
        "address.work": "कार्यालय",
        "address.other": "इतर",
        "address.setAsDefault": "डीफॉल्ट म्हणून सेट करा",
        "address.edit": "संपादित करा",
        "address.delete": "हटवा",
        // Hero Banner
        "hero.freshVegetables": "ताज्या भाज्या",
        "hero.farmToTable": "शेतातून थेट तुमच्या ताटात",
        "hero.shopNow": "आता खरेदी करा",
        "hero.dailyEssentials": "दैनंदिन गरजा",
        "hero.milkBreadEggs": "दूध, ब्रेड आणि अंडी",
        "hero.orderNow": "आता ऑर्डर करा",
        "hero.freshFruits": "ताजी फळे",
        "hero.seasonalDelights": "हंगामी फळांचा आनंद",
        "hero.explore": "पहा",
        // Search
        "search.placeholder": "उत्पादने, दुकाने शोधा...",
        "search.recent": "अलीकडील शोध",
        "search.popular": "लोकप्रिय शोध",
        "search.noResults": "कोणतेही परिणाम सापडले नाहीत",
        "search.tryDifferent": "वेगळा शब्द शोधा",
        // Misc
        "misc.language": "भाषा",
        "misc.english": "English",
        "misc.hindi": "हिंदी",
        "misc.marathi": "मराठी",
        "misc.loading": "लोड होत आहे...",
        "misc.error": "काहीतरी चूक झाली",
        "misc.retry": "पुन्हा प्रयत्न करा",
        "misc.cancel": "रद्द करा",
        "misc.save": "सेव्ह करा",
        "misc.confirm": "पुष्टी करा",
        "misc.close": "बंद करा",
        "misc.back": "मागे",
        "misc.next": "पुढे",
        "misc.done": "झाले",
        "misc.viewAll": "सर्व पहा",
        "misc.showMore": "अधिक दाखवा",
        "misc.showLess": "कमी दाखवा",
        // Terms & Privacy
        "terms.title": "सेवेच्या अटी",
        "privacy.title": "गोपनीयता धोरण",
        "terms.lastUpdated": "शेवटचे अपडेट",
        "terms.acceptance": "अटींची स्वीकृती",
        "terms.services": "आमच्या सेवा",
        "terms.userAccount": "वापरकर्ता खाते",
        "terms.ordering": "ऑर्डर आणि डिलिव्हरी",
        "terms.payments": "पेमेंट",
        "terms.cancellation": "रद्दीकरण आणि रिफंड",
        "privacy.infoCollect": "आम्ही कोणती माहिती गोळा करतो",
        "privacy.howWeUse": "आम्ही तुमची माहिती कशी वापरतो",
        "privacy.sharing": "माहिती शेअरिंग",
        "privacy.security": "डेटा सुरक्षा",
        "privacy.rights": "तुमचे अधिकार",
        "privacy.contact": "संपर्क करा",
        // Promo
        "promo.freeDelivery": "मोफत डिलिव्हरी",
        "promo.onFirstOrder": "पहिल्या ऑर्डरवर",
        "promo.freshProduce": "ताजे उत्पादन",
        "promo.directFromFarms": "थेट शेतातून",
        "promo.fastDelivery": "जलद डिलिव्हरी",
        "promo.in10Minutes": "10 मिनिटांत"
    }
};
function getTranslation(lang, key) {
    return translations[lang][key] || translations.en[key] || key;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Samaan/SamaanCustomer/app/notifications/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotificationsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/lib/language-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/lib/translations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const notifications = [
    {
        id: 1,
        type: "delivery",
        title: "Order Delivered!",
        message: "Your order #ORD-12345 has been delivered successfully.",
        time: "2 mins ago",
        read: false,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        color: "text-green-600",
        bgColor: "bg-green-50"
    },
    {
        id: 2,
        type: "offer",
        title: "Flash Sale Live!",
        message: "Get 30% off on fresh vegetables. Limited time offer!",
        time: "1 hour ago",
        read: false,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"],
        color: "text-primary",
        bgColor: "bg-primary/10"
    },
    {
        id: 3,
        type: "order",
        title: "Order Shipped",
        message: "Your order #ORD-12344 is on the way. Track it now!",
        time: "3 hours ago",
        read: true,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
    {
        id: 4,
        type: "restock",
        title: "Back in Stock!",
        message: "Organic Spinach is back in stock. Order now before it's gone!",
        time: "Yesterday",
        read: true,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        color: "text-purple-600",
        bgColor: "bg-purple-50"
    },
    {
        id: 5,
        type: "reminder",
        title: "Restock Reminder",
        message: "Running low on milk? Time to reorder your daily essentials.",
        time: "2 days ago",
        read: true,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        color: "text-yellow-600",
        bgColor: "bg-yellow-50"
    }
];
function NotificationsPage() {
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTranslation"])(language, key);
    const [notificationList, setNotificationList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(notifications);
    const markAllAsRead = ()=>{
        setNotificationList((prev)=>prev.map((n)=>({
                    ...n,
                    read: true
                })));
    };
    const deleteNotification = (id)=>{
        setNotificationList((prev)=>prev.filter((n)=>n.id !== id));
    };
    const unreadCount = notificationList.filter((n)=>!n.read).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-background via-muted/20 to-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 py-3 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "p-2 hover:bg-muted rounded-xl transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-lg font-bold",
                                            children: t("notifications.title")
                                        }, void 0, false, {
                                            fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: [
                                                unreadCount,
                                                " unread"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: markAllAsRead,
                            className: "text-sm text-primary font-medium hover:underline",
                            children: t("notifications.markAllRead")
                        }, void 0, false, {
                            fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-4xl mx-auto px-4 py-6",
                children: notificationList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                className: "w-12 h-12 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-2",
                            children: t("notifications.empty")
                        }, void 0, false, {
                            fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: t("notifications.emptySubtitle")
                        }, void 0, false, {
                            fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: notificationList.map((notification)=>{
                        const Icon = notification.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative bg-card rounded-2xl border border-border/50 shadow-sm p-4 transition-all hover:shadow-md ${!notification.read ? "border-l-4 border-l-primary" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-2.5 rounded-xl ${notification.bgColor} flex-shrink-0`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: `w-5 h-5 ${notification.color}`
                                            }, void 0, false, {
                                                fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: `font-semibold text-sm ${!notification.read ? "text-foreground" : "text-muted-foreground"}`,
                                                                children: notification.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-muted-foreground mt-0.5",
                                                                children: notification.message
                                                            }, void 0, false, {
                                                                fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground/70 mt-2",
                                                                children: notification.time
                                                            }, void 0, false, {
                                                                fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>deleteNotification(notification.id),
                                                        className: "p-1.5 hover:bg-muted rounded-lg transition-colors flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "w-4 h-4 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                                lineNumber: 130,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 19
                                }, this),
                                !notification.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute top-4 right-12 w-2 h-2 bg-primary rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 42
                                }, this)
                            ]
                        }, notification.id, true, {
                            fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                            lineNumber: 119,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                    lineNumber: 115,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Samaan/SamaanCustomer/app/notifications/page.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(NotificationsPage, "AqWb4Xx/h8MeO8mEJOxQ005SHCs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = NotificationsPage;
var _c;
__turbopack_context__.k.register(_c, "NotificationsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Samaan/SamaanCustomer/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/Samaan/SamaanCustomer/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ArrowLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowLeft", [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
]);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Bell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Bell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Bell", [
    [
        "path",
        {
            d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
            key: "1qo2s2"
        }
    ],
    [
        "path",
        {
            d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
            key: "qgo35s"
        }
    ]
]);
;
 //# sourceMappingURL=bell.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bell",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript)");
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Tag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Tag", [
    [
        "path",
        {
            d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
            key: "vktsd0"
        }
    ],
    [
        "circle",
        {
            cx: "7.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "kqv944"
        }
    ]
]);
;
 //# sourceMappingURL=tag.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript)");
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Truck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Truck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Truck", [
    [
        "path",
        {
            d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
            key: "wrbu53"
        }
    ],
    [
        "path",
        {
            d: "M15 18H9",
            key: "1lyqi6"
        }
    ],
    [
        "path",
        {
            d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
            key: "lysw3i"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "18",
            r: "2",
            key: "332jqn"
        }
    ],
    [
        "circle",
        {
            cx: "7",
            cy: "18",
            r: "2",
            key: "19iecd"
        }
    ]
]);
;
 //# sourceMappingURL=truck.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Truck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript)");
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Clock", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }
    ]
]);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CircleCheck", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
;
 //# sourceMappingURL=circle-check.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)");
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Sparkles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Sparkles", [
    [
        "path",
        {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx"
        }
    ],
    [
        "path",
        {
            d: "M20 3v4",
            key: "1olli1"
        }
    ],
    [
        "path",
        {
            d: "M22 5h-4",
            key: "1gvqau"
        }
    ],
    [
        "path",
        {
            d: "M4 17v2",
            key: "vumght"
        }
    ],
    [
        "path",
        {
            d: "M5 18H3",
            key: "zchphs"
        }
    ]
]);
;
 //# sourceMappingURL=sparkles.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)");
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Samaan_SamaanCustomer_6726752d._.js.map