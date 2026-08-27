# Category Images Folder Structure

This folder contains organized images for each product category. Place your category-specific images in the corresponding subfolders:

## Folder Structure

- **laptops/** - Images for laptop products (Dell, HP, Lenovo, Apple, etc.)
- **networking/** - Images for networking equipment (switches, routers)
- **servers/** - Images for server hardware
- **storage/** - Images for storage devices (NAS, SAN)
- **workstations/** - Images for workstation/desktop computers
- **security/** - Images for security equipment (firewalls)
- **accessories/** - Images for accessories (racks, cables, etc.)

## Current Image Files by Category:

**Laptops (31 images):**
- Dell1.jpg, dell2.jpg, dell3.jpg, dell4.jpg, dell5.jpg, dell6.jpg, dell7.jpg, dell8.jpg, dell9.jpg, dell10.jpg
- Hp1.jpg, HP2.jpg, HP3.jpg, HP4.jpg, Hp6.jpg, Hp7.jpg, HP8.jpg, HP9.jpg
- apple1.jpg, apple2.jpg, apple3.jpg, apple6.jpg, apple7.jpg, apple8.jpg, apple14.jpg, apple19.jpg
- lenova1.jpg, lenova2.jpg, lenova3.jpg, lenova4.jpg, lenova5.jpg

**Servers (5 images):**
- server1.jpg, storage2.jpg, storage3.jpg, storage4.jpg, storage6.jpg

**Networking (5 images):**
- networking1.jpg, networking2.jpg, networking3.jpg, networking4.jpg, networking7.jpg

**Storage (6 images):**
- storage1.jpg, storage2.png, storage3.jpg, storage4.jpg, storage5.jpg, storage6.jpg

**Workstations (5 images):**
- workstation1.jpg, workstation2.jpg, workstation3.jpg, workstation4.jpg, workstation5.jpg

**Security (4 images):**
- security1.jpg, security2.jpg, security3.jpg, security4.jpg

**Accessories (5 images):**
- accessories1.jpg, accessories2.jpg, accessories3.jpg, accessories4.jpg, accessories5.jpg

## Supported Formats

- JPG/JPEG
- PNG
- WebP

## How to Update Images

1. Place your images in the appropriate category folder
2. Update the image paths in `frontend/src/data/site.js` to match your filenames
3. The website will automatically use these images based on the category
4. When users filter by category (e.g., "Servers"), only server images will display
5. When users select "All", all products from all categories will display

## Adding More Images

If you want to add more images to a category:
1. Add the new image file to the category folder
2. Update the corresponding image array in `frontend/src/data/site.js`
3. Assign the new image to a product in the `PRODUCTS` array
