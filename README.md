# ShopHub - E-Commerce Shopping Application

A modern, fully-featured e-commerce web application built with Next.js 13, React, TypeScript, Tailwind CSS, and Shadcn/UI components. Browse products, manage your shopping cart, and enjoy a seamless shopping experience with beautiful dark/light theme support.

**Live Demo:** [https://shophub-a2z.vercel.app](https://shophub-a2z.vercel.app)

## Features

### 🛍️ Product Management
- **Product Catalog**: Browse a comprehensive list of products fetched from the FakeStore API
- **Search Functionality**: Search products by name and description in real-time
- **Category Filtering**: Filter products by categories (Electronics, Clothing, Books, Jewelry)
- **Advanced Sorting**: Sort by price (ascending/descending) and customer ratings
- **Product Details**: View detailed information including images, descriptions, ratings, and reviews
- **Responsive Grid**: Beautiful product cards with hover effects and smooth transitions

### 🛒 Shopping Cart
- **Add to Cart**: Add products to your cart with a single click
- **Quantity Management**: Increase or decrease product quantities
- **Remove Items**: Remove individual items from your cart
- **Clear Cart**: Empty your entire cart at once
- **Cart Persistence**: Your cart data is saved in localStorage and persists across sessions
- **Order Summary**: View subtotal, shipping costs, and total with real-time calculations
- **Free Shipping**: Automatic free shipping on orders over $50
- **Visual Feedback**: Toast notifications when items are added to cart

### 🎨 Theme Switching
- **Light Mode**: Clean and bright interface for daytime use
- **Dark Mode**: Easy on the eyes for nighttime browsing
- **System Preference**: Automatically matches your device's theme preference
- **Smooth Transitions**: Elegant theme switching without page reloads

### 📊 Dashboard
- **Statistics Overview**: Display total products, categories, cart items, and cart value
- **Quick Actions**: Easy navigation to products and cart
- **Category Quick Links**: Direct access to browse specific product categories
- **Real-time Updates**: Live cart status on the dashboard

### 🔄 Navigation
- **Sticky Header**: Navigation bar stays visible while scrolling
- **Breadcrumb Navigation**: Easy navigation through product pages
- **Cart Badge**: Real-time cart item count display in the navigation bar
- **Responsive Design**: Fully functional on mobile, tablet, and desktop devices

### ⏳ Checkout (Coming Soon)
Currently, the checkout process is in development. You can:
- Review your complete order summary
- See all items and quantities
- Calculate shipping fees
- View the total amount
- **Status**: Checkout functionality will be available in the next update

## Tech Stack

### Frontend
- **Framework**: [Next.js 13](https://nextjs.org/) - React meta-framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [Shadcn/UI](https://ui.shadcn.com/) - High-quality React components
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes) - Theme switching utility
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Form Management**: [React Hook Form](https://react-hook-form.com/) - Efficient form handling
- **API Integration**: FakeStore API - Mock e-commerce data

### Development
- **Package Manager**: npm
- **Code Quality**: ESLint
- **Type Checking**: TypeScript compiler

## Project Structure

```
shophub/
├── app/
│   ├── page.tsx                # Root page (redirects to dashboard)
│   ├── layout.tsx              # Root layout with providers
│   ├── globals.css             # Global styles
│   ├── dashboard/
│   │   └── page.tsx            # Dashboard page
│   ├── products/
│   │   ├── page.tsx            # Products list page
│   │   └── [id]/
│   │       └── page.tsx        # Product detail page
│   └── cart/
│       └── page.tsx            # Shopping cart page
├── components/
│   ├── navigation.tsx          # Main navigation bar
│   ├── theme-provider.tsx      # Theme provider wrapper
│   ├── theme-toggle.tsx        # Theme toggle button
│   └── ui/                     # Shadcn/UI components
├── contexts/
│   └── cart-context.tsx        # Cart state management
├── hooks/
│   └── use-toast.ts            # Toast notifications hook
├── lib/
│   └── utils.ts                # Utility functions
└── package.json                # Dependencies and scripts
```

## Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn or pnpm package manager

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/ashishvora1997/shop-hub.git
cd shop-hub
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
pnpm run dev
```

The application will be available at `http://localhost:3000`

4. **Build for production**
```bash
pnpm run build
pnpm start
```

## Usage Guide

### Browsing Products
1. Click on "Products" in the navigation bar
2. Use the search bar to find specific products
3. Filter by category using the category dropdown
4. Sort by price or rating using the sort dropdown
5. Click on any product card to view detailed information

### Adding Items to Cart
1. Click "View Details" on any product card, OR
2. Go to the product detail page and click "Add to Cart"
3. You'll see a confirmation toast notification
4. The cart badge in the navigation will update with the new count

### Managing Your Cart
1. Click the shopping cart icon in the navigation bar
2. Adjust quantities using the +/- buttons
3. Remove items by clicking the "Remove" button
4. Clear entire cart with the "Clear Cart" button
5. View your order summary on the right sidebar

### Switching Themes
1. Click the theme toggle icon (Sun/Moon) in the navigation bar
2. Choose from Light, Dark, or System preference
3. The theme will update immediately across the application

### Checkout
1. Review all items in your shopping cart
2. View the order summary with itemized costs
3. Proceed to checkout (feature coming soon)

## API Integration

### Data Source
This application uses the [FakeStore API](https://fakestoreapi.com/) - a free online REST API that provides mock e-commerce data.

### Endpoints Used
- `GET /products` - Fetch all products
- `GET /products/{id}` - Fetch single product details
- `GET /products/categories` - Fetch all categories

## Features in Development

### Upcoming Features
- ✅ **Checkout Process** - Complete payment flow integration
- ✅ **Order History** - View previously placed orders
- ✅ **User Accounts** - Create and manage user profiles
- ✅ **Wishlist** - Save favorite products for later
- ✅ **Product Reviews** - Add and view customer reviews
- ✅ **Advanced Filters** - Price range, brand, availability
- ✅ **Recommendations** - Personalized product suggestions
- ✅ **Coupon Codes** - Apply discount codes

## Responsive Design

ShopHub is fully responsive and optimized for all devices:

| Device | Optimization |
|--------|--------------|
| **Mobile** | Touch-friendly buttons, optimized images, stacked layout |
| **Tablet** | Two-column layouts, larger touch targets |
| **Desktop** | Multi-column layouts, hover effects, full functionality |

## Performance Optimizations

- **Image Optimization**: Lazy loading and responsive images
- **Code Splitting**: Automatic route-based code splitting with Next.js
- **Caching**: localStorage for cart persistence
- **CSS-in-JS**: Tailwind CSS for minimal CSS payload
- **Bundle Size**: Optimized with tree-shaking and code splitting

## Local Storage

ShopHub uses browser's localStorage to persist:
- **Shopping Cart**: Cart items and quantities persist across browser sessions
- **Theme Preference**: Your selected theme preference is saved locally

## Accessibility

The application follows web accessibility best practices:
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Sufficient color contrast ratios
- Screen reader friendly

## Deployment

### Deployed on Vercel

The application is deployed and live on Vercel:
- **URL**: [https://shophub-a2z.vercel.app/dashboard](https://shophub-a2z.vercel.app/dashboard)

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Known Issues & Limitations

### Current Limitations
- **Static Product Data**: Uses FakeStore API mock data (not real e-commerce)
- **No Authentication**: Currently no user login or registration system
- **No Payment Processing**: Checkout is not fully implemented
- **No Backend Database**: Uses API mock data, not a persistent database
- **Limited to FakeStore Products**: Cannot add custom products

### Checkout Status
The checkout functionality is currently under development. You can:
- View your complete cart and order summary
- See itemized costs and shipping calculations
- Review total amount before purchase
- **Next Step**: Full payment integration coming soon


## Support

If you encounter any issues or have questions:

1. **Check Existing Issues**: Search the [GitHub Issues](https://github.com/ashishvora1997/shop-hub/issues) page
2. **Create New Issue**: Report bugs or request features
3. **Discussions**: Join the discussion forum for questions and suggestions

## Roadmap

### Phase 1 (Current)
- ✅ Product listing and filtering
- ✅ Shopping cart management
- ✅ Theme switching
- ✅ Responsive design

### Phase 2 (Coming Soon)
- 🔄 Complete checkout process
- 🔄 Order history
- 🔄 User authentication
- 🔄 Wishlist functionality

### Phase 3 (Future)
- 📋 Product reviews and ratings
- 📋 Admin dashboard
- 📋 Real payment integration
- 📋 Email notifications
- 📋 Advanced analytics

## Credits

- **API**: [FakeStore API](https://fakestoreapi.com/)
- **UI Components**: [Shadcn/UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Framework**: [Next.js](https://nextjs.org/)

## Connect With Me

- **GitHub**: [ashishvora1997](https://github.com/ashishvora1997)
- **LinkedIn**: [Ashish Vora](https://www.linkedin.com/in/ashish-vora-150359234)

---

**Last Updated**: November 2024

**Version**: 1.0.0

Made with ❤️ by ShopHub Team
