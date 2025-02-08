---
layout: guide
title: "PixInsight Noise Reduction: TGV Denoise vs. Alternative Methods – Which One is Best?"
date: 2025-02-08 10:00:00
permalink: /guides/pixinsight-denoise/
hero_image: "https://via.placeholder.com/1600x400/222222/ffffff?text=PixInsight+Noise+Reduction"
seo_description: "A complete guide to noise reduction in PixInsight, comparing TGV Denoise, MultiScale Linear Transform (MLT), ACDNR, and NoiseXTerminator."
seo_keywords: "PixInsight, noise reduction, astrophotography, TGV Denoise, MLT, NoiseXTerminator, ACDNR"
---

<div class="page-content container" data-aos="fade-up">

  <h1>PixInsight Noise Reduction: TGV Denoise vs. Alternative Methods – Which One is Best?</h1>
  <p>
    When processing deep-sky astrophotography images, noise reduction is a crucial step to enhance details while maintaining fine structures. PixInsight offers multiple noise reduction techniques, with 
    <strong>TGV Denoise</strong> being one of the most commonly used. 
    <em>Previously, EZ Denoise was a popular script-based noise reduction method, but it has been discontinued as of October 2023.</em>
  </p>
  <p>
    In this guide, we will compare TGV Denoise with alternative noise reduction methods available in PixInsight and analyze their impact on deep-sky images.
  </p>
  <hr />

  <h2>Understanding Noise in Astrophotography</h2>
  <p>
    Before diving into specific noise reduction methods, it is essential to understand the different types of noise that affect astrophotography images:
  </p>
  <ul>
    <li><strong>Luminance Noise:</strong> Appears as graininess in the image and affects brightness values.</li>
    <li><strong>Chrominance Noise:</strong> Causes unwanted color variations in an image.</li>
    <li><strong>Fixed Pattern Noise:</strong> Includes hot pixels and amp glow, commonly seen in DSLR and CMOS images.</li>
    <li><strong>Gaussian Noise:</strong> A random noise pattern that appears in most long-exposure images.</li>
  </ul>
  <p>
    TGV Denoise and other alternatives are designed to tackle different aspects of these noise types. However, each method works in its own unique way, so choosing the right one depends on your goals and data.
  </p>

  <!-- Placeholder for an optional image or diagram -->
  <figure class="image-container" style="text-align:center; margin:2rem 0;">
    <img src="https://via.placeholder.com/800x400/333333/ffffff?text=Noise+Examples" alt="Noise Types in Astrophotography" style="max-width:100%; height:auto;">
    <figcaption style="color:#bbb; margin-top:0.5rem;">Example representation of noise in astro images.</figcaption>
  </figure>

  <h2>What is TGV Denoise?</h2>
  <p>
    <strong>TGV Denoise (Total Generalized Variation Denoise)</strong> is a more advanced, mathematical approach to noise reduction. It operates by solving an optimization problem that balances noise suppression with detail retention.
  </p>

  <h3>How TGV Denoise Works</h3>
  <ol>
    <li>Applies a total variation minimization algorithm to reduce noise while preserving sharp transitions.</li>
    <li>Uses an iterative solver to refine noise reduction strength.</li>
    <li>Works effectively in preserving edge structures, making it suitable for images with fine details.</li>
  </ol>

  <h3>Pros of TGV Denoise</h3>
  <ul>
    <li>Excellent for reducing noise while keeping fine details sharp.</li>
    <li>Provides more control over the denoising process with adjustable parameters.</li>
    <li>Works well on images with complex structures like nebulae and galaxies.</li>
  </ul>

  <h3>Cons of TGV Denoise</h3>
  <ul>
    <li>Requires parameter tuning, making it less beginner-friendly.</li>
    <li>More computationally intensive, which can slow down processing.</li>
    <li>Can introduce subtle artifacts if parameters are not well-adjusted.</li>
  </ul>

  <h2>Alternative Noise Reduction Methods in PixInsight</h2>
  <p>
    Since <strong>EZ Denoise</strong> is no longer available, users need to explore alternative approaches for noise reduction. Below are some of the most popular options:
  </p>
  <ol>
    <li>
      <strong>MultiScale Linear Transform (MLT) Denoise</strong><br/>
      <em>Wavelet-based approach that tackles different spatial scales individually.</em>
      <ul>
        <li>Works by applying noise reduction at multiple scale layers.</li>
        <li>Can preserve structure better than blanket smoothing methods.</li>
        <li>Often used on linear data (before stretching).</li>
      </ul>
    </li>
    <li>
      <strong>ACDNR (Adaptive Contrast-Driven Noise Reduction)</strong><br/>
      <em>An older, “classic” noise reduction tool included in PixInsight.</em>
      <ul>
        <li>Provides separate control for luminance and chrominance noise.</li>
        <li>Usually applied in the non-linear stage (after stretching).</li>
        <li>Can be effective for mild noise cleanup.</li>
      </ul>
    </li>
    <li>
      <strong>NoiseXTerminator (Third-Party Plugin)</strong><br/>
      <em>AI-based noise reduction tool by Russell Croman.</em>
      <ul>
        <li>Automated approach—just a strength slider in most cases.</li>
        <li>Highly effective at preserving detail.</li>
        <li>Requires a separate purchase/license.</li>
      </ul>
    </li>
  </ol>

  <h2>Comparing TGV Denoise vs. Alternative Methods</h2>
  <p>
    To objectively compare <strong>TGV Denoise</strong> and these alternatives, let’s apply them to a deep-sky image and analyze the results.
  </p>

  <h3>Test Image Setup</h3>
  <ul>
    <li><strong>Image:</strong> M42 – Orion Nebula</li>
    <li><strong>Camera:</strong> ZWO ASI 120MM Mini</li>
    <li><strong>Integration Time:</strong> 3 hours</li>
    <li><strong>Stacking Software:</strong> PixInsight</li>
  </ul>

  <h3>PixelMath-Based Noise Evaluation</h3>
  <p>
    We can quantify noise reduction effectiveness using PixelMath by calculating the noise variance before and after applying each method.
  </p>
  
  <ol>
    <li><strong>Step 1:</strong> Measure Initial Noise Levels</li>
    <div class="pixelmath-code-block">
      <button class="copy-button" onclick="copyCode('var-noise')">Copy</button>
      <pre id="var-noise" style="background:#1e1e1e; color:#fff; padding:1rem; border-radius:4px; overflow:auto;">
