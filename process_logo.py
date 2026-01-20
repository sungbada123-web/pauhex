from PIL import Image, ImageOps
import os

def make_transparent(input_path, output_path):
    print(f"Processing {input_path}...")
    # Open the image and ensure it's in RGBA mode
    img = Image.open(input_path).convert("RGBA")
    
    # Create a grayscale version of the image to use as a mask
    # We want white areas (logo background) to be transparent (alpha 0)
    # and dark/colored areas to be opaque (alpha 255)
    gray = ImageOps.grayscale(img)
    
    # Invert the grayscale image so white becomes 0 and black becomes 255
    # This will be our alpha channel
    alpha = ImageOps.invert(gray)
    
    # Optional: Slightly boost the alpha to ensure colored parts are fully opaque
    # but keep the transition smooth
    alpha = alpha.point(lambda p: min(255, int(p * 1.1)) if p > 10 else 0)
    
    # Split the original image into its components
    r, g, b, _ = img.split()
    
    # Recombine using our new alpha channel
    transparent_img = Image.merge("RGBA", (r, g, b, alpha))
    
    # Crop the image to its bounding box to remove unnecessary whitespace
    bbox = transparent_img.getbbox()
    if bbox:
        transparent_img = transparent_img.crop(bbox)
        
    transparent_img.save(output_path, "PNG")
    print(f"Saved optimized transparent logo to {output_path}")

if __name__ == "__main__":
    input_logo = r"d:\BaiduSyncdisk\N8N\pauhex\public\images\logo.png"
    output_logo = r"d:\BaiduSyncdisk\N8N\pauhex\public\images\logo_transparent.png"
    if not os.path.exists(input_logo):
        print(f"Error: {input_logo} not found.")
    else:
        make_transparent(input_logo, output_logo)
