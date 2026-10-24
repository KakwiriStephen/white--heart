import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaMinus,
  FaPinterest,
  FaPlus,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import NotFound from "./NotFound";
import "./shop.css";

const products = [
  {
    id: "hoodie",
    name: "Hoodie",
    description: "A comfortable everyday hoodie made for showing your support.",
    price: 2500,
    oldPrice: 2800,
    currency: "KSh",
    image: "/images/shop/hoodie.png",
    category: "Apparel",
    tags: ["hoodie", "apparel"],
    sku: "WH-001",
    badge: "Featured",
    rating: 5,
    sizes: ["Small", "Medium", "Large", "Extra Large", "XXXL"],
    colors: [
      "Black with white stitching",
      "White with black stitching",
      "Gray with black stitching",
    ],
  },
  {
    id: "collarless-shirt",
    name: "Collarless Shirt",
    description: "A classic collarless shirt for comfortable everyday wear.",
    price: 950,
    currency: "KSh",
    image: "/images/shop/collarless-shirt.png",
    category: "Shirts",
    tags: ["collarless shirt", "apparel"],
    sku: "WH-002",
    sizes: ["Small", "Medium", "Large", "Extra Large", "XXXL"],
    colors: [
      "Black with white stitching",
      "White with black stitching",
      "Gray with black stitching",
    ],
  },
  {
    id: "collared-shirt",
    name: "Collared Shirt",
    description: "A smart collared shirt for casual and everyday occasions.",
    price: 1450,
    currency: "KSh",
    image: "/images/shop/collared-shirt.png",
    category: "Shirts",
    tags: ["collared shirt", "apparel"],
    sku: "WH-003",
    sizes: ["Small", "Medium", "Large", "Extra Large", "XXXL"],
    colors: [
      "Black with white stitching",
      "White with black stitching",
      "Gray with black stitching",
    ],
  },
  {
    id: "singlets",
    name: "Singlets",
    description: "Lightweight sleeveless singlets for relaxed everyday wear.",
    price: 750,
    currency: "KSh",
    image: "/images/shop/singlets.png",
    category: "Apparel",
    tags: ["singlets", "apparel"],
    sku: "WH-004",
    sizes: ["Small", "Medium", "Large", "Extra Large", "XXXL"],
    colors: [
      "Black with white stitching",
      "White with black stitching",
      "Gray with black stitching",
    ],
  },
  {
    id: "notebooks",
    name: "Notebooks",
    description: "A handy notebook for notes, plans, and ideas.",
    price: 800,
    currency: "KSh",
    image: "/images/shop/notebooks.png",
    category: "Stationery",
    tags: ["notebook", "stationery"],
    sku: "WH-005",
    badge: "Featured",
    sale: true,
  },
  {
    id: "caps",
    name: "Caps",
    description: "A versatile cap for everyday outings and activities.",
    price: 1800,
    oldPrice: 2000,
    currency: "KSh",
    image: "/images/shop/caps-removebg-preview.png",
    category: "Accessories",
    tags: ["cap", "accessories"],
    sku: "WH-006",
    badge: "Featured",
    colors: [
      "Black with white stitching",
      "White with black stitching",
      "Gray with black stitching",
    ],
  },
];

const formatPrice = (price, currency) =>
  currency === "KSh"
    ? `KSh ${price.toLocaleString("en-KE")}`
    : `$${price.toFixed(2)}`;

function ProductCard({ product, onOpen }) {
  return (
    <article className="compact-product">
      <button
        className="compact-product__open"
        type="button"
        onClick={() => onOpen(product)}
        aria-label={`View ${product.name}`}
      >
        <span className="compact-product__image">
          <img src={product.image} alt="" loading="lazy" />
        </span>
        <span className="compact-product__details">
          <span className="compact-product__badges">
            {(product.oldPrice || product.sale) && (
              <span className="compact-product__badge compact-product__badge--sale">
                -11%
              </span>
            )}
            {product.badge && (
              <span className="compact-product__badge compact-product__badge--featured">
                {product.badge}
              </span>
            )}
          </span>
          <span className="compact-product__name">{product.name}</span>
          <span className="compact-product__description">
            {product.description}
          </span>
          {product.rating && (
            <span className="compact-product__rating" aria-label="Rated 5 out of 5">
              {"★".repeat(product.rating)}
              <span>{"★".repeat(5 - product.rating)}</span>
            </span>
          )}
          <span className="compact-product__price">
            {product.oldPrice && (
              <del>{formatPrice(product.oldPrice, product.currency)}</del>
            )}
            {product.maxPrice
              ? `${formatPrice(product.price, product.currency)} – ${formatPrice(product.maxPrice, product.currency)}`
              : formatPrice(product.price, product.currency)}
          </span>
        </span>
      </button>
    </article>
  );
}

