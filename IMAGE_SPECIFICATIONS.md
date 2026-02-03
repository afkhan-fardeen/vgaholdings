# Image Size Specifications Guide

This document provides exact image dimensions and specifications for optimal display across all devices.

## Logo Images

### Header Logo (`/logos/vgalogo.png`)
- **Recommended Size**: 400x400px (1:1 aspect ratio)
- **Display Size**: 
  - Mobile: 56px (h-14)
  - Tablet: 64px (h-16)
  - Desktop: 80px (h-20)
- **Format**: PNG with transparent background
- **Optimization**: Use PNG-24 or WebP for best quality

### Footer Logo (`/logos/vgalogo.png`)
- **Recommended Size**: 200x200px (1:1 aspect ratio)
- **Display Size**: 40px (h-10)
- **Format**: PNG with transparent background
- **Note**: Will be inverted to white in footer

## Hero Section

### Video Background (`/videos/VGA_Holdings_Corporate_Video_1080P.mp4`)
- **Recommended Resolution**: 1920x1080px (Full HD) or higher
- **Aspect Ratio**: 16:9
- **Format**: MP4 (H.264 codec)
- **Max File Size**: 10MB (optimize for web)
- **Duration**: 30-60 seconds recommended
- **Note**: Video covers full viewport height

## About Section

### Corporate Image (`/images/corporate-image.jpg`)
- **Recommended Size**: 1200x900px (4:3 aspect ratio)
- **Display Size**: 
  - Mobile: Full width
  - Desktop: 50% width (600px)
- **Format**: JPG (quality 85-90%) or WebP
- **Note**: Currently using Unsplash placeholder - replace with actual corporate image

## What We Do Section

### Service Images (4 images)
1. **Oil & Gas Pipeline** (`/images/SL-Pipeline-Construction.jpeg`)
2. **Chemical Distribution** (`/images/carbontechimg.jpg`)
3. **Consultancy Services** (`/images/Consultancy-service.jpg`)
4. **Brokerage Services** (`/images/Brokerage.jpg`)

**Specifications for all:**
- **Recommended Size**: 800x600px (4:3 aspect ratio)
- **Display Size**: 
  - Mobile: 128px height (h-32)
  - Tablet: 160px height (h-40)
  - Desktop: 128px height (h-32)
- **Format**: JPG (quality 85%) or WebP
- **Aspect Ratio**: 4:3 or 16:9 (will be cropped to fit)

## Portfolio Section

### Portfolio Logos (6 logos)
1. **Playsy** (`/images/Playsy-logo.jpg`)
2. **VGA Events** (`/images/vga-events-logo.jpg`)
3. **The Agency** (`/images/agency-logo.jpg`)
4. **Playbox** (`/images/Playbox-Logo.jpg`)
5. **Metakid** (`/images/metakid-logo.jpg`)
6. **MoneyTree** (`/images/Moneytree_logo.png`)

**Specifications for all:**
- **Recommended Size**: 400x200px (2:1 aspect ratio) or square 300x300px
- **Display Size**: 
  - Mobile: 80px height (h-20)
  - Tablet: 96px height (h-24)
  - Desktop: 112px height (h-28)
- **Format**: PNG with transparent background (preferred) or JPG
- **Background**: Transparent or white
- **Note**: Logos should be centered and have padding around them

## News Section

### News Article Images (6 images)
1. **Greek Street Sold** (`/images/greek-street-news.png`)
2. **Greek Street TV** (`/images/alpha-live.png`)
3. **Carbontech** (`/images/carbontech.png`)
4. **Arthur Little** (`/images/arthur.png`)
5. **Stealth-Lock** (`/images/SL-Pipeline-Construction.jpeg`)
6. **Tenaris** (`/images/Tenaris_Logo.png`)

**Specifications:**
- **Recommended Size**: 800x600px (4:3 aspect ratio) or PNG equivalent
- **Display Size**: 
  - Mobile: Full width, 160px height
  - Tablet: 160px width, 112px height
  - Desktop: 256px width, 160px height
- **Format**: PNG (for logos/graphics) or JPG (quality 85%) or WebP
- **Aspect Ratio**: 4:3 (will be cropped to fit)

