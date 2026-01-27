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
"[project]/Samaan/SamaanCustomer/app/shops/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
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
;
const allShops = [
    {
        id: 1,
        name: "Sharma Kirana Store",
        logo: "/indian-grocery-store-logo-orange.jpg",
        distance: 0.3,
        deliveryTime: 8,
        rating: 4.5,
        reviewCount: 128,
        isOpen: true,
        tags: [
            "Groceries",
            "Dairy",
            "Snacks"
        ],
        isVerified: true,
        discount: "10% OFF",
        minOrder: 99
    },
    {
        id: 2,
        name: "Fresh Mart Express",
        logo: "/fresh-mart-grocery-store-logo-green.jpg",
        distance: 0.5,
        deliveryTime: 10,
        rating: 4.8,
        reviewCount: 256,
        isOpen: true,
        tags: [
            "Vegetables",
            "Fruits",
            "Organic"
        ],
        isVerified: true,
        discount: "Free Delivery",
        minOrder: 149
    },
    {
        id: 3,
        name: "Gupta General Store",
        logo: "/general-store-logo-blue.jpg",
        distance: 0.7,
        deliveryTime: 12,
        rating: 4.2,
        reviewCount: 89,
        isOpen: true,
        tags: [
            "Essentials",
            "Household",
            "Personal Care"
        ],
        isVerified: false,
        discount: null,
        minOrder: 49
    },
    {
        id: 4,
        name: "Daily Needs Corner",
        logo: "/daily-needs-store-logo-yellow.jpg",
        distance: 1.0,
        deliveryTime: 15,
        rating: 4.6,
        reviewCount: 178,
        isOpen: false,
        tags: [
            "Groceries",
            "Bakery",
            "Beverages"
        ],
        isVerified: true,
        discount: null,
        minOrder: 99
    },
    {
        id: 5,
        name: "Super Saver Mart",
        logo: "/super-saver-mart-logo-red.jpg",
        distance: 1.2,
        deliveryTime: 18,
        rating: 4.4,
        reviewCount: 203,
        isOpen: true,
        tags: [
            "Bulk",
            "Wholesale",
            "Groceries"
        ],
        isVerified: true,
        discount: "5% Cashback",
        minOrder: 199
    },
    {
        id: 6,
        name: "Green Basket",
        logo: "/organic-store-logo-green.jpg",
        distance: 1.5,
        deliveryTime: 20,
        rating: 4.7,
        reviewCount: 156,
        isOpen: true,
        tags: [
            "Organic",
            "Fresh",
            "Healthy"
        ],
        isVerified: true,
        discount: "20% on Organic",
        minOrder: 249
    }
];
function ShopsPage() {
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTranslation"])(language, key);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("nearest");
    const filteredAndSortedShops = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ShopsPage.useMemo[filteredAndSortedShops]": ()=>{
            let shops = allShops.filter({
                "ShopsPage.useMemo[filteredAndSortedShops].shops": (shop)=>{
                    const matchesSearch = shop.name.toLowerCase().includes(searchQuery.toLowerCase());
                    const matchesFilter = filter === "all" || filter === "open" && shop.isOpen || filter === "verified" && shop.isVerified;
                    return matchesSearch && matchesFilter;
                }
            }["ShopsPage.useMemo[filteredAndSortedShops].shops"]);
            switch(sortBy){
                case "nearest":
                    shops = [
                        ...shops
                    ].sort({
                        "ShopsPage.useMemo[filteredAndSortedShops]": (a, b)=>a.distance - b.distance
                    }["ShopsPage.useMemo[filteredAndSortedShops]"]);
                    break;
                case "rating":
                    shops = [
                        ...shops
                    ].sort({
                        "ShopsPage.useMemo[filteredAndSortedShops]": (a, b)=>b.rating - a.rating
                    }["ShopsPage.useMemo[filteredAndSortedShops]"]);
                    break;
                case "fastest":
                    shops = [
                        ...shops
                    ].sort({
                        "ShopsPage.useMemo[filteredAndSortedShops]": (a, b)=>a.deliveryTime - b.deliveryTime
                    }["ShopsPage.useMemo[filteredAndSortedShops]"]);
                    break;
                case "price":
                    shops = [
                        ...shops
                    ].sort({
                        "ShopsPage.useMemo[filteredAndSortedShops]": (a, b)=>a.minOrder - b.minOrder
                    }["ShopsPage.useMemo[filteredAndSortedShops]"]);
                    break;
            }
            return shops;
        }
    }["ShopsPage.useMemo[filteredAndSortedShops]"], [
        searchQuery,
        filter,
        sortBy
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-background via-muted/20 to-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 py-3 flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "p-2 hover:bg-muted rounded-xl transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-lg font-bold",
                                    children: t("shops.title")
                                }, void 0, false, {
                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: [
                                        filteredAndSortedShops.length,
                                        " shops"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-[57px] z-40 bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: t("shops.searchProducts"),
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "w-full h-11 pl-11 pr-4 rounded-xl border border-border bg-muted/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 overflow-x-auto pb-1 scrollbar-hide",
                            children: [
                                {
                                    id: "all",
                                    label: t("shops.all")
                                },
                                {
                                    id: "open",
                                    label: t("shops.openNow")
                                },
                                {
                                    id: "verified",
                                    label: t("shops.verified")
                                }
                            ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFilter(f.id),
                                    className: `px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${filter === f.id ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80 text-foreground"}`,
                                    children: f.label
                                }, f.id, false, {
                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 text-xs text-muted-foreground flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                t("category.sortBy"),
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                [
                                    {
                                        id: "nearest",
                                        label: t("shops.nearest"),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
                                    },
                                    {
                                        id: "rating",
                                        label: t("shops.highRated"),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
                                    },
                                    {
                                        id: "fastest",
                                        label: t("shops.fastDelivery"),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
                                    },
                                    {
                                        id: "price",
                                        label: t("shops.lowestPrice"),
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
                                    }
                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSortBy(s.id),
                                        className: `px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 flex items-center gap-1.5 ${sortBy === s.id ? "bg-primary/10 text-primary border border-primary/30" : "bg-muted/50 hover:bg-muted text-muted-foreground border border-transparent"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this),
                                            s.label
                                        ]
                                    }, s.id, true, {
                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-4xl mx-auto px-4 py-6 space-y-4",
                children: filteredAndSortedShops.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: t("search.noResults")
                    }, void 0, false, {
                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                        lineNumber: 212,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                    lineNumber: 211,
                    columnNumber: 11
                }, this) : filteredAndSortedShops.map((shop, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/shops/${shop.id}`,
                        style: {
                            animationDelay: `${index * 50}ms`
                        },
                        className: "block animate-in fade-in slide-in-from-bottom-4 duration-500 bg-card rounded-2xl border border-border/50 shadow-sm p-4 hover:shadow-md hover:border-primary/30 transition-all group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-muted/50 rounded-xl overflow-hidden flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: shop.logo || "/placeholder.svg",
                                        alt: shop.name,
                                        width: 64,
                                        height: 64,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold truncate group-hover:text-primary transition-colors",
                                                                    children: shop.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 25
                                                                }, this),
                                                                shop.isVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                                                    className: "w-4 h-4 text-blue-500 flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 mt-1 text-xs text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                            className: "w-3.5 h-3.5 text-yellow-500 fill-yellow-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                                            lineNumber: 243,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        shop.rating
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                                    lineNumber: 242,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                            className: "w-3.5 h-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                                            lineNumber: 247,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        shop.distance,
                                                                        " km"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                            className: "w-3.5 h-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                                            lineNumber: 251,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        shop.deliveryTime,
                                                                        " ",
                                                                        t("product.mins")
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `px-2 py-1 rounded-full text-[10px] font-medium ${shop.isOpen ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`,
                                                            children: shop.isOpen ? t("shops.open") : t("shops.closed")
                                                        }, void 0, false, {
                                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-3 flex-wrap",
                                            children: [
                                                shop.discount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 25
                                                        }, this),
                                                        shop.discount
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-1 bg-muted text-muted-foreground text-[10px] rounded-full",
                                                    children: [
                                                        t("shops.minOrder"),
                                                        " ₹",
                                                        shop.minOrder
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 21
                                                }, this),
                                                shop.tags.slice(0, 2).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-1 bg-muted text-muted-foreground text-[10px] rounded-full",
                                                        children: tag
                                                    }, tag, false, {
                                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                            lineNumber: 267,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                                    lineNumber: 232,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                            lineNumber: 222,
                            columnNumber: 15
                        }, this)
                    }, shop.id, false, {
                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                        lineNumber: 216,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Samaan/SamaanCustomer/app/shops/page.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_s(ShopsPage, "Qq0jySMQSYn4JHnOQJ2NyTZmqF4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ShopsPage;
var _c;
__turbopack_context__.k.register(_c, "ShopsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Samaan_SamaanCustomer_c8f1cf86._.js.map