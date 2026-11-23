import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test("home shows real profile, project links, and career details", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page).toHaveTitle("Ashutosh Yadav — Frontend Engineer");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Frontendengineering.Built to scale.",
  );
  await expect(
    page.getByText("Zestgeek Solutions", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("Lovely Professional University", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: "Read my contribution to JioInsure",
      exact: true,
    }),
  ).toHaveAttribute("href", "/projects/jioinsure");
  await expect(page.getByText(/lorem ipsum/i)).toHaveCount(0);
  await expect(page.getByRole("link", { name: /Download CV/i })).toHaveCount(0);
  const image = page.getByRole("img", { name: "Ashutosh Yadav", exact: true });
  await expect(image).toBeVisible();
  await expect
    .poll(() => image.evaluate((el) => (el as HTMLImageElement).naturalWidth))
    .toBeGreaterThan(0);
  expect(errors).toEqual([]);
});

test("work filters show the matching real projects and reset", async ({
  page,
}) => {
  await page.goto("/projects");
  await expect(page.getByRole("article")).toHaveCount(5);
  await page.getByRole("button", { name: "Independent" }).click();
  await expect(page.getByRole("article")).toHaveCount(1);
  await expect(page.getByRole("heading", { name: "VidyaPulse" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /^Project Landscape/ }),
  ).toHaveCount(0);
  await page.getByRole("button", { name: "Professional" }).click();
  await expect(page.getByRole("article")).toHaveCount(2);
  await expect(
    page.getByRole("heading", { name: "JioInsure", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "All work" }).click();
  await expect(page.getByRole("article")).toHaveCount(5);
  await expect(page.getByRole("button", { name: "All work" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
});

test("navigation, theme toggle, and theme persistence work", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Toggle color theme" }).click();
  await expect(page.locator("html")).toHaveClass("dark");
  await page.reload();
  await expect(page.locator("html")).toHaveClass("dark");
  await page.getByRole("button", { name: "Toggle color theme" }).click();
  await expect(page.locator("html")).toHaveClass("light");
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Work", exact: true })
    .click();
  await expect(page).toHaveURL(/\/projects$/);
  await page
    .getByRole("link", { name: "Let’s talk", exact: true })
    .first()
    .click();
  await expect(page).toHaveURL(/\/contact$/);
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "About", exact: true })
    .click();
  await expect(page).toHaveURL(/\/#about$/);
  await expect(
    page.getByRole("heading", { name: "Curiosity meets craft." }),
  ).toBeVisible();
});

test("contact validates input and prepares an encoded email draft", async ({
  page,
}) => {
  await page.goto("/contact");
  const submit = page.getByRole("button", { name: "Create email draft" });
  await submit.click();
  await expect(page.locator("#name:invalid")).toHaveCount(1);
  await page.getByLabel("Your name").fill("Test & Review");
  await page
    .getByLabel("Email address", { exact: true })
    .fill("test@example.com");
  await page
    .getByLabel("A little about your idea")
    .fill("A React app & a useful interface.");
  await submit.click();
  const draftLink = page.getByRole("link", { name: "Open email app" });
  await expect(draftLink).toBeVisible();
  const url = new URL((await draftLink.getAttribute("href"))!);
  expect(url.pathname).toBe("ashu9972ya@gmail.com");
  expect(url.searchParams.get("subject")).toBe(
    "Portfolio enquiry from Test & Review",
  );
  expect(url.searchParams.get("body")).toContain(
    "A React app & a useful interface.",
  );
  expect(url.searchParams.get("body")).toContain("test@example.com");
  await expect(
    page.getByRole("status").filter({ hasText: "Your email draft" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "+91 7355596996" }),
  ).toHaveAttribute("href", "tel:+917355596996");
});

test("all pages fit the viewport and contain one main heading", async ({
  page,
}) => {
  for (const route of [
    "/",
    "/projects",
    "/contact",
    "/projects/jioinsure",
    "/projects/bimastreet",
    "/projects/vidyapulse",
  ]) {
    await page.goto(route);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("main")).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    expect(
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth <=
          document.documentElement.clientWidth,
      ),
    ).toBe(true);
  }
  await page.setViewportSize({ width: 320, height: 740 });
  for (const route of [
    "/",
    "/projects",
    "/contact",
    "/projects/jioinsure",
    "/projects/bimastreet",
    "/projects/vidyapulse",
  ]) {
    await page.goto(route);
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(320);
  }
  const response = await page.goto("/this-page-does-not-exist");
  expect(response?.status()).toBe(404);
  await page.getByRole("link", { name: "Back to home" }).click();
  await expect(page).toHaveURL("/");
});