function QuickView({ product, onClose, onAddToOrder }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [wishlisted, setWishlisted] = useState(false);
  const missingRequiredOptions =
    (product.sizes && !selectedSize) || (product.colors && !selectedColor);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("shop-quick-view-open");
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("shop-quick-view-open");
    };
  }, [onClose]);

  return (
    <div
      className="quick-view-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="quick-view"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-view-title"
      >
        <div className="quick-view__image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="quick-view__content">
          <button
            className="quick-view__close"
            type="button"
            onClick={onClose}
            aria-label="Close product details"
          >
            ×
          </button>
          <h1 id="quick-view-title">{product.name}</h1>
          <p className="quick-view__description">{product.description}</p>
          <p className="quick-view__price">
            {product.oldPrice && (
              <del>{formatPrice(product.oldPrice, product.currency)}</del>
            )}
            {product.maxPrice
              ? `${formatPrice(product.price, product.currency)} – ${formatPrice(product.maxPrice, product.currency)}`
              : formatPrice(product.price, product.currency)}
          </p>
          {product.colors && (
            <div className="quick-view__size">
              <label htmlFor="quick-view-color">COLOR</label>
              <select
                id="quick-view-color"
                value={selectedColor}
                onChange={(event) => setSelectedColor(event.target.value)}
                required
              >
                <option value="">Choose color</option>
                {product.colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          )}
          {product.sizes && (
            <div className="quick-view__size">
              <label htmlFor="quick-view-size">SIZE</label>
              <select
                id="quick-view-size"
                value={selectedSize}
                onChange={(event) => setSelectedSize(event.target.value)}
                required
              >
                <option value="">Choose size</option>
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="quick-view__purchase">
            <div className="quick-view__quantity" aria-label="Quantity">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                aria-label="Decrease quantity"
              >
                <FaMinus aria-hidden="true" />
              </button>
              <span aria-live="polite">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                aria-label="Increase quantity"
              >
                <FaPlus aria-hidden="true" />
              </button>
            </div>
            <button
              className="quick-view__add"
              type="button"
              onClick={() =>
                onAddToOrder({
                  productId: product.id,
                  color: selectedColor,
                  size: selectedSize,
                  quantity,
                })
              }
              disabled={Boolean(missingRequiredOptions)}
            >
              ADD TO ORDER
            </button>
          </div>
          <button
            className={`quick-view__wishlist${wishlisted ? " is-active" : ""}`}
            type="button"
            onClick={() => setWishlisted((current) => !current)}
            aria-pressed={wishlisted}
          >
            <FaHeart aria-hidden="true" />
            {wishlisted ? "ADDED TO WISHLIST" : "ADD TO WISHLIST"}
          </button>
          <div className="quick-view__meta">
            <p>SKU: {product.sku}</p>
            <p>
              CATEGORY: <Link to="/shop">{product.category}</Link>
            </p>
            <p>TAGS: {product.tags.join(", ")}</p>
          </div>
          <div className="quick-view__share">
            <span>SHARE</span>
            <a href="https://facebook.com" aria-label="Share on Facebook">
              <FaFacebookF />
            </a>
            <a href="https://x.com" aria-label="Share on X">
              <FaXTwitter />
            </a>
            <a href="https://instagram.com" aria-label="Share on Instagram">
              <FaInstagram />
            </a>
            <a href="https://pinterest.com" aria-label="Share on Pinterest">
              <FaPinterest />
            </a>
            <a href="https://whatsapp.com" aria-label="Share on WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Shop() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState("default");
  const [filterOpen, setFilterOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [orderItems, setOrderItems] = useState([]);
  const [orderOpen, setOrderOpen] = useState(false);
  const selectedProduct = productId
    ? products.find((product) => product.id === productId)
    : null;
  const categories = ["All", ...new Set(products.map((product) => product.category))];
  const visibleProducts = useMemo(() => {
    const filtered =
      category === "All"
        ? [...products]
        : products.filter((product) => product.category === category);
    if (sortOrder === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    }
    return filtered;
  }, [category, sortOrder]);

  if (productId && !selectedProduct) {
    return <NotFound />;
  }

  const closeQuickView = () => navigate("/shop");
  const addToOrder = (newItem) => {
    setOrderItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) =>
          item.productId === newItem.productId &&
          item.color === newItem.color &&
          item.size === newItem.size,
      );
      if (existingItem) {
        return currentItems.map((item) =>
          item === existingItem
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item,
        );
      }
      return [...currentItems, newItem];
    });
    setOrderOpen(true);
    closeQuickView();
  };
  const orderQuantity = orderItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const orderMessage = [
    "Hello, I would like to enquire about ordering:",
    ...orderItems.flatMap((item, index) => {
      const product = products.find((productItem) => productItem.id === item.productId);
      if (!product) return [];
      return [
        "",
        `${index + 1}. ${product.name}`,
        ...(item.color ? [`Color: ${item.color}`] : []),
        ...(item.size ? [`Size: ${item.size}`] : []),
        `Quantity: ${item.quantity}`,
      ];
    }),
  ].join("\n");
  const whatsappOrderUrl = `https://wa.me/254715378281?text=${encodeURIComponent(orderMessage)}`;

  return (
    <div className="shop-catalog">
      <div className="shop-breadcrumb">
        <div className="shop-breadcrumb__content">
          <div className="shop-breadcrumb__trail">
            <Link to="/">HOME</Link>
            <span aria-hidden="true">›</span>
            <span>SHOP</span>
          </div>
          <div className="shop-breadcrumb__copy">
            <span className="shop-breadcrumb__eyebrow">MERCH WITH MEANING</span>
            <h1>Wear your heart.<br />Share the good.</h1>
            <p>
              Every WhiteHeart purchase supports our work and helps us care for
              more people in our community.
            </p>
          </div>
          <div className="shop-breadcrumb__visual" aria-hidden="true">
            <span className="shop-breadcrumb__halo" />
            <div className="shop-breadcrumb__product shop-breadcrumb__product--shirt">
              <img src="/images/shop/collarless-shirt.png" alt="" />
            </div>
            <div className="shop-breadcrumb__product shop-breadcrumb__product--hoodie">
              <img src="/images/shop/hoodie.png" alt="" />
            </div>
            <div className="shop-breadcrumb__product shop-breadcrumb__product--cap">
              <img src="/images/shop/caps-removebg-preview.png" alt="" />
            </div>
            <div className="shop-breadcrumb__brand">
              <img src="/images/wlogo.png" alt="" />
              <span>GOOD THINGS<br />HAPPEN TOGETHER</span>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-catalog__content container">
        <div className="shop-catalog__toolbar">
          <p>SHOWING 1–{visibleProducts.length} OF {visibleProducts.length} RESULTS</p>
          <div className="shop-catalog__controls">
            {orderItems.length > 0 && (
              <button
                className="shop-filter-button shop-order-toggle"
                type="button"
                aria-expanded={orderOpen}
                aria-controls="shop-order-panel"
                onClick={() => setOrderOpen((open) => !open)}
              >
                {orderOpen ? "HIDE ORDER" : `REVIEW ORDER (${orderQuantity})`}
              </button>
            )}
            <label className="shop-sort">
              <span className="visually-hidden">Sort products</span>
              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
              >
                <option value="default">DEFAULT SORTING</option>
                <option value="name">SORT BY NAME</option>
                <option value="price-low">PRICE: LOW TO HIGH</option>
                <option value="price-high">PRICE: HIGH TO LOW</option>
              </select>
            </label>
            <button
              className="shop-filter-button"
              type="button"
              aria-expanded={filterOpen}
              onClick={() => setFilterOpen((open) => !open)}
            >
              FILTER <FaArrowLeft aria-hidden="true" />
            </button>
          </div>
        </div>
        {orderOpen && orderItems.length > 0 && (
          <section
            className="shop-order-panel"
            id="shop-order-panel"
            aria-label="Your order"
          >
            <div className="shop-order-panel__header">
              <h2>Your order</h2>
              <span>{orderQuantity} items</span>
            </div>
            <ul className="shop-order-list">
              {orderItems.map((item, index) => {
                const product = products.find(
                  (productItem) => productItem.id === item.productId,
                );
                if (!product) return null;
                return (
                  <li
                    className="shop-order-list__item"
                    key={`${item.productId}-${item.color}-${item.size}-${index}`}
                  >
                    <div>
                      <strong>{product.name}</strong>
                      {item.color && <span>{item.color}</span>}
                      {item.size && <span>Size: {item.size}</span>}
                      <span>Quantity: {item.quantity}</span>
                    </div>
                    <button
                      type="button"
                      aria-label={`Remove ${product.name} from order`}
                      onClick={() =>
                        setOrderItems((currentItems) =>
                          currentItems.filter((_, itemIndex) => itemIndex !== index),
                        )
                      }
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>
            <a
              className="shop-order-panel__whatsapp"
              href={whatsappOrderUrl}
              target="_blank"
              rel="noreferrer"
            >
              ORDER VIA WHATSAPP
            </a>
          </section>
        )}
        {filterOpen && (
          <div className="shop-filter-panel" aria-label="Filter products">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "is-selected" : ""}
                type="button"
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
        <div className="shop-compact-grid">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={(item) => navigate(`/shop/${item.id}`)}
            />
          ))}
        </div>
      </div>
      {selectedProduct && (
        <QuickView
          product={selectedProduct}
          onClose={closeQuickView}
          onAddToOrder={addToOrder}
        />
      )}
    </div>
  );
}
