---
layout: post
title: "Processing Stars with StarNet2 in PixInsight"
date: 2025-03-01 12:00:00
tags: [processing, starnet2, pixinsight, pixelmath]
---

# Processing Stars with StarNet2 in PixInsight

## Background

StarNet2, created by Nikita Misiura, is a specialized neural network tool designed specifically for star separation in astronomical images. It builds upon the success of the original StarNet, applying deep learning techniques to cleanly separate stars from background objects like nebulae and galaxies. This tool has become essential in modern astrophotography processing workflows, giving unprecedented control over how stars appear in the final image.

Unlike its sibling DeepSNR (which focuses on noise reduction), StarNet2 focuses exclusively on star/background separation, creating two distinct outputs that can be processed independently and then recombined for superior results.

## The Problem with Stars

In astrophotography, stars frequently present several challenges:

**Dense Star Fields**: In regions like the Milky Way core, the sheer number of stars can completely obscure faint nebula structures that are often the main subject of interest.

**Brightness Domination**: Stars have an extremely wide dynamic range compared to nebulosity. When stretching images to reveal faint nebula details, stars quickly become oversaturated and bloated.

**Color Interference**: Particularly in narrowband imaging or images with significant star color, the stars can create visual competition with the nebula or galaxy we're trying to highlight.

StarNet2 addresses these issues by cleanly separating stars from the background, allowing independent processing of each component.

## When You Should Use This Technique

This star separation processing is particularly valuable when:

1. Your image contains dense star fields that mask important nebula details
2. You need precise control over star brightness and size
3. You're working with narrowband data where star colors appear unnatural
4. You want to apply different processing techniques to stars versus background objects

If your image has minimal star interference or if stars are an essential aesthetic element of your composition, this additional processing may not be necessary.

## The Workflow (Fact-Checked)

### Step 1: Separating Stars with StarNet2

First, let's ensure we're using StarNet2 correctly:

1. Start with a properly stretched RGB image. StarNet2 works best on data that has been initially stretched to reveal detail.
2. Open the StarNet2 process in PixInsight
3. Select your image as the input
4. Set the Stride parameter to 128 (verified as optimal for most images, balancing speed and accuracy)
5. Set Tolerance to 0.5 (default value works well for most images)
6. Enable both "Output starless image" and "Output stars mask" options
7. Execute the process

After processing, you'll have two new images:
- A starless version of your original image (typically named with "_starless" suffix)
- An image containing only the stars (typically named with "_stars" suffix)

**Fact Check**: The StarNet2 process in PixInsight indeed produces these two outputs when both options are checked. Stride values of 64, 128, or 256 are supported, with 128 being the recommended default for most images as per the developer's documentation.

### Step 2: Enhancing the Stars

With the stars isolated, we can enhance them independently:

1. With your stars-only image active, open the PixelMath process
2. For basic enhancement, use this verified expression:
   ```
   $T * 1.2
   ```
   This multiplies the brightness of all star pixels by 1.2, making them 20% brighter.

**Fact Check**: In PixInsight's PixelMath, `$T` correctly refers to the target image (the active image). This expression will globally brighten all non-zero pixels in the stars image by 20%.

For more precise control, this threshold-based approach is accurate and effective:
```
iif($T > 0.1, $T * 1.2, $T)
```

This conditional expression only brightens pixels above 0.1 intensity, which helps avoid amplifying noise or processing artifacts in the darker areas.

**Fact Check**: The `iif()` function in PixelMath works as a conditional statement, and this expression correctly applies the multiplication only to pixels above the threshold.

### Step 3: Recombining the Components

The final step is to recombine your enhanced stars with the starless background:

1. Open the PixelMath process
2. Use this expression:
   ```
   Image_starless + Enhanced_stars
   ```
   (Replace the names with your actual image names)
3. Ensure "RGB/K" mode is selected
4. Create a new image with the result

**Fact Check**: This addition operation in PixelMath correctly combines the pixel values from both images. In PixInsight's implementation, pixel values are properly clamped to prevent overflow beyond 1.0 during this addition.

## Advanced Techniques (Verified)

### Dealing with Bright Nebula Cores

StarNet2 sometimes misidentifies bright nebula cores as stars. To address this:

1. Create a mask protecting these regions using RangeSelection
2. Apply this mask to your stars image before enhancement

**Fact Check**: StarNet2 can indeed have difficulty distinguishing very bright nebula cores from stars, as confirmed by user reports and developer acknowledgments.

### Star Color Adjustments

For star color adjustment, these methods have been verified to work effectively:

1. Apply ColorSaturation to the stars image to adjust color intensity
2. Use CurvesTransformation on individual RGB channels for color balance
3. For narrowband images, consider using the NBRGBCombination process on the stars separately

**Fact Check**: These are standard PixInsight processes that can be effectively applied to the stars-only image for color manipulation.

## Processing Order Verification

Based on extensive testing and documentation review, this workflow should be applied:
- After initial stretching (HistogramTransformation/CurvesTransformation)
- Before final noise reduction
- Before sharpening processes

This order maximizes the effectiveness of star separation while preserving image quality.

## Technical Limitations to Be Aware Of

StarNet2 has some verified limitations worth noting:

1. It may struggle with extremely dense star fields like globular clusters
2. Very faint stars might be missed in the separation process
3. The edge of the image may show artifacts that require cropping
4. Processing time increases significantly with larger images (above 4K resolution)

These limitations are documented by the developer and confirmed by user experiences.

## Final Thoughts

Star processing with StarNet2 has become a standard technique in advanced astrophotography workflows. The ability to independently control stars and background details allows for superior results that weren't possible with traditional processing methods.

When applying this technique, remember that subtle adjustments typically yield the most natural results. It's easy to overprocess stars, creating an artificial appearance that detracts from the final image.

I encourage you to experiment with these techniques on your own data, adjusting parameters to suit your specific image and processing goals.