test("contact can copy the actual email address", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/contact");
  await page.getByRole("button", { name: "Copy email address" }).click();
  await expect(
    page.getByRole("status").filter({ hasText: "Email address copied." }),
  ).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "ashu9972ya@gmail.com",
  );
});

test("pages have no automatic WCAG A/AA accessibility violations in either theme", async ({
  page,
}) => {
  for (const route of [
    "/",
    "/projects",
    "/contact",
    "/projects/jioinsure",
    "/projects/bimastreet",
    "/projects/vidyapulse",
  ]) {
    await page.goto(route);
    for (const theme of ["light", "dark"]) {
      if (theme === "dark")
        await page.getByRole("button", { name: "Toggle color theme" }).click();
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations, `${route} in ${theme} theme`).toEqual([]);
    }
    await page.getByRole("button", { name: "Toggle color theme" }).click();
  }
});

test("verified employment, resume and professional project scope", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(
    page.getByText("Evervent Pvt. Ltd.", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("Dec 2024 – Present", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("Associate Developer-Front End", { exact: true }),
  ).toBeVisible();
  await expect(page.getByText(/Engenia|BizFlow/)).toHaveCount(0);
  await expect(page.locator("#work-title")).toHaveText(
    "Selected work.Personal contributions.",
  );
  await expect(page.getByText("Independent", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("link", { name: /LinkedIn/ }).first(),
  ).toHaveAttribute("href", "https://www.linkedin.com/in/ashu59/");
  const download = page.waitForEvent("download");
  await page
    .getByRole("link", { name: "Download Resume", exact: true })
    .click();
  expect((await download).suggestedFilename()).toBe(
    "Ashutosh_Yadav_Frontend_Engineer_Resume.pdf",
  );
  const pdf = await request.get("/Ashutosh_Yadav_Frontend_Engineer_Resume.pdf");
  expect(pdf.status()).toBe(200);
  expect(pdf.headers()["content-type"]).toContain("application/pdf");
  const { readFileSync } = await import("node:fs");
  expect(
    Buffer.compare(
      await pdf.body(),
      readFileSync("public/Ashutosh_Yadav_Frontend_Engineer_Resume.pdf"),
    ),
  ).toBe(0);
  for (const [slug, href] of [
    ["jioinsure", "https://jioinsure.in"],
    ["bimastreet", "https://bimastreet.com"],
    ["vidyapulse", "https://information-collection-nine.vercel.app/"],
  ]) {
    await page.goto("/projects/" + slug);
    await expect(
      page.getByRole("heading", { name: "My engineering contributions" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Visit public product|Open application/ }),
    ).toHaveAttribute("href", href);
  }
  expect((await request.get("/projects/not-a-project")).status()).toBe(404);
});

test("skip link transfers keyboard focus to main content", async ({ page }) => {
  for (const route of [
    "/",
    "/projects",
    "/contact",
    "/projects/jioinsure",
    "/projects/bimastreet",
    "/projects/vidyapulse",
  ]) {
    await page.goto(route);
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "Skip to content", exact: true }),
    ).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("main")).toBeFocused();
  }
});

test("production SEO uses the owner-supplied domain and working social image", async ({
  page,
  request,
}) => {
  const domain = "https://ashutoshyadev.vercel.app";
  const routes = [
    "/",
    "/projects",
    "/contact",
    "/projects/jioinsure",
    "/projects/bimastreet",
    "/projects/vidyapulse",
  ];
  for (const route of routes) {
    await page.goto(route);
    const canonical = new URL(route, domain).href;
    for (const selector of [
      'link[rel="canonical"]',
      'meta[property="og:url"]',
    ]) {
      const value = await page
        .locator(selector)
        .getAttribute(selector.startsWith("link") ? "href" : "content");
      expect(new URL(value!).href).toBe(canonical);
    }
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      "index, follow",
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image",
    );
    const schema = await page
      .locator('script[type="application/ld+json"]')
      .textContent();
    expect(JSON.parse(schema!).url).toBe(domain);
  }
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  expect((xml.match(/<loc>/g) || []).length).toBe(6);
  for (const route of routes)
    expect(xml).toContain(`<loc>${domain}${route === "/" ? "/" : route}</loc>`);
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(`Sitemap: ${domain}/sitemap.xml`);
  const image = await request.get("/opengraph-image");
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toContain("image/png");
  expect((await image.body()).subarray(0, 8).toString("hex")).toBe(
    "89504e470d0a1a0a",
  );
});