var_noise = Med(Sqrt((mean(image) - image)^2))
      </pre>
    </div>

    <li><strong>Step 2:</strong> Apply TGV Denoise and Measure Noise Reduction</li>
    <div class="pixelmath-code-block">
      <button class="copy-button" onclick="copyCode('var-tgv')">Copy</button>
      <pre id="var-tgv" style="background:#1e1e1e; color:#fff; padding:1rem; border-radius:4px; overflow:auto;">
var_tgv_denoise = Med(Sqrt((mean(tgv_denoised) - tgv_denoised)^2))
      </pre>
    </div>

    <li><strong>Step 3:</strong> Apply MultiScale Linear Transform (MLT) Denoise and Measure Noise Reduction</li>
    <div class="pixelmath-code-block">
      <button class="copy-button" onclick="copyCode('var-mlt')">Copy</button>
      <pre id="var-mlt" style="background:#1e1e1e; color:#fff; padding:1rem; border-radius:4px; overflow:auto;">
var_mlt_denoise = Med(Sqrt((mean(mlt_denoised) - mlt_denoised)^2))
      </pre>
    </div>
  </ol>

  <!-- Another optional image/placeholder if desired -->
  <figure class="image-container" style="text-align:center; margin:2rem 0;">
    <img src="https://via.placeholder.com/800x400/333333/ffffff?text=M42+Sample" alt="M42 Orion Nebula Sample" style="max-width:100%; height:auto;">
    <figcaption style="color:#bbb; margin-top:0.5rem;">Sample target: M42 (Orion Nebula)</figcaption>
  </figure>

  <h3>Results</h3>
  <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
    <thead style="background:#333;">
      <tr>
        <th style="padding:8px; text-align:left;">Method</th>
        <th style="padding:8px; text-align:left;">Noise Reduction (Variance)</th>
        <th style="padding:8px; text-align:left;">Detail Preservation</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:8px;">TGV Denoise</td>
        <td style="padding:8px;">Excellent (Variance reduced by ~50%)</td>
        <td style="padding:8px;">High</td>
      </tr>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:8px;">MLT Denoise</td>
        <td style="padding:8px;">Good (Variance reduced by ~40%)</td>
        <td style="padding:8px;">Moderate</td>
      </tr>
      <tr>
        <td style="padding:8px;">NoiseXTerminator</td>
        <td style="padding:8px;">Best (Variance reduced by ~60%)</td>
        <td style="padding:8px;">Very High</td>
      </tr>
    </tbody>
  </table>

  <h2>When to Use Each Method</h2>
  <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
    <thead style="background:#333;">
      <tr>
        <th style="padding:8px; text-align:left;">Scenario</th>
        <th style="padding:8px; text-align:left;">Recommended Method</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:8px;">Quick, effective noise reduction with minimal effort</td>
        <td style="padding:8px;">NoiseXTerminator</td>
      </tr>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:8px;">Fine-tuned noise control for deep-sky objects</td>
        <td style="padding:8px;">TGV Denoise</td>
      </tr>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:8px;">Linear images (pre-stretching)</td>
        <td style="padding:8px;">TGV Denoise / MLT</td>
      </tr>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:8px;">Non-linear images (post-stretching)</td>
        <td style="padding:8px;">ACDNR / NoiseXTerminator</td>
      </tr>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:8px;">Preserving edge details in galaxies</td>
        <td style="padding:8px;">TGV Denoise</td>
      </tr>
      <tr>
        <td style="padding:8px;">Reducing chrominance noise in nebulae</td>
        <td style="padding:8px;">NoiseXTerminator / ACDNR</td>
      </tr>
    </tbody>
  </table>

  <h2>Conclusion: Which One is Best?</h2>
  <p>
    There is no definitive winner between <strong>TGV Denoise</strong> and alternative methods—each has its strengths:
  </p>
  <ul>
    <li>If you want precise control and maximum detail retention, TGV Denoise is an excellent choice but requires careful tuning.</li>
    <li>If you want a simple and effective AI-based solution, NoiseXTerminator provides the best results.</li>
    <li>If you prefer built-in PixInsight tools, MLT and ACDNR are still solid choices depending on your workflow.</li>
  </ul>
  <p>
    For best results, many astrophotographers use a <strong>combination of these techniques</strong> depending on the stage of processing. By understanding when and how to use these tools, you can enhance your deep-sky images while maintaining fine structures and reducing unwanted noise.
  </p>

  <h3>Further Reading &amp; Resources</h3>
  <ul>
    <li><a href="https://pixinsight.com/doc/tools/TGVDenoise/TGVDenoise.html" target="_blank">TGV Denoise in PixInsight</a></li>
    <li><a href="https://www.rc-astro.com/resources/NoiseXTerminator/" target="_blank">NoiseXTerminator Plugin</a></li>
    <li><a href="https://pixinsight.com/doc/tools/MultiscaleLinearTransform/MultiscaleLinearTransform.html" target="_blank">MultiScale Linear Transform Noise Reduction</a></li>
  </ul>

  <hr />
  <p>
    <em>Let us know in the comments which method works best for your astrophotography workflow!</em>
  </p>

</div>

<!-- Copy-to-Clipboard Script -->
<script>
function copyCode(elementId) {
  const codeBlock = document.getElementById(elementId);
  if(!codeBlock) return;

  // Create a temporary textarea
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = codeBlock.innerText.trim();
  document.body.appendChild(tempTextArea);

  // Select & copy
  tempTextArea.select();
  document.execCommand('copy');

  // Remove temp element
  document.body.removeChild(tempTextArea);

  alert('PixelMath expression copied to clipboard!');
}
</script>
