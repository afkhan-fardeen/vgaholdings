# Mobile Optimization Guide

## Overview
All components have been optimized for mobile devices with responsive breakpoints:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

## Component Mobile Optimizations

### Header
- ✅ Logo: Responsive sizing (h-14 → h-16 → h-20)
- ✅ Mobile menu with smooth transitions
- ✅ Touch-friendly tap targets (min 44x44px)
- ✅ Proper ARIA labels for accessibility

### Hero Section
- ✅ Video: Responsive height (80vh mobile, 100vh desktop)
- ✅ Scroll button: Positioned higher on mobile (bottom-12)
- ✅ Overlay: 30% black overlay for better contrast
- ✅ Touch-friendly scroll indicator

### About Section
- ✅ Stacked layout on mobile
- ✅ Responsive typography (text-sm → text-base → text-lg)
- ✅ Image: Full width on mobile, 50% on desktop
- ✅ Proper spacing adjustments

### What We Do Section
- ✅ Single column on mobile, 2 columns tablet, 4 columns desktop
- ✅ Image heights: 112px → 144px → 128px
- ✅ Responsive text sizes
- ✅ Touch-friendly cards

### Portfolio Section
- ✅ 2 columns mobile, 3 tablet, 6 desktop
- ✅ Logo heights: 64px → 80px → 96px → 112px
- ✅ Proper gap spacing
- ✅ Touch-friendly hover states

### Services Section
- ✅ Single column mobile, 2 tablet, 4 desktop
- ✅ Responsive padding (p-5 → p-6 → p-8 → p-10)
- ✅ Icon sizes: 24px → 28px → 32px
- ✅ Text scaling

### News Section
- ✅ Stacked layout on mobile
- ✅ Image sizes: Full width mobile, 160px tablet, 256px desktop
- ✅ Text truncation on mobile (line-clamp-2)
- ✅ Touch-friendly "Read More" buttons

### News Detail Pages
- ✅ Single column images on mobile
- ✅ Responsive typography
- ✅ Optimized breadcrumbs
- ✅ Proper image loading (priority for first image)

### Clients Section
- ✅ Flexible wrap layout
- ✅ Logo sizes: 80px → 96px → 128px
- ✅ Proper gap spacing
- ✅ Touch-friendly interactions

### Leadership Section
- ✅ Single column mobile, 2 tablet, 3 desktop
- ✅ Image sizes: 120px → 150px → 180px → 200px
- ✅ Responsive text
- ✅ Smooth animations

### Contact Section
- ✅ Stacked layout on mobile
- ✅ Clickable phone number (tel: link)
- ✅ Responsive icon sizes
- ✅ Proper text wrapping

### Footer
- ✅ Single column mobile, 2 tablet, 4 desktop
- ✅ Responsive text sizes
- ✅ Touch-friendly links

## Typography Scale

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| H1 | text-xl | text-2xl | text-3xl/4xl |
| H2 | text-2xl | text-3xl | text-3xl/4xl |
| H3 | text-base | text-lg | text-xl |
| Body | text-sm | text-base | text-lg |
| Small | text-xs | text-sm | text-sm |

## Spacing Scale

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Section Padding | py-12 | py-16 | py-24 |
| Container Padding | px-4 | px-6 | px-6 |
| Gaps | gap-3/4 | gap-6/8 | gap-8/12 |

## Image Loading Strategy

- **Above fold**: `priority` or `eager` loading
- **Below fold**: `lazy` loading
- **First 3 items**: Eager loading
- **Rest**: Lazy loading

## Touch Targets

All interactive elements meet minimum 44x44px touch target size:
- ✅ Navigation links
- ✅ Buttons
- ✅ Cards
- ✅ Images with links

## Performance Optimizations

- ✅ Image sizes specified for optimal loading
- ✅ Lazy loading for below-fold content
- ✅ Responsive image sizes
- ✅ Optimized video loading
- ✅ Reduced animations on mobile

## Testing Checklist

- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on iPad (Safari)
- [ ] Test landscape orientation
- [ ] Test touch interactions
- [ ] Test scrolling performance
- [ ] Test image loading
- [ ] Test navigation menu
- [ ] Test form inputs (if any)
- [ ] Test video playback
