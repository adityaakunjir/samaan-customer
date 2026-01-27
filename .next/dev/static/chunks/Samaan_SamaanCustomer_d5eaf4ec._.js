(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Samaan/SamaanCustomer/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Samaan/SamaanCustomer/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Samaan/SamaanCustomer/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/Samaan/SamaanCustomer/components/product-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/lib/language-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/lib/translations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/lib/cart-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Demo merchant ID for checkout orders (fallback if not provided)
const DEMO_MERCHANT_ID = "AAAA1111-1111-1111-1111-111111111111";
function ProductCard({ product, variant = "compact" }) {
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTranslation"])(language, key);
    const { addItem, updateQuantity, getItemCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const qty = getItemCount(product.id);
    const handleAdd = ()=>{
        addItem({
            id: product.id,
            name: product.name,
            quantity: product.quantity,
            price: product.price,
            image: product.image,
            weight: product.weight,
            merchantId: product.merchantId || DEMO_MERCHANT_ID,
            productId: product.productId || `PROD-${product.id}-${Date.now()}`
        });
    };
    const handleIncrement = ()=>{
        updateQuantity(product.id, qty + 1);
    };
    const handleDecrement = ()=>{
        updateQuantity(product.id, qty - 1);
    };
    const FreshnessBadge = ({ score })=>{
        const color = score >= 90 ? "text-emerald-600 bg-emerald-50 border-emerald-200" : score >= 70 ? "text-green-600 bg-green-50 border-green-200" : "text-yellow-600 bg-yellow-50 border-yellow-200";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-bold ${color} border shadow-sm`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        score,
                        "% ",
                        t("product.fresh")
                    ]
                }, void 0, true, {
                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    };
    const QtySelector = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1 bg-primary rounded-xl overflow-hidden shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleDecrement,
                    className: "w-8 h-8 flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors active:scale-90",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                    lineNumber: 78,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-6 text-center text-sm font-bold text-primary-foreground",
                    children: qty
                }, void 0, false, {
                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                    lineNumber: 84,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleIncrement,
                    className: "w-8 h-8 flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors active:scale-90",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                    lineNumber: 85,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
            lineNumber: 77,
            columnNumber: 5
        }, this);
    if (variant === "full") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-card rounded-2xl border border-border/50 p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_4px_8px_-4px_rgba(0,0,0,0.04)] transition-all duration-300  hover:shadow-[0_12px_28px_-4px_rgba(0,0,0,0.12),0_8px_16px_-8px_rgba(0,0,0,0.08)]  hover:border-primary/30 hover:-translate-y-1 group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-muted to-muted/50 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: product.image || "/placeholder.svg",
                        alt: product.name,
                        width: 96,
                        height: 96,
                        className: "w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    }, void 0, false, {
                        fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0 min-h-[80px] sm:min-h-[96px] flex flex-col justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-foreground text-[15px] sm:text-[16px] line-clamp-1",
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-2 text-[12px] text-muted-foreground mt-0.5",
                                            children: [
                                                product.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-foreground/70",
                                                    children: product.weight
                                                }, void 0, false, {
                                                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 36
                                                }, this),
                                                product.stockedTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-600",
                                                    children: [
                                                        "• ",
                                                        t("product.stocked"),
                                                        " ",
                                                        product.stockedTime
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                product.freshnessScore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FreshnessBadge, {
                                    score: product.freshnessScore
                                }, void 0, false, {
                                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                                    lineNumber: 126,
                                    columnNumber: 40
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        product.deliveryEta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 text-[12px] text-primary font-semibold mt-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: product.deliveryEta
                                }, void 0, false, {
                                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mt-auto pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-foreground text-[17px] sm:text-[18px]",
                                    children: [
                                        "₹",
                                        product.price
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                qty > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QtySelector, {}, void 0, false, {
                                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAdd,
                                    className: "px-5 py-2 border-2 font-bold rounded-xl text-[13px] sm:text-[14px] transition-all duration-300 ease-out border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg active:scale-95",
                                    children: t("product.add")
                                }, void 0, false, {
                                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, this);
    }
    // Compact variant
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-card rounded-2xl border border-border/50 p-3 min-w-[140px] flex-shrink-0  shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_4px_8px_-4px_rgba(0,0,0,0.04)] transition-all duration-300  hover:shadow-[0_12px_28px_-4px_rgba(0,0,0,0.12),0_8px_16px_-8px_rgba(0,0,0,0.08)]  hover:border-primary/30 hover:-translate-y-2 group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-xl overflow-hidden mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: product.image || "/placeholder.svg",
                        alt: product.name,
                        width: 120,
                        height: 120,
                        className: "h-full object-cover w-full transition-transform duration-500 group-hover:scale-110"
                    }, void 0, false, {
                        fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    product.freshnessScore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2 left-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FreshnessBadge, {
                            score: product.freshnessScore
                        }, void 0, false, {
                            fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-semibold text-foreground text-[14px] truncate",
                children: product.name
            }, void 0, false, {
                fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 text-[12px] text-muted-foreground",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium",
                    children: product.weight || product.quantity
                }, void 0, false, {
                    fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            product.deliveryEta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 text-[11px] text-primary font-semibold mt-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: product.deliveryEta
                    }, void 0, false, {
                        fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                lineNumber: 184,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-foreground text-[15px]",
                        children: [
                            "₹",
                            product.price
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    qty > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QtySelector, {}, void 0, false, {
                        fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAdd,
                        className: "w-8 h-8 rounded-xl flex items-center justify-center  transition-all duration-300 ease-out bg-primary hover:bg-primary/90 hover:scale-110 hover:shadow-lg active:scale-90 shadow-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "w-4 h-4 text-primary-foreground"
                        }, void 0, false, {
                            fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Samaan/SamaanCustomer/components/product-card.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
_s(ProductCard, "VcHYOJfZEWcFe081AA+haSl+odk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Samaan/SamaanCustomer/components/cart-footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartFooter",
    ()=>CartFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/lib/language-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/lib/translations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/lib/cart-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CartFooter() {
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTranslation"])(language, key);
    const { totalItems, totalPrice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [isGlowing, setIsGlowing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [prevItemCount, setPrevItemCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(totalItems);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartFooter.useEffect": ()=>{
            if (totalItems > 0) {
                const timer = setTimeout({
                    "CartFooter.useEffect.timer": ()=>setIsVisible(true)
                }["CartFooter.useEffect.timer"], 100);
                return ({
                    "CartFooter.useEffect": ()=>clearTimeout(timer)
                })["CartFooter.useEffect"];
            } else {
                setIsVisible(false);
            }
        }
    }["CartFooter.useEffect"], [
        totalItems
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartFooter.useEffect": ()=>{
            if (totalItems > prevItemCount) {
                setIsGlowing(true);
                setTimeout({
                    "CartFooter.useEffect": ()=>setIsGlowing(false)
                }["CartFooter.useEffect"], 600);
            }
            setPrevItemCount(totalItems);
        }
    }["CartFooter.useEffect"], [
        totalItems,
        prevItemCount
    ]);
    if (totalItems === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 z-50 transition-all duration-500 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-2xl scale-y-150 -z-10 rounded-3xl"
                }, void 0, false, {
                    fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/cart",
                    className: `relative w-full overflow-hidden block
            bg-gradient-to-r from-primary via-primary to-orange-500
            text-primary-foreground py-4 sm:py-5 px-6 sm:px-8
            rounded-2xl sm:rounded-3xl font-semibold 
            shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5),0_4px_20px_-5px_rgba(249,115,22,0.3)]
            transition-all duration-300 ease-out
            hover:shadow-[0_15px_50px_-10px_rgba(249,115,22,0.6),0_8px_30px_-5px_rgba(249,115,22,0.4)]
            hover:scale-[1.02]
            active:scale-[0.98]
            group
            ${isGlowing ? "ring-4 ring-white/60 shadow-[0_15px_60px_rgba(255,255,255,0.4)]" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                        }, void 0, false, {
                            fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-2xl sm:rounded-3xl"
                        }, void 0, false, {
                            fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 sm:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative bg-white/20 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-inner",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                    className: `w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${isGlowing ? "animate-bounce" : "group-hover:scale-110"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute -top-2 -right-2 min-w-[22px] h-[22px] sm:min-w-[26px] sm:h-[26px]
                    bg-white text-primary text-[11px] sm:text-xs font-bold 
                    rounded-full flex items-center justify-center 
                    shadow-[0_2px_8px_rgba(0,0,0,0.15)]
                    border-2 border-primary/20
                    transition-all duration-300
                    ${isGlowing ? "scale-125 animate-pulse bg-yellow-300" : ""}`,
                                                    children: totalItems
                                                }, void 0, false, {
                                                    fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[15px] sm:text-base font-bold tracking-wide",
                                                    children: t("cart.viewCart")
                                                }, void 0, false, {
                                                    fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] sm:text-xs opacity-80 font-medium",
                                                    children: [
                                                        totalItems,
                                                        " ",
                                                        t("cart.itemsAdded")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 sm:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-end",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] sm:text-xs opacity-70 font-medium",
                                                    children: t("cart.total")
                                                }, void 0, false, {
                                                    fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-lg sm:text-xl font-bold tracking-tight transition-all duration-300 ${isGlowing ? "scale-110" : ""}`,
                                                    children: [
                                                        "₹",
                                                        totalPrice
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg sm:rounded-xl group-hover:bg-white/30 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Samaan/SamaanCustomer/components/cart-footer.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(CartFooter, "YW/FoTQgLAZpIwwkH4H5Vo/4X0s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = CartFooter;
var _c;
__turbopack_context__.k.register(_c, "CartFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/components/product-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$components$2f$cart$2d$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Samaan/SamaanCustomer/components/cart-footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const shopsData = {
    "1": {
        id: 1,
        name: "Sharma Kirana Store",
        logo: "/indian-grocery-store-logo-orange.jpg",
        distance: "0.3 km",
        deliveryTime: "8 mins",
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
        address: "123, Main Road, Near Bus Stand, Pune",
        phone: "+91 98765 43210",
        products: [
            {
                id: 1,
                name: "Amul Taaza Milk",
                quantity: "500ml",
                price: 30,
                image: "/amul-milk-packet-white-background.jpg",
                freshnessScore: 98,
                stockedTime: "15m ago",
                deliveryEta: "8 mins"
            },
            {
                id: 2,
                name: "Brown Bread",
                quantity: "400g",
                price: 45,
                image: "/brown-bread-loaf-white-background.jpg",
                freshnessScore: 95,
                stockedTime: "30m ago",
                deliveryEta: "8 mins"
            },
            {
                id: 3,
                name: "Farm Fresh Eggs",
                quantity: "6 pcs",
                price: 60,
                image: "/farm-eggs-brown-white-background.jpg",
                freshnessScore: 99,
                stockedTime: "10m ago",
                deliveryEta: "8 mins"
            },
            {
                id: 4,
                name: "Amul Butter",
                quantity: "100g",
                price: 55,
                image: "/butter-block-yellow-white-background.jpg",
                freshnessScore: 97,
                stockedTime: "20m ago",
                deliveryEta: "8 mins"
            }
        ]
    },
    "2": {
        id: 2,
        name: "Fresh Mart Express",
        logo: "/fresh-mart-grocery-store-logo-green.jpg",
        distance: "0.5 km",
        deliveryTime: "10 mins",
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
        address: "45, Green Plaza, Sector 12, Pune",
        phone: "+91 98765 43211",
        products: [
            {
                id: 1,
                name: "Local Red Tomato",
                quantity: "1 kg",
                price: 150,
                image: "/fresh-red-tomato-white-background.jpg",
                freshnessScore: 98,
                stockedTime: "20m ago",
                deliveryEta: "10 mins"
            },
            {
                id: 2,
                name: "Green Capsicum",
                quantity: "500g",
                price: 80,
                image: "/green-capsicum-vegetable.jpg",
                freshnessScore: 95,
                stockedTime: "35m ago",
                deliveryEta: "10 mins"
            },
            {
                id: 3,
                name: "Fresh Spinach",
                quantity: "250g",
                price: 40,
                image: "/fresh-spinach-leaves-bundle.jpg",
                freshnessScore: 99,
                stockedTime: "10m ago",
                deliveryEta: "10 mins"
            }
        ]
    }
};
// Default shop data
const defaultShop = {
    id: 0,
    name: "Local Store",
    logo: "/placeholder.svg",
    distance: "1 km",
    deliveryTime: "15 mins",
    rating: 4.0,
    reviewCount: 50,
    isOpen: true,
    tags: [
        "Groceries"
    ],
    isVerified: false,
    discount: null,
    address: "Pune, Maharashtra",
    phone: "+91 00000 00000",
    products: [
        {
            id: 1,
            name: "Product 1",
            quantity: "500g",
            price: 99,
            image: "/assorted-grocery-products.png",
            freshnessScore: 95,
            stockedTime: "20m ago",
            deliveryEta: "15 mins"
        }
    ]
};
function ShopDetailPage({ params }) {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const shop = shopsData[id] || defaultShop;
    const [isFavorite, setIsFavorite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-background via-muted/20 to-background pb-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 py-3 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/shops",
                                    className: "p-2 hover:bg-muted rounded-xl transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-lg font-bold",
                                            children: shop.name
                                        }, void 0, false, {
                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: [
                                                shop.products.length,
                                                " products"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsFavorite(!isFavorite),
                                    className: "p-2 hover:bg-muted rounded-xl transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: `w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-2 hover:bg-muted rounded-xl transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-4xl mx-auto px-4 py-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card rounded-2xl border border-border/50 shadow-sm p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-20 bg-muted/50 rounded-xl overflow-hidden flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: shop.logo || "/placeholder.svg",
                                            alt: shop.name,
                                            width: 80,
                                            height: 80,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-bold text-lg",
                                                        children: shop.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 17
                                                    }, this),
                                                    shop.isVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                                        className: "w-5 h-5 text-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 mt-2 text-sm text-muted-foreground flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: "w-4 h-4 text-yellow-500 fill-yellow-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 19
                                                            }, this),
                                                            shop.rating,
                                                            " (",
                                                            shop.reviewCount,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 19
                                                            }, this),
                                                            shop.distance
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 19
                                                            }, this),
                                                            shop.deliveryTime
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this),
                                            shop.discount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1 mt-2 px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 19
                                                    }, this),
                                                    shop.discount
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 pt-4 border-t border-border/50 flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: "Address"
                                            }, void 0, false, {
                                                fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                children: shop.address
                                            }, void 0, false, {
                                                fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `tel:${shop.phone}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            className: "rounded-full gap-2 bg-transparent",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, this),
                                                "Call"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-lg mb-4",
                                children: "Products"
                            }, void 0, false, {
                                fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
                                children: shop.products.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            animationDelay: `${index * 50}ms`
                                        },
                                        className: "animate-in fade-in slide-in-from-bottom-4 duration-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                                            product: product,
                                            variant: "compact"
                                        }, void 0, false, {
                                            fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this)
                                    }, product.id, false, {
                                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Samaan$2f$SamaanCustomer$2f$components$2f$cart$2d$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartFooter"], {}, void 0, false, {
                fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Samaan/SamaanCustomer/app/shops/[id]/page.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_s(ShopDetailPage, "k950Z1JpPS3WYtE75BCawi6VGEM=");
_c = ShopDetailPage;
var _c;
__turbopack_context__.k.register(_c, "ShopDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Samaan_SamaanCustomer_d5eaf4ec._.js.map