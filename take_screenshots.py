import asyncio
from playwright.async_api import async_playwright
import os

async def take_screenshots():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1200, "height": 800})
        
        # Load mockup HTML file
        html_path = "file://" + os.path.abspath("mockup.html")
        await page.goto(html_path, wait_until="networkidle")
        
        # Wait for content to render
        await page.wait_for_timeout(2000)
        
        # Create screenshots directory
        os.makedirs("screenshots", exist_ok=True)
        
        # Full page screenshot
        await page.screenshot(path="screenshots/full-mockup.png", full_page=True)
        print("✓ Full mockup screenshot saved")
        
        # Take individual screenshots of each section
        screenshot_sections = [
            ("hero", ".hero", "Home Page - Hero Section"),
            ("code-input", ".editor-section", "Code Input Section"),
            ("summary", ".screenshot:nth-child(2)", "Summary Card"),
            ("risks", ".screenshot:nth-child(3)", "Risk Matrix"),
            ("functions", ".screenshot:nth-child(4)", "Function Breakdown"),
            ("owner", ".screenshot:nth-child(5)", "Owner Privileges"),
            ("export", ".screenshot:nth-child(6)", "Export Panel"),
        ]
        
        for name, selector, desc in screenshot_sections:
            try:
                element = await page.query_selector(selector)
                if element:
                    await element.screenshot(path=f"screenshots/{name}.png")
                    print(f"✓ {desc} screenshot saved")
                else:
                    print(f"⚠️ Element not found: {selector}")
            except Exception as e:
                print(f"⚠️ Failed to capture {desc}: {e}")
        
        await browser.close()
        print("\n✅ All screenshots generated successfully!")

if __name__ == "__main__":
    asyncio.run(take_screenshots())