### News Detail Page Images (3 images per article)
- **Recommended Size**: 1200x800px (3:2 aspect ratio)
- **Display Size**: 
  - Mobile: Full width, 192px height
  - Tablet: 50% width, 224px height
  - Desktop: 33% width each, 256px height
- **Format**: PNG (for graphics/logos) or JPG (quality 85%) or WebP
- **Note**: Each news article uses the same image 3 times (can be replaced with unique images)

## Clients Section

### Client Logos (7 logos)
1. **ADNOC** (`/images/ADNOC.png`)
2. **Bapco** (`/images/Bapco.jpg`)
3. **GALFAR** (`/images/GALFAR.png`)
4. **PDO** (`/images/PDO.png`)
5. **TENARIS** (`/images/TENARIS.png`)
6. **RAFCO** (`/images/RAFCO.png`)
7. **OXY** (`/images/OXY.png`)

**Specifications for all:**
- **Recommended Size**: 300x150px (2:1 aspect ratio)
- **Display Size**: 
  - Mobile: 48px height, 96px width
  - Desktop: 64px height, 128px width
- **Format**: PNG with transparent background (preferred) or JPG
- **Background**: Transparent or white
- **Note**: Logos displayed in grayscale, color on hover

## Leadership Section

### Leadership Photos (3 photos)
1. **Terry Antoniadis (CEO)** (`/images/Terry-pic.jpg`)
2. **Yana Antoniadis (MD)** (`/images/managingdirector.png`)
3. **Brett Maclagan (Compliance)** (`/images/compliancedirector.png`)

**Specifications for all:**
- **Recommended Size**: 600x800px (3:4 aspect ratio - portrait)
- **Display Size**: 
  - Mobile: 150px width (max-w-[150px])
  - Tablet: 180px width (max-w-[180px])
  - Desktop: 200px width (max-w-[200px])
- **Format**: JPG (quality 90%) or PNG
- **Aspect Ratio**: 3:4 (portrait)
- **Note**: Images displayed as circles, ensure face is centered

## Stealth-Lock Section

### Stealth-Lock Logo (`/images/STEALTH-LOGO.png`)
- **Recommended Size**: 800x600px (4:3 aspect ratio)
- **Display Size**: Full width with padding
- **Format**: PNG with transparent background
- **Note**: Used as placeholder for YouTube video

## Image Optimization Guidelines

### General Rules:
1. **File Formats**:
   - Photos: JPG (quality 85-90%) or WebP
   - Logos/Icons: PNG-24 with transparency or SVG
   - Screenshots: PNG-24

2. **Compression**:
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target file sizes:
     - Small images (< 200KB)
     - Medium images (200KB - 500KB)
     - Large images (500KB - 1MB max)

3. **Responsive Images**:
   - Provide @2x versions for retina displays
   - Use WebP format when possible
   - Next.js automatically optimizes images

4. **Naming Convention**:
   - Use lowercase with hyphens: `image-name.jpg`
   - Be descriptive: `terry-antoniadis-ceo.jpg`
   - Include size if multiple versions: `logo-400x400.png`

## Quick Reference Table

| Image Type | Recommended Size | Aspect Ratio | Format | Max File Size |
|------------|-----------------|--------------|--------|---------------|
| Header Logo | 400x400px | 1:1 | PNG | 100KB |
| Footer Logo | 200x200px | 1:1 | PNG | 50KB |
| Hero Video | 1920x1080px | 16:9 | MP4 | 10MB |
| About Image | 1200x900px | 4:3 | JPG/WebP | 500KB |
| Service Images | 800x600px | 4:3 | JPG/WebP | 300KB |
| Portfolio Logos | 400x200px | 2:1 | PNG | 100KB |
| News Images | 800x600px | 4:3 | PNG/JPG/WebP | 300KB |
| News Detail | 1200x800px | 3:2 | PNG/JPG/WebP | 400KB |
| Client Logos | 300x150px | 2:1 | PNG | 80KB |
| Leadership Photos | 600x800px | 3:4 | JPG | 200KB |

## Image Replacement Checklist

When replacing images, ensure:
- ✅ Correct dimensions (use recommended sizes)
- ✅ Proper aspect ratio
- ✅ Optimized file size
- ✅ Correct file format
- ✅ Descriptive filename
- ✅ Alt text matches content
- ✅ Image is sharp and clear
- ✅ Colors match brand guidelines
