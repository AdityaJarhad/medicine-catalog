/*
  # Create products and categories tables for pharmaceutical catalog

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `icon` (text, icon name for UI)
      - `product_count` (integer, denormalized count)
      - `created_at` (timestamp)
    
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `category_id` (uuid, foreign key)
      - `composition` (text, ingredients/composition)
      - `pack_sizes` (text, comma-separated or JSON)
      - `price_label` (text, e.g., "Contact for pricing")
      - `image_url` (text, Cloudinary URL)
      - `description` (text, product description)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Public read access (no authentication required for catalog)
    - No write access for public users
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  icon text NOT NULL,
  product_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category_id uuid NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  composition text NOT NULL,
  pack_sizes text NOT NULL,
  price_label text DEFAULT 'Contact for pricing',
  image_url text,
  description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Categories are publicly readable"
  ON categories FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Products are publicly readable"
  ON products FOR SELECT
  TO public
  USING (true);